import { observer } from "mobx-react-lite";
import { ButtonControl, Paper } from "../../components/UI";
import { BUTTON_CONTROL_NAMES, FieldType } from "./ButtonControls.types";
import ViewModel from "./ViewModel";
import styles from "./ButtonControls.module.css";

const models = [
  new ViewModel<FieldType>({
    value: "",
    name: BUTTON_CONTROL_NAMES.RIGHT2,
  }),

  new ViewModel<FieldType>({
    value: "",
    name: BUTTON_CONTROL_NAMES.LEFT1_RIGHT2,
  }),
];

models[0].createButton("right", "Очистить", models[0].onClearHandler);
models[0].createButton("right", "Заполнить", models[0].helloWorldInValue);

models[1].createButton("left", "Проверить", models[1].checkInNumberValue);
models[1].createButton("right", "alert", models[1].alertValue);

const ButtonControls: React.FC = observer(() => {
  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол с кнопками</div>

      {models.map(({ field, onChagneHandler, rightButtons, leftButtons }) => (
        <ButtonControl
          key={field.name}
          label={field.name}
          rightButtons={rightButtons}
          leftButtons={leftButtons}
          onChange={(e) => onChagneHandler(e.target.value)}
          {...field}
        />
      ))}
    </Paper>
  );
});

export default ButtonControls;
