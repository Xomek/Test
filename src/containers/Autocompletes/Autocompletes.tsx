import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { CountiresOption } from "../../components";
import { useDebounce } from "../../hooks/useDebounce";
import { Paper, AutocompleteControl } from "../../components/UI";
import { FieldType, AUTOCOMPLETES_NAMES } from "./Autocompletes.types";
import ViewModel from "./ViewModel";
import ControlList from "../../ViewModels/ControlList";
import styles from "./Autocompletes.module.css";

const list = new ControlList([
  new ViewModel<FieldType>({
    value: "",
    name: AUTOCOMPLETES_NAMES.AUTOCOMPLETE3,
    max: 3,
  }),

  new ViewModel<FieldType>({
    value: "",
    name: AUTOCOMPLETES_NAMES.AUTOCOMPLETE10,
    max: 10,
  }),
]);

const Autocompletes: React.FC = observer(() => {
  const [
    { field: field3, getCountries: getCountries3 },
    { field: field10, getCountries: getCountries10 },
  ] = list.controls;

  const debounced3 = useDebounce(field3.value, 400);
  const debounced10 = useDebounce(field10.value, 400);

  useEffect(() => {
    getCountries3(field3.value);
  }, [debounced3]);

  useEffect(() => {
    getCountries10(field10.value);
  }, [debounced10]);

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол-автокомплит</div>

      {list.controls.map(
        ({
          field,
          countries,
          isLoading,
          onChagneHandler,
          selectOption,
          onClearHandler,
        }) => (
          <AutocompleteControl
            key={field.name}
            label={field.name}
            options={countries}
            loading={isLoading}
            onChange={(e) => onChagneHandler(e.target.value)}
            selectValue={(option) => selectOption(option)}
            renderOption={(option, index, cb) => (
              <CountiresOption key={index} option={option} onClick={cb} />
            )}
            clearValue={() => onClearHandler()}
            {...field}
          />
        )
      )}
    </Paper>
  );
});

export default Autocompletes;
