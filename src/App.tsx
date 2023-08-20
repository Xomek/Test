import { Autocompletes, ButtonControls } from "./components";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ButtonControls />
      <Autocompletes />
    </div>
  );
};

export default App;
