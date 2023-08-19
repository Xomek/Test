import { observer } from "mobx-react-lite";
import { Autocompletes, ButtonControls } from "./components";
import styles from "./App.module.css";

const App: React.FC = observer(() => {
  return (
    <div className={styles.app}>
      <ButtonControls />
      <Autocompletes />
    </div>
  );
});

export default App;
