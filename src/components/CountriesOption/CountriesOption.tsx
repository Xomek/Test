import { CountriesOptionProps } from "./CountiresOption.types";
import styles from "./CountiresOption.module.css";

const CountiresOption: React.FC<CountriesOptionProps> = ({
  option,
  onClick,
}) => {
  return (
    <div className={styles.option} onClick={() => onClick(option)}>
      <div className={styles.text}>
        {option.name} {option.fullName}
      </div>
      <img src={option.flag} alt="optionFlag" />
    </div>
  );
};

export default CountiresOption;
