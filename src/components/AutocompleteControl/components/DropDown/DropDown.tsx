import { DropDownProps } from "./DropDown.types";
import styles from "./DropDown.module.css";

/**
 * @param options Массив опций для вывода подсказок.
 * @param renderOption Компонент опции в выпадающем списке.
 * @param onClick Обработчик клика.
 */

function DropDown<T>({ options, renderOption, onClick }: DropDownProps<T>) {
  return (
    <div className={styles.dropDown}>
      {options.map((option) =>
        renderOption ? (
          renderOption(option, onClick)
        ) : (
          <div className={styles.option} onClick={onClick} />
        )
      )}
    </div>
  );
}

export default DropDown;
