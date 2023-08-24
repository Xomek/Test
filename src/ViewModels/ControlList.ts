import { FieldType } from "../types";
import Control from "./Control";

class ControlList<T extends Control<K>, K extends FieldType> {
  controls: T[] = [];

  constructor(controls: T[]) {
    this.controls = controls;
  }

  getControlByName = (name: string) => {
    return this.controls.find((control) => control.field.name === name);
  };
}

export default ControlList;
