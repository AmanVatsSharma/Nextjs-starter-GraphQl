import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneuserMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.userWhereUniqueInput, required: true }) }))

export const deleteOneuserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'user',
    nullable: true,
    args: deleteOneuserMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.user.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneuserMutation = defineMutation((t) => ({
  deleteOneuser: t.prismaField(deleteOneuserMutationObject(t)),
}));
