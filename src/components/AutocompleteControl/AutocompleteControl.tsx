import { useEffect, useRef, useState } from "react";
import { AutocompleteControlProps } from "./Autocomplete.types";
import TextField from "../TextField";
import DropDown from "./components/DropDown";
import styles from "./AutocompleteControl.module.css";

/**
 * @param value Значение текстового контрола.
 * @param selectValue Функция для выбора опции.
 * @param onChange Функция обработчик изменения значения в поле.
 * @param options Массив опций для вывода подсказок.
 * @param loading Загрузка опций.
 * @param renderOption Компонент опции в выпадающем списке.
 * @param max Максимальное кол-во подсказок.
 * @param label Label над текстовым контролом.
 */

function AutocompleteControl<T extends Record<string, any>>({
  options = [],
  loading,
  renderOption,
  placeholder = "Поиск",
  selectValue,
  max = 10,
  className,
  ...props
}: AutocompleteControlProps<T>) {
  const autocompleteRef = useRef<HTMLInputElement | null>(null);

  const [filteredOptions, setFilteredOptions] = useState<T[]>(options ?? []);

  useEffect(() => {
    setFilteredOptions(() => filteredOptions.slice(0, max));
  }, [options]);

  return (
    <div>
      <TextField
        className={className}
        ref={autocompleteRef}
        placeholder={placeholder}
        {...props}
      />
      {!!filteredOptions.length &&
        document.activeElement === autocompleteRef.current && (
          <DropDown<T>
            options={filteredOptions}
            loading={loading}
            onClick={selectValue}
            renderOption={renderOption}
          />
        )}
    </div>
  );
}
export default AutocompleteControl;
