import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyuserMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.userWhereInput, required: true }) }))

export const deleteManyuserMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyuserMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.user.deleteMany({ where: args.where }),
  }),
);

export const deleteManyuserMutation = defineMutation((t) => ({
  deleteManyuser: t.field(deleteManyuserMutationObject(t)),
}));
