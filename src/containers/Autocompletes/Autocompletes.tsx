import { observer } from "mobx-react-lite";
import { CountiresOption } from "../../components";
import { Paper, AutocompleteControl } from "../../components/UI";
import ViewModel from "./ViewModel";
import styles from "./Autocompletes.module.css";

const Autocompletes: React.FC = observer(() => {
  const {
    fields,
    labels,
    countries,
    isLoading,
    onChagneHandler,
    onClearHandler,
    selectOption,
  } = ViewModel;

  console.log(fields);
  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол-автокомплит</div>

      {labels.map((label) => (
        <AutocompleteControl
          key={label}
          label={label}
          options={countries}
          loading={isLoading}
          onChange={(e) => onChagneHandler(e.target.value, label)}
          selectValue={(option) => selectOption(option, label)}
          renderOption={(option, index, cb) => (
            <CountiresOption key={index} option={option} onClick={cb} />
          )}
          clearValue={() => onClearHandler(label)}
          {...fields[label]}
        />
      ))}
    </Paper>
  );
});

export default Autocompletes;
