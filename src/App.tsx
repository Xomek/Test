import { useState } from "react";
import { observer } from "mobx-react-lite";
import { AutocompleteControl, CountiresOption } from "./components";
import { CountryInfo } from "./api/apiService";
import countries from "./store/Countries";
import styles from "./App.module.css";

interface Values {
  autocomplete3: string;
  autocomplete10: string;
}

const App: React.FC = observer(() => {
  const [values, setValues] = useState<Values>({
    autocomplete3: "",
    autocomplete10: "",
  });

  const onChagneHandler = (value: string, name: string) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
    countries.getCountries(value); // Тут каждый обращение к api, надо оптимизировать
  };

  const selectOption = (selectedOption: CountryInfo, name: string) => {
    setValues((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  // key index это плохо, но у даты нет id

  return (
    <div className={styles.app}>
      <div className={styles.inputs}>
        <AutocompleteControl
          label="autocomplete-3"
          value={values.autocomplete3}
          options={countries.options}
          selectValue={(option) => selectOption(option, "autocomplete3")}
          onChange={(e) => onChagneHandler(e.target.value, "autocomplete3")}
          renderOption={(option, index, cb) => (
            <CountiresOption key={index} option={option} onClick={cb} />
          )}
          max={3}
        />
        <AutocompleteControl
          label="autocomplete-10"
          value={values.autocomplete10}
          options={countries.options}
          selectValue={(option) => selectOption(option, "autocomplete10")}
          onChange={(e) => onChagneHandler(e.target.value, "autocomplete10")}
          renderOption={(option, index, cb) => (
            <CountiresOption key={index} option={option} onClick={cb} />
          )}
        />
      </div>
    </div>
  );
});

export default App;
