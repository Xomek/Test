export interface DropDownProps<T> {
  options: T[];
  loading?: boolean;
  renderOption?: (option: T, cb?: () => void) => JSX.Element;
  onClick: (selectedValue: string) => void;
}
