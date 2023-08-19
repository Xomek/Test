import { TextFieldProps } from "../TextField";

export interface AutocompleteControlProps<T> extends TextFieldProps {
  options: T[];
  loading?: boolean;
  renderOption?: (
    option: T,
    index: number,
    cb: (selectedOption: T) => void
  ) => JSX.Element;
  selectValue: (selectedOption: T) => void;
  max?: number;
}
