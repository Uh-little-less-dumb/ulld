import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { WaitlistRequestOrderByRelevanceFieldEnumSchema } from './WaitlistRequestOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const WaitlistRequestOrderByRelevanceInputSchema: z.ZodType<Prisma.WaitlistRequestOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema),z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default WaitlistRequestOrderByRelevanceInputSchema;