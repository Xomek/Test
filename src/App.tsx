import { useState } from "react";
import { observer } from "mobx-react-lite";
import { AutocompleteControl, CountiresOption } from "./components";
import { CountryInfo } from "./api/apiService";
import countries from "./store/Countries";
import styles from "./App.module.css";
import { Holder } from "./helpers/Holder";

interface AutocompleteFiledInterface {
  autocomplete3: { value: string; max: number };
  autocomplete10: { value: string; max: number };
}

type AutocompleteFieldsType = keyof AutocompleteFiledInterface;

const App: React.FC = observer(() => {
  const [autocompleteFields, setAutocompleteFields] =
    useState<AutocompleteFiledInterface>({
      autocomplete3: { value: "", max: 3 },
      autocomplete10: { value: "", max: 10 },
    });

  const onChagneHandler = (value: string, name: AutocompleteFieldsType) => {
    setAutocompleteFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value },
    }));
    countries.getCountries(value); // Тут каждый обращение к api, надо оптимизировать
  };

  const selectOption = (
    selectedOption: CountryInfo,
    name: AutocompleteFieldsType
  ) => {
    setAutocompleteFields((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: `${selectedOption.name} (${selectedOption.fullName})`,
      },
    }));
  };

  const clearValue = (name: AutocompleteFieldsType) => {
    setAutocompleteFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: "" },
    }));
  };
  
  return (
    <div className={styles.app}>
      {new Holder(autocompleteFields).getKeys().map((autocomplete) => (
        <AutocompleteControl
          key={autocomplete}
          label={autocomplete}
          options={countries.options}
          name={autocomplete}
          value={autocompleteFields[autocomplete].value}
          onChange={(e) => onChagneHandler(e.target.value, autocomplete)}
          selectValue={(option) => selectOption(option, autocomplete)}
          clearValue={() => clearValue(autocomplete)}
          max={autocompleteFields[autocomplete].max}
          renderOption={(option, index, cb) => (
            <CountiresOption key={index} option={option} onClick={cb} />
          )}
        />
      ))}
    </div>
  );
});

export default App;
