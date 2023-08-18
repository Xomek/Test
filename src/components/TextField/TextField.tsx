import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";

const TextField: React.FC<TextFieldProps> = ({
  className,
  label,
  ...props
}) => {
  return (
    <label>
      {label && <span className={styles.label}>{label}</span>}
      <input className={`${styles.input} ${className}`} {...props} />
    </label>
  );
};

export default TextField;
