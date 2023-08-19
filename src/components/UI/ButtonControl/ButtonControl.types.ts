import { ButtonProps } from "../Button/Button.types";
import { TextFieldProps } from "../TextField";

export interface ControlButtons extends ButtonProps {
  text: string;
}

export interface ButtonControlProps extends TextFieldProps {
  leftButtons?: ControlButtons[];
  rightButtons?: ControlButtons[];
}
