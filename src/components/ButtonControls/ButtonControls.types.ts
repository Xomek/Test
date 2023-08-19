import { ControlButtons } from "../UI/ButtonControl";

export interface ButtonFieldsInterface {
  right2: {
    value: string;
    rightButtons?: ControlButtons[];
    leftButtons?: ControlButtons[];
  };

  ["left1-right2"]: {
    value: string;
    rightButtons?: ControlButtons[];
    leftButtons?: ControlButtons[];
  };
}

export type ButtonFieldsType = keyof ButtonFieldsInterface;
