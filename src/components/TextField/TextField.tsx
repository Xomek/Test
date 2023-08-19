import { forwardRef } from "react";
import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";

const TextField = forwardRef<HTMLInputElement | null, TextFieldProps>(
  ({ className, label, value, clearValue, ...props }, ref) => {
    return (
      <label className={styles.textField}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          ref={ref}
          className={`${styles.input} ${className}`}
          value={value}
          {...props}
        />

        {clearValue && value && (
          <div className={styles.clearIcon} onClick={clearValue} />
        )}
      </label>
    );
  }
);

export default TextField;
