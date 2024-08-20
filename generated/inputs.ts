// @ts-nocheck
import { Prisma } from '.prisma/client';

import { builder } from '../builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};



export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","name","email","phone"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const NullsOrder = builder.enumType('NullsOrder', {
  values: ["first","last"] as const,
});

export const userWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[userWhereInput]}),
  OR: t.field({"required":false,"type":[userWhereInput]}),
  NOT: t.field({"required":false,"type":[userWhereInput]}),
  id: t.field({"required":false,"type":StringFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  email: t.field({"required":false,"type":StringFilter}),
  phone: t.field({"required":false,"type":FloatNullableFilter}),
});
export const userWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userWhereInput>, false>('userWhereInput').implement({
  fields: userWhereInputFields,
});

export const userOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  phone: t.field({"required":false,"type":SortOrder}),
});
export const userOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userOrderByWithRelationInput>, false>('userOrderByWithRelationInput').implement({
  fields: userOrderByWithRelationInputFields,
});

export const userWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AND: t.field({"required":false,"type":[userWhereInput]}),
  OR: t.field({"required":false,"type":[userWhereInput]}),
  NOT: t.field({"required":false,"type":[userWhereInput]}),
  name: t.field({"required":false,"type":StringFilter}),
  email: t.field({"required":false,"type":StringFilter}),
  phone: t.field({"required":false,"type":FloatNullableFilter}),
});
export const userWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userWhereUniqueInput>, false>('userWhereUniqueInput').implement({
  fields: userWhereUniqueInputFields,
});

export const userOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  phone: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":userCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":userAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":userMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":userMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":userSumOrderByAggregateInput}),
});
export const userOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userOrderByWithAggregationInput>, false>('userOrderByWithAggregationInput').implement({
  fields: userOrderByWithAggregationInputFields,
});

export const userScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[userScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[userScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[userScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":StringWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  email: t.field({"required":false,"type":StringWithAggregatesFilter}),
  phone: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
});
export const userScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userScalarWhereWithAggregatesInput>, false>('userScalarWhereWithAggregatesInput').implement({
  fields: userScalarWhereWithAggregatesInputFields,
});

export const userCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  email: t.string({"required":true}),
  phone: t.float({"required":false}),
});
export const userCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userCreateInput>, false>('userCreateInput').implement({
  fields: userCreateInputFields,
});

export const userUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  phone: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
});
export const userUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userUpdateInput>, false>('userUpdateInput').implement({
  fields: userUpdateInputFields,
});

export const userCreateManyInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  email: t.string({"required":true}),
  phone: t.float({"required":false}),
});
export const userCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userCreateManyInput>, false>('userCreateManyInput').implement({
  fields: userCreateManyInputFields,
});

export const userUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  phone: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
});
export const userUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userUpdateManyMutationInput>, false>('userUpdateManyMutationInput').implement({
  fields: userUpdateManyMutationInputFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>, false>('StringFilter').implement({
  fields: StringFilterFields,
});

export const FloatNullableFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const FloatNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatNullableFilter>, false>('FloatNullableFilter').implement({
  fields: FloatNullableFilterFields,
});

export const userCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  phone: t.field({"required":false,"type":SortOrder}),
});
export const userCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userCountOrderByAggregateInput>, false>('userCountOrderByAggregateInput').implement({
  fields: userCountOrderByAggregateInputFields,
});

export const userAvgOrderByAggregateInputFields = (t: any) => ({
  phone: t.field({"required":false,"type":SortOrder}),
});
export const userAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userAvgOrderByAggregateInput>, false>('userAvgOrderByAggregateInput').implement({
  fields: userAvgOrderByAggregateInputFields,
});

export const userMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  phone: t.field({"required":false,"type":SortOrder}),
});
export const userMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userMaxOrderByAggregateInput>, false>('userMaxOrderByAggregateInput').implement({
  fields: userMaxOrderByAggregateInputFields,
});

export const userMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  phone: t.field({"required":false,"type":SortOrder}),
});
export const userMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userMinOrderByAggregateInput>, false>('userMinOrderByAggregateInput').implement({
  fields: userMinOrderByAggregateInputFields,
});

export const userSumOrderByAggregateInputFields = (t: any) => ({
  phone: t.field({"required":false,"type":SortOrder}),
});
export const userSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.userSumOrderByAggregateInput>, false>('userSumOrderByAggregateInput').implement({
  fields: userSumOrderByAggregateInputFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>, false>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const FloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _min: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _max: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const FloatNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatNullableWithAggregatesFilter>, false>('FloatNullableWithAggregatesFilter').implement({
  fields: FloatNullableWithAggregatesFilterFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>, false>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const NullableFloatFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.float({"required":false}),
  increment: t.float({"required":false}),
  decrement: t.float({"required":false}),
  multiply: t.float({"required":false}),
  divide: t.float({"required":false}),
});
export const NullableFloatFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableFloatFieldUpdateOperationsInput>, false>('NullableFloatFieldUpdateOperationsInput').implement({
  fields: NullableFloatFieldUpdateOperationsInputFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>, false>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedFloatNullableFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const NestedFloatNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableFilter>, false>('NestedFloatNullableFilter').implement({
  fields: NestedFloatNullableFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>, false>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>, false>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedFloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _min: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _max: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const NestedFloatNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableWithAggregatesFilter>, false>('NestedFloatNullableWithAggregatesFilter').implement({
  fields: NestedFloatNullableWithAggregatesFilterFields,
});

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>, false>('NestedIntNullableFilter').implement({
  fields: NestedIntNullableFilterFields,
});