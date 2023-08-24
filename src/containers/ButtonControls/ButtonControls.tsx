import { observer } from "mobx-react-lite";
import { ButtonControl, Paper } from "../../components/UI";
import { BUTTON_CONTROL_NAMES, FieldType } from "./ButtonControls.types";
import ViewModel from "./ViewModel";
import ControlList from "../../ViewModels/ControlList";
import styles from "./ButtonControls.module.css";

const models = new ControlList([
  new ViewModel<FieldType>({
    value: "",
    name: BUTTON_CONTROL_NAMES.RIGHT2,
  }),

  new ViewModel<FieldType>({
    value: "",
    name: BUTTON_CONTROL_NAMES.LEFT1_RIGHT2,
  }),
]);

const right2Control = models.getControlByName("right2");
const left1Right1Control = models.getControlByName("left1-right1");

right2Control?.createButton("right", "Очистить", right2Control.onClearHandler);
right2Control?.createButton("right", "Заполнить",right2Control.helloWorldInValue);

left1Right1Control?.createButton("left", "Проверить", left1Right1Control.checkInNumberValue);
left1Right1Control?.createButton("right", "alert", left1Right1Control.alertValue);

const ButtonControls: React.FC = observer(() => {
  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол с кнопками</div>

      {models.controls.map(
        ({ field, onChagneHandler, rightButtons, leftButtons }) => (
          <ButtonControl
            key={field.name}
            label={field.name}
            rightButtons={rightButtons}
            leftButtons={leftButtons}
            onChange={(e) => onChagneHandler(e.target.value)}
            {...field}
          />
        )
      )}
    </Paper>
  );
});

export default ButtonControls;
