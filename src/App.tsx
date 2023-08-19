import { useState } from "react";
import { observer } from "mobx-react-lite";
import { CountiresOption } from "./components";
import { AutocompleteControl, ButtonControl } from "./components/UI";
import { CountryInfo } from "./api/apiService";
import { Holder } from "./helpers/Holder";
import countries from "./store/Countries";
import styles from "./App.module.css";

interface AutocompleteFiledsInterface {
  autocomplete3: { value: string; max: number };
  autocomplete10: { value: string; max: number };
}

type AutocompleteFieldsType = keyof AutocompleteFiledsInterface;

interface ButtonFieldsInterface {
  right2: {
    value: string;
  };
  ["left1-right2"]: {
    value: string;
  };
}

const App: React.FC = observer(() => {
  const [autocompleteFields, setAutocompleteFields] =
    useState<AutocompleteFiledsInterface>({
      autocomplete3: { value: "", max: 3 },
      autocomplete10: { value: "", max: 10 },
    });

  const [buttonFields, setButtonFields] = useState<ButtonFieldsInterface>({
    right2: { value: "" },
    ["left1-right2"]: { value: "" },
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

      {new Holder(buttonFields).getKeys().map((buttonControl) => (
        <ButtonControl
          key={buttonControl}
          label={buttonControl}
          value={buttonFields[buttonControl].value}
          rightButtons={[{ text: "Тест" }]}
          clearValue={() => {}}
        />
      ))}
    </div>
  );
});

export default App;
