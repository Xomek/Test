import { useState } from "react";
import { Holder } from "../../helpers/Holder";
import { ButtonControl, Paper } from "../UI";
import { ButtonFieldsInterface } from "./ButtonControls.types";
import { KeyofType } from "../../types";
import styles from "./ButtonControls.module.css";

const ButtonControls: React.FC = () => {
  const [buttonFields, setButtonFields] = useState<ButtonFieldsInterface>({
    right2: {
      value: "",
    },

    ["left1-right1"]: {
      value: "",
    },
  });

  const fieldsButtonParams = {
    right2: {
      rightButtons: [
        {
          text: "Очистить",
          onClick() {
            setButtonFields((prevState) => ({
              ...prevState,
              right2: { value: "" },
            }));
          },
        },
        {
          text: "Заполнить",
          onClick() {
            setButtonFields((prevState) => ({
              ...prevState,
              right2: {
                value: "Hello World",
              },
            }));
          },
        },
      ],
    },

    ["left1-right1"]: {
      leftButtons: [
        {
          text: "Проверить",
          onClick() {
            const value = buttonFields["left1-right1"].value;
            !isNaN(+value) && value !== "" && alert(value);
          },
        },
      ],

      rightButtons: [
        {
          text: "alert",
          onClick() {
            alert(buttonFields["left1-right1"].value);
          },
        },
      ],
    },
  };

  const onChagneHandler = (
    value: string,
    name: KeyofType<typeof buttonFields>
  ) => {
    setButtonFields((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value },
    }));
  };

  return (
    <Paper className={styles.paper}>
      <div className={styles.title}>Контрол с кнопками</div>

      {new Holder(buttonFields).getKeys().map((buttonControl) => (
        <ButtonControl
          key={buttonControl}
          label={buttonControl}
          value={buttonFields[buttonControl].value}
          onChange={(e) => onChagneHandler(e.target.value, buttonControl)}
          {...fieldsButtonParams[buttonControl]}
        />
      ))}
    </Paper>
  );
};

export default ButtonControls;
