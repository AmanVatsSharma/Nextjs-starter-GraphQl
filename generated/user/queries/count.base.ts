import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countuserQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.userWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.userOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.userWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserScalarFieldEnum], required: false }),
}))

export const countuserQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countuserQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.user.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countuserQuery = defineQuery((t) => ({
  countuser: t.field(countuserQueryObject(t)),
}));
