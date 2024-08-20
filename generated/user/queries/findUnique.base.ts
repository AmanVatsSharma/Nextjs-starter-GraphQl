import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueuserQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.userWhereUniqueInput, required: true }) }))

export const findUniqueuserQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'user',
    nullable: true,
    args: findUniqueuserQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.user.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueuserQuery = defineQuery((t) => ({
  findUniqueuser: t.prismaField(findUniqueuserQueryObject(t)),
}));
