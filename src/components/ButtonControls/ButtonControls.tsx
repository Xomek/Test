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
                value: Number.isFinite(buttonFields["left1-right2"].value)
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

  type TypeofFields = typeof buttonFields;

  const onChagneHandler = (value: string, name: KeyofType<TypeofFields>) => {
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
          onChange={(e) => onChagneHandler(e.target.value, buttonControl)}
          {...buttonFields[buttonControl]}
        />
      ))}
    </Paper>
  );
};

export default ButtonControls;
