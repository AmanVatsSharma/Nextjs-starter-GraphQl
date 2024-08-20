import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneuserMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.userWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.userCreateInput, required: true }),
      update: t.field({ type: Inputs.userUpdateInput, required: true }),
    }))

export const upsertOneuserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'user',
    nullable: false,
    args: upsertOneuserMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.user.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneuserMutation = defineMutation((t) => ({
  upsertOneuser: t.prismaField(upsertOneuserMutationObject(t)),
}));
