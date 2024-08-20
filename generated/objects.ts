import { Prisma } from '.prisma/client';
export {
  userObject,
  userIdFieldObject,
  userNameFieldObject,
  userEmailFieldObject,
  userPhoneFieldObject,
  createManyuserMutation,
  createOneuserMutation,
  deleteManyuserMutation,
  deleteOneuserMutation,
  updateManyuserMutation,
  updateOneuserMutation,
  upsertOneuserMutation,
  createManyuserMutationObject,
  createOneuserMutationObject,
  deleteManyuserMutationObject,
  deleteOneuserMutationObject,
  updateManyuserMutationObject,
  updateOneuserMutationObject,
  upsertOneuserMutationObject,
  findFirstuserQuery,
  findManyuserQuery,
  countuserQuery,
  findUniqueuserQuery,
  findFirstuserQueryObject,
  findManyuserQueryObject,
  countuserQueryObject,
  findUniqueuserQueryObject
} from './user';
import { builder } from '../builder';

export const BatchPayload = builder.objectType(builder.objectRef<Prisma.BatchPayload>('BatchPayload'), {
  description: 'Batch payloads from prisma.',
  fields: (t) => ({
    count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
  }),
});

export const modelNames = [
  'user',
] as const;

export type Model = typeof modelNames[number];
