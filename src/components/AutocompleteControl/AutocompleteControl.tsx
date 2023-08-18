import { AutocompleteControlProps } from "./Autocomplete.types";

/**
 * @param value Значение текстового контрола.
 * @param onChange Функция обработчик значения.
 * @param max Максимальное кол-во подсказок.
 */

const AutocompleteControl: React.FC<AutocompleteControlProps> = ({
  max, // Хорошим вариантом было-бы указать значение по умолчанию, но такого в задании не было.
  ...props
}) => {
  return <input {...props} />;
};

export default AutocompleteControl;
