import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RandomImageCreateManyInputSchema: z.ZodType<Prisma.RandomImageCreateManyInput> = z.object({
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default RandomImageCreateManyInputSchema;
