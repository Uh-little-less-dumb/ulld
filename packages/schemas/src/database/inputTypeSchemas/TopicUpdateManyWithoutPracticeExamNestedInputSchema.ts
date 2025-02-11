import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutPracticeExamInputSchema } from './TopicCreateWithoutPracticeExamInputSchema.js';
import { TopicUncheckedCreateWithoutPracticeExamInputSchema } from './TopicUncheckedCreateWithoutPracticeExamInputSchema.js';
import { TopicCreateOrConnectWithoutPracticeExamInputSchema } from './TopicCreateOrConnectWithoutPracticeExamInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema } from './TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema } from './TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema.js';
import { TopicUpdateManyWithWhereWithoutPracticeExamInputSchema } from './TopicUpdateManyWithWhereWithoutPracticeExamInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUpdateManyWithoutPracticeExamNestedInputSchema: z.ZodType<Prisma.TopicUpdateManyWithoutPracticeExamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => TopicCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutPracticeExamInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutPracticeExamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default TopicUpdateManyWithoutPracticeExamNestedInputSchema;