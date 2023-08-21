import { observer } from "mobx-react-lite";
import { ButtonControl, Paper } from "../../components/UI";
import styles from "./ButtonControls.module.css";
import ViewModel from "./ViewModel";

const ButtonControls: React.FC = observer(() => {
  const { fields, labels, buttons, onChagneHandler } = ViewModel;

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол с кнопками</div>

      {labels.map((label) => (
        <ButtonControl
          key={label}
          label={label}
          value={fields[label].value}
          onChange={(e) => onChagneHandler(e.target.value, label)}
          {...buttons[label]}
        />
      ))}
    </Paper>
  );
});

export default ButtonControls;
