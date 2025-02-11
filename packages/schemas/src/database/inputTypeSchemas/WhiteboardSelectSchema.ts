import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export default WhiteboardSelectSchema;