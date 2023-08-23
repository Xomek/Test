import { observer } from "mobx-react-lite";
import { CountiresOption } from "../../components";
import { Paper, AutocompleteControl } from "../../components/UI";
import { FieldType, AUTOCOMPLETES_NAMES } from "./Autocompletes.types";
import ViewModel from "./ViewModel";
import styles from "./Autocompletes.module.css";

const Autocompletes: React.FC = observer(() => {
  const controls = Object.values(AUTOCOMPLETES_NAMES).map(
    (name) => new ViewModel<FieldType, AUTOCOMPLETES_NAMES>(name)
  );

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол-автокомплит</div>

      {controls.map(
        ({
          field,
          getCountries,
          countries,
          isLoading,
          onChagneHandler,
          onClearHandler,
          selectOption,
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
