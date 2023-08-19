import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Holder } from "../../helpers/Holder";
import CountiresOption from "../CountriesOption";
import { AutocompleteControl, Paper } from "../UI";
import {
  AutocompleteFieldsType,
  AutocompleteFiledsInterface,
} from "./Autocompletes.types";
import countries from "../../store/Countries";
import { CountryInfo } from "../../api/apiService";
import styles from "./Autocompletes.module.css";

const Autocompletes: React.FC = observer(() => {
  const [autocompleteFields, setAutocompleteFields] =
    useState<AutocompleteFiledsInterface>({
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

  const clearValue = (name: AutocompleteFieldsType) => {
    setAutocompleteFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: "" },
    }));
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

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол-автокомплит</div>

      {new Holder(autocompleteFields).getKeys().map((autocomplete) => (
        <AutocompleteControl
          key={autocomplete}
          label={autocomplete}
          options={countries.options}
          loading={countries.isLoading}
          onChange={(e) => onChagneHandler(e.target.value, autocomplete)}
          selectValue={(option) => selectOption(option, autocomplete)}
          renderOption={(option, index, cb) => (
            <CountiresOption key={index} option={option} onClick={cb} />
          )}
          clearValue={() => clearValue(autocomplete)}
          {...autocompleteFields[autocomplete]}
        />
      ))}
    </Paper>
  );
});

export default Autocompletes;
