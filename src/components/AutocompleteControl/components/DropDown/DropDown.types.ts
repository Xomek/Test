export interface DropDownProps<T> {
  options: T[];
  renderOption?: (option: T, cb?: () => void) => JSX.Element;
  onClick?: () => void;
}
