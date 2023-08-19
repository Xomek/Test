import { DropDownProps } from "./DropDown.types";
import styles from "./DropDown.module.css";

/**
 * @param options Массив опций для вывода подсказок.
 * @param loading Загрузка опций.
 * @param renderOption Компонент опции в выпадающем списке.
 * @param onClick Обработчик клика.
 */

function DropDown<T extends Record<string, any> | string>({
  options,
  loading,
  renderOption,
  onClick,
}: DropDownProps<T>) {
  return (
    <div className={styles.dropDown}>
      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        options.map((option, index) =>
          renderOption ? (
            renderOption(option, index, () => onClick(option))
          ) : (
            <div
              key={index}
              className={styles.option}
              onClick={() => onClick(option)}
            >
              {typeof option === "string"
                ? option
                : Object.values(option).map((optionValue) => optionValue + " ")}
            </div>
          )
        )
      )}
    </div>
  );
}

export default DropDown;
