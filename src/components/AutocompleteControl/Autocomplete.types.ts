import { TextFieldProps } from "../TextField";

export interface AutocompleteControlProps<T> extends TextFieldProps {
  options: T[];
  loading?: boolean;
  renderOption?: (option: T) => JSX.Element;
  selectValue: (selectedValue: string) => void;
  max?: number;
}
