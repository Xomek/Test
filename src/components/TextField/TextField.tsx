import { forwardRef } from "react";
import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";

const TextField = forwardRef<HTMLInputElement | null, TextFieldProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label>
        {label && <span className={styles.label}>{label}</span>}
        <input
          ref={ref}
          className={`${styles.input} ${className}`}
          {...props}
        />
      </label>
    );
  }
);

export default TextField;
