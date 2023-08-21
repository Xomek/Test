export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
}

export enum BUTTON_VARIANTS {
  CONTAINED = "contained",
  OUTLINED = "outlined",
}
