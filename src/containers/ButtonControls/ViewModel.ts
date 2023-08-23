import { action, makeObservable, observable } from "mobx";
import Control from "../../ViewModels/Control";
import { ControlButtons } from "../../components/UI/ButtonControl";

class ViewModel<
  T extends { value: string; name: string },
  K extends string
> extends Control<T, K> {
  @observable leftButtons: ControlButtons[] = [];
  @observable rightButtons: ControlButtons[] = [];

  constructor(name: K) {
    super(name);
    makeObservable(this);
  }

  @action helloWorldInValue() {
    this.field.value = "Hello World";
  }

  @action alertValue() {
    alert(this.field.value);
  }

  @action clearValue() {
    this.field.value = "";
  }

  @action checkInNumberValue() {
    !isNaN(+this.field.value) && alert(this.field.value);
  }

  @action createButton(type: "left" | "right", text: string, cb: () => void) {
    switch (type) {
      case "left":
        this.leftButtons.push({ text, onClick: cb });
        break;

      case "right":
        this.rightButtons.push({ text, onClick: cb });
        break;
    }
  }
}

export default ViewModel;
