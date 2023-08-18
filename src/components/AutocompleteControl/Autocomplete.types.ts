import { TextFieldProps } from "../TextField";

export interface AutocompleteControlProps<T> extends TextFieldProps {
  options: T[];
  renderOption?: (option: T) => JSX.Element;
  max: number;
}
