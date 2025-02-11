import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema';
import { TagUncheckedUpdateManyWithoutTodoListNestedInputSchema } from './TagUncheckedUpdateManyWithoutTodoListNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema';

export const ToDoListUncheckedUpdateWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUncheckedUpdateWithoutTopicsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();

export default ToDoListUncheckedUpdateWithoutTopicsInputSchema;
