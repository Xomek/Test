import { BUTTON_VARIANTS, ButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = BUTTON_VARIANTS.CONTAINED,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, { [styles[variant]]: variant })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
