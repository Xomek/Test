import { action, makeObservable, override } from "mobx";
import Control from "../../ViewModels/Control";
import { FieldType } from "./ButtonControls.types";
import { ControlButtons } from "../../components/UI/ButtonControl";

class ViewModel<T extends FieldType> extends Control<T> {
  leftButtons: ControlButtons[] = [];
  rightButtons: ControlButtons[] = [];

  constructor(initial: T) {
    super(initial);
    makeObservable(this, {
      field: override,
      onChagneHandler: override,
      onClearHandler: override,
      helloWorldInValue: action,
      alertValue: action,
      checkInNumberValue: action,
      createButton: action,
    });
  }
  helloWorldInValue = () => {
    this.field.value = "Hello World";
  };

  alertValue = () => {
    alert(this.field.value ?? "");
  };

  checkInNumberValue = () => {
    !isNaN(+this.field.value) &&
      this.field.value !== "" &&
      alert(this.field.value);
  };

  createButton = (type: "left" | "right", text: string, cb: () => void) => {
    switch (type) {
      case "left":
        this.leftButtons.push({ text, onClick: cb });
        break;

      case "right":
        this.rightButtons.push({ text, onClick: cb });
        break;
    }
  };
}

export default ViewModel;
