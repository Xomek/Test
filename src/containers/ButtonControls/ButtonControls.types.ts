import { ControlButtons } from "../../components/UI/ButtonControl";

export interface FieldType {
  value: string;
  name: string;
}

export interface ButtonsConfiguration {
  right2: { leftButtons?: ControlButtons[]; rightButtons?: ControlButtons[] };
  ["left1-right1"]: {
    leftButtons?: ControlButtons[];
    rightButtons?: ControlButtons[];
  };
}

export enum BUTTON_CONTROL_NAMES {
  RIGHT2 = "right2",
  LEFT1_RIGHT2 = "left1-right1",
}

export type ButtonFieldsInterface = Record<BUTTON_CONTROL_NAMES, FieldType>;
