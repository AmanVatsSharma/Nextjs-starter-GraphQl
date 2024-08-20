import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyuserMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.userWhereInput, required: false }),
      data: t.field({ type: Inputs.userUpdateManyMutationInput, required: true }),
    }))

export const updateManyuserMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyuserMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.user.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyuserMutation = defineMutation((t) => ({
  updateManyuser: t.field(updateManyuserMutationObject(t)),
}));
