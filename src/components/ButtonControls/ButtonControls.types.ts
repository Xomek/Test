import { ControlButtons } from "../UI/ButtonControl";

export interface FieldType {
  value: string;
}

export type ButtonControlNames = "right2" | "left1-right1";
export type ButtonFieldsInterface = Record<ButtonControlNames, FieldType>;
