import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyuserQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.userWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.userOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.userWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserScalarFieldEnum], required: false }),
}))

export const findManyuserQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['user'],
    nullable: false,
    args: findManyuserQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.user.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyuserQuery = defineQuery((t) => ({
  findManyuser: t.prismaField(findManyuserQueryObject(t)),
}));
