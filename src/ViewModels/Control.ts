import { action, makeObservable, observable } from "mobx";
import { FieldType } from "../types";

class Control<T extends FieldType> {
  field: T;

  constructor(initial: T) {
    this.field = initial;

    makeObservable(this, {
      field: observable,
      onChagneHandler: action,
      onClearHandler: action,
    });
  }

  onChagneHandler = (value: string) => {
    this.field.value = value;
  };

  onClearHandler = () => {
    this.field.value = "";
  };
}

export default Control;
