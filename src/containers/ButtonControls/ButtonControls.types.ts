export interface FieldType {
  value: string;
  name: string;
}

export enum BUTTON_CONTROL_NAMES {
  RIGHT2 = "right2",
  LEFT1_RIGHT2 = "left1-right1",
}

export type ButtonFieldsInterface = Record<BUTTON_CONTROL_NAMES, FieldType>;
