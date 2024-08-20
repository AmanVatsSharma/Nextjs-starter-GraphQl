import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneuserMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.userWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.userUpdateInput, required: true }),
    }))

export const updateOneuserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'user',
    nullable: true,
    args: updateOneuserMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.user.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneuserMutation = defineMutation((t) => ({
  updateOneuser: t.prismaField(updateOneuserMutationObject(t)),
}));
