import { observer } from "mobx-react-lite";
import { CountiresOption } from "../../components";
import { Paper, AutocompleteControl } from "../../components/UI";
import ViewModel from "./ViewModel";
import { deepObserve } from "mobx-utils";
import { useEffect } from "react";
import { debounce } from "../../helpers";
import styles from "./Autocompletes.module.css";

const Autocompletes: React.FC = observer(() => {
  const {
    fields,
    labels,
    countries,
    getCountries,
    isLoading,
    onChagneHandler,
    onClearHandler,
    selectOption,
  } = ViewModel;

  useEffect(() => {
    const disposer = deepObserve(
      fields,
      debounce((change) => {
        if (change.type === "update") getCountries(change.object.value);
      }, 400)
    );

    return () => {
      disposer();
    };
  }, []);

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
