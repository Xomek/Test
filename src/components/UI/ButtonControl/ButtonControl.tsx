import { ButtonControlProps, ControlButtons } from "./ButtonControl.types";
import TextField from "../TextField";
import Button from "../Button/Button";

const ButtonControl: React.FC<ButtonControlProps> = ({
  leftButtons,
  rightButtons,
  ...props
}) => {
  const getButtons = (buttons: ControlButtons[]) => {
    return buttons.map((props) => <Button {...props}>{props.text}</Button>);
  };

  return (
    <div>
      {getButtons(leftButtons ?? [])}
      <TextField {...props} />
      {getButtons(rightButtons ?? [])}
    </div>
  );
};

export default ButtonControl;
