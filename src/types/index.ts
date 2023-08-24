export type KeyofType<T extends Record<string, any>> = keyof T;
export type FieldType = {
  value: string;
  name: string;
};
