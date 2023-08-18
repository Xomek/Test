export interface DropDownProps<T> {
  options: T[];
  loading?: boolean;
  renderOption?: (
    option: T,
    undex: number,
    cb: (selectedOption: T) => void
  ) => JSX.Element;
  onClick: (selectedOption: T) => void;
}
