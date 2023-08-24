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

const autocontrol3 = list.getControlByName("autocomplete3");
const autocontrol10 = list.getControlByName("autocomplete10");

const Autocompletes: React.FC = observer(() => {
  const debounced3 = useDebounce(autocontrol3?.field?.value, 400);
  const debounced10 = useDebounce(autocontrol10?.field?.value, 400);

  useEffect(() => {
    // Если бы имел дело с реальным запросом использовал бы AbortController для отмены всех предыдущих запросов
    const reqParam = { active: true };
    autocontrol3?.getCountries(reqParam);

    return () => {
      reqParam.active = false;
    };
  }, [debounced3]);

  useEffect(() => {
    const reqParam = { active: true };
    autocontrol10?.getCountries(reqParam);

    return () => {
      reqParam.active = false;
    };
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
