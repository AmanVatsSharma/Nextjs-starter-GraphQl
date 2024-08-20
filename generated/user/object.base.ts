import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const userObject = definePrismaObject('user', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(userIdFieldObject),
    name: t.field(userNameFieldObject),
    email: t.field(userEmailFieldObject),
    phone: t.field(userPhoneFieldObject),
  }),
});

export const userIdFieldObject = defineFieldObject('user', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const userNameFieldObject = defineFieldObject('user', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const userEmailFieldObject = defineFieldObject('user', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.email,
});

export const userPhoneFieldObject = defineFieldObject('user', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.phone,
});
