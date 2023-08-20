import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Holder } from "../../helpers/Holder";
import CountiresOption from "../CountriesOption";
import { AutocompleteControl, Paper } from "../UI";
import { AutocompleteFieldInterface } from "./Autocompletes.types";
import countries from "../../store/Countries";
import { CountryInfo } from "../../api/apiService";
import styles from "./Autocompletes.module.css";
import { KeyofType } from "../../types";

const Autocompletes: React.FC = observer(() => {
  const [autocompleteFields, setAutocompleteFields] =
    useState<AutocompleteFieldInterface>({
      autocomplete3: { value: "", max: 3 },
      autocomplete10: { value: "", max: 10 },
    });

  type TypeofFields = typeof autocompleteFields;

  const onChagneHandler = (value: string, name: KeyofType<TypeofFields>) => {
    setAutocompleteFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value },
    }));
    countries.getCountries(value); // Тут каждый обращение к api, надо оптимизировать
  };

  const clearValue = (name: KeyofType<TypeofFields>) => {
    setAutocompleteFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: "" },
    }));
  };

  const selectOption = (
    selectedOption: CountryInfo,
    name: KeyofType<TypeofFields>
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
