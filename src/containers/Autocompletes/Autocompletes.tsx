import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { CountiresOption } from "../../components";
import { Paper, AutocompleteControl } from "../../components/UI";
import { FieldType, AUTOCOMPLETES_NAMES } from "./Autocompletes.types";
import ViewModel from "./ViewModel";
import styles from "./Autocompletes.module.css";

const models = [
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
];

const Autocompletes: React.FC = observer(() => {
  const [
    { field: field3, getCountries: getCountries3 },
    { field: field10, getCountries: getCountries10 },
  ] = models;

  useEffect(() => {
    getCountries3(field3.value);
  }, [field3.value]);

  useEffect(() => {
    getCountries10(field10.value);
  }, [field10.value]);

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол-автокомплит</div>

      {models.map(
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
