import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyuserMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.userCreateInput], required: true }) }))

export const createManyuserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['user'],
    nullable: false,
    args: createManyuserMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.user.create({ data }))),
  }),
);

export const createManyuserMutation = defineMutation((t) => ({
  createManyuser: t.prismaField(createManyuserMutationObject(t)),
}));
