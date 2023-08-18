import { AutocompleteControlProps } from "./Autocomplete.types";
import TextField from "../TextField";
import DropDown from "./components/DropDown";

/**
 * @param value Значение текстового контрола.
 * @param onChange Функция обработчик изменения значения в поле.
 * @param options Массив опций для вывода подсказок.
 * @param renderOption Компонент опции в выпадающем списке.
 * @param max Максимальное кол-во подсказок.
 * @param label Label над текстовым контролом.
 */

function AutocompleteControl<T>({
  options = [],
  renderOption,
  max, // Хорошим вариантом было-бы указать значение по умолчанию, но такого в задании не было.
  className,
  ...props
}: AutocompleteControlProps<T>) {
  return (
    <div>
      <TextField className={className} {...props} />
      {!!options.length && (
        <DropDown<T>
          options={options}
          onClick={() => {}}
          renderOption={renderOption}
        />
      )}
    </div>
  );
}
export default AutocompleteControl;
