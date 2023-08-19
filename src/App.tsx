import { useState } from "react";
import { observer } from "mobx-react-lite";
import { CountiresOption } from "./components";
import { AutocompleteControl, ButtonControl } from "./components/UI";
import { ControlButtons } from "./components/UI/ButtonControl";
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
    rightButtons?: ControlButtons[];
    leftButtons?: ControlButtons[];
  };

  ["left1-right2"]: {
    value: string;
    rightButtons?: ControlButtons[];
    leftButtons?: ControlButtons[];
  };
}

type ButtonFieldsType = keyof ButtonFieldsInterface;

const App: React.FC = observer(() => {
  const [autocompleteFields, setAutocompleteFields] =
    useState<AutocompleteFiledsInterface>({
      autocomplete3: { value: "", max: 3 },
      autocomplete10: { value: "", max: 10 },
    });

  const [buttonFields, setButtonFields] = useState<ButtonFieldsInterface>({
    right2: {
      value: "",

      rightButtons: [
        {
          text: "Очистить",
          onClick: () => {
            setButtonFields((prevState) => ({
              ...prevState,
              right2: { ...prevState.right2, value: "" },
            }));
          },
        },
        {
          text: "Записать",
          onClick: () => {
            setButtonFields((prevState) => ({
              ...prevState,
              right2: { ...prevState.right2, value: "Hello World" },
            }));
          },
        },
      ],
    },

    ["left1-right2"]: {
      value: "",
      leftButtons: [
        {
          text: "Первая",
          onClick: () => {
            setButtonFields((prevState) => ({
              ...prevState,
              ["left1-right2"]: {
                ...prevState["left1-right2"],
                value: Number.isFinite(prevState["left1-right2"].value)
                  ? "Число"
                  : "не число",
              },
            }));
          },
        },
      ],
      rightButtons: [
        {
          text: "alert",
          onClick: () => {
            alert(buttonFields["left1-right2"].value);
          },
        },
      ],
    },
  });

  //////////////////////////////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////////////////////////

  const onChagneHandlerButtonControl = (
    value: string,
    name: ButtonFieldsType
  ) => {
    setButtonFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value },
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
    <div className={styles.app}>
      {new Holder(autocompleteFields).getKeys().map((autocomplete) => (
        <AutocompleteControl
          key={autocomplete}
          label={autocomplete}
          options={countries.options}
          onChange={(e) => onChagneHandler(e.target.value, autocomplete)}
          selectValue={(option) => selectOption(option, autocomplete)}
          renderOption={(option, index, cb) => (
            <CountiresOption key={index} option={option} onClick={cb} />
          )}
          clearValue={() => clearValue(autocomplete)}
          {...autocompleteFields[autocomplete]}
        />
      ))}

      {new Holder(buttonFields).getKeys().map((buttonControl) => (
        <ButtonControl
          key={buttonControl}
          label={buttonControl}
          onChange={(e) =>
            onChagneHandlerButtonControl(e.target.value, buttonControl)
          }
          clearValue={() => {}}
          {...buttonFields[buttonControl]}
        />
      ))}
    </div>
  );
});

export default App;
