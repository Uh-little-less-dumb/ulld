import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema.js'
import { ToDoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ToDoOrderByWithAggregationInputSchema.js'
import { ToDoScalarFieldEnumSchema } from '../inputTypeSchemas/ToDoScalarFieldEnumSchema.js'
import { ToDoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ToDoScalarWhereWithAggregatesInputSchema.js'
export const ToDoGroupByArgsSchema: z.ZodType<Prisma.ToDoGroupByArgs> = z.object({
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ ToDoOrderByWithAggregationInputSchema.array(),ToDoOrderByWithAggregationInputSchema ]).optional(),
  by: ToDoScalarFieldEnumSchema.array(),
  having: ToDoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ToDoGroupByArgsSchema;