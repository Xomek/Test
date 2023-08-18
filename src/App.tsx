import { useState } from "react";
import { AutocompleteControl } from "./components";
import styles from "./App.module.css";

interface Values {
  autocomplete3: string;
  autocomplete10: string;
}

const App: React.FC = () => {
  const [values, setValues] = useState<Values>({
    autocomplete3: "",
    autocomplete10: "",
  });

  const onChagneHandler = (value: string, name: string) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.app}>
      <div className={styles.inputs}>
        <AutocompleteControl
          label="autocomplete-3"
          placeholder="Поиск"
          value={values.autocomplete3}
          options={[1]}
          onChange={(e) => onChagneHandler(e.target.value, "autocomplete3")}
          max={3}
        />
        <AutocompleteControl
          label="autocomplete-10"
          placeholder="Поиск"
          value={values.autocomplete10}
          options={[]}
          onChange={(e) => onChagneHandler(e.target.value, "autocomplete10")}
          max={10}
        />
      </div>
    </div>
  );
};

export default App;
