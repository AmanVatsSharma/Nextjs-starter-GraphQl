import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneuserMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.userCreateInput, required: true }) }))

export const createOneuserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'user',
    nullable: false,
    args: createOneuserMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.user.create({ data: args.data, ...query }),
  }),
);

export const createOneuserMutation = defineMutation((t) => ({
  createOneuser: t.prismaField(createOneuserMutationObject(t)),
}));
