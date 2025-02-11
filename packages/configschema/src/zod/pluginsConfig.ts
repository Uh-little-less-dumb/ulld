import { getCurrentPackageVersions } from "@ulld/utilities/internalDataHelpers";
import { z } from "zod";
import { ZodOutputSchema } from "../types.js";


export const priorityField = z.number().default(50)

export const pluginPrioritySchema = z.object({
    styles: priorityField,
    parser: priorityField
})

export const pluginPriorityOutputSchema = z.object({
    styles: z.number(),
    parser:z.number() 
})

export const pluginItemSchema = z.object({
    name: z.string(),
    version: z.string().default("latest"),
    priority: pluginPrioritySchema.default({})
});



export const pluginItemSchemaOutput: ZodOutputSchema<typeof pluginItemSchema> = z.object({
    name: z.string(),
    version: z.string(),
    priority: pluginPriorityOutputSchema
});

const getDefaultPlugins = (): z.input<typeof pluginItemSchema>[]  => {
    const currentPackageVersions = getCurrentPackageVersions()
       return [
            {
                name: "@ulld/api",
                version: currentPackageVersions["@ulld/api"],
            },
            {
                name: "@ulld/plot",
                version: currentPackageVersions["@ulld/plot"],
            },
        ]
    }


const pluginConfigSchemaField = z
        .union([
            pluginItemSchema,
            pluginItemSchema.array(),
            z.string(),
            z.string().array(),
        ])


export const pluginsConfigSchema = pluginConfigSchemaField.default(getDefaultPlugins())
        .transform((a = []) => {
            let items = Array.isArray(a) ? a : [a]
            let names: string[] = [];
            let newItems = items.map((s) => {
                names.push(typeof s === "string" ? s : s.name);
                return typeof s === "string" ? { name: s, version: "latest", parserIndex: 50 } : s;
            });
            return newItems;
        })

export const pluginsConfigSchemaOutput: ZodOutputSchema<typeof pluginsConfigSchema> = pluginItemSchemaOutput.array()
