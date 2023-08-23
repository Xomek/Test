import { observer } from "mobx-react-lite";
import { ButtonControl, Paper } from "../../components/UI";
import { BUTTON_CONTROL_NAMES, FieldType } from "./ButtonControls.types";
import ViewModel from "./ViewModel";
import styles from "./ButtonControls.module.css";

const ButtonControls: React.FC = observer(() => {
  const controls = Object.values(BUTTON_CONTROL_NAMES).map(
    (name) => new ViewModel<FieldType, BUTTON_CONTROL_NAMES>(name)
  );

  const controlsWithFormedButton = controls.map((control) => {
    switch (control.field.name) {
      case "right2":
        control.createButton("right", "Очистить", control.clearValue);
        control.createButton("right", "Заполнить", control.helloWorldInValue);
        break;

      case "left1-right1":
        control.createButton("left", "Проверить", control.checkInNumberValue);
        control.createButton("right", "alert", control.alertValue);
        break;
    }

    return control;
  });

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол с кнопками</div>

      {controlsWithFormedButton.map(
        ({ field, onChagneHandler, leftButtons, rightButtons }) => (
          <ButtonControl
            key={field.name}
            label={field.name}
            leftButtons={leftButtons}
            rightButtons={rightButtons}
            onChange={(e) => onChagneHandler(e.target.value)}
            {...field}
          />
        )
      )}
    </Paper>
  );
});

export default ButtonControls;
