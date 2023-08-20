import { ControlButtons } from "../UI/ButtonControl";

export type FieldType = {
  value: string;
  leftButtons?: ControlButtons[];
  rightButtons?: ControlButtons[];
};

export type ButtonFieldsInterface = Record<string, FieldType>;
