import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { HealthReportWhereInputSchema } from './HealthReportWhereInputSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { FloatFilterSchema } from './FloatFilterSchema.js';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { DietNullableRelationFilterSchema } from './DietNullableRelationFilterSchema.js';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
export const HealthReportWhereUniqueInputSchema: z.ZodType<Prisma.HealthReportWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => HealthReportWhereInputSchema),z.lazy(() => HealthReportWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HealthReportWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HealthReportWhereInputSchema),z.lazy(() => HealthReportWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  summary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  overall: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  skin: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  bloat: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  weight_feeling: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  fullness: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  weight: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  cardiacCapacity: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  jawLine: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  joints: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  flexibility: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  anxiety: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  anxiety_desc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mood_desc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mood: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sexDrive: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  intruisiveThoughts: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  caffeineIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  glutenIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sugarIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  artificialSweetenerIntake: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  artificalDyes: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sleepQuality: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  hydration: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  twitching: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  sleepHours: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  calorie_est: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  times_meals_more_than_gap_apart: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  estHoursInExcessFast: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  dietId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  currentDiet: z.union([ z.lazy(() => DietNullableRelationFilterSchema),z.lazy(() => DietWhereInputSchema) ]).optional().nullable(),
}).strict());
export default HealthReportWhereUniqueInputSchema;