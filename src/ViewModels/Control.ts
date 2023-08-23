import { observable, action, makeObservable } from "mobx";

class Control<T extends { value: string; name: string }, K extends string> {
  @observable field: T = { value: "", name: "" } as T;

  constructor(name: K) {
    makeObservable(this);

    this.field.name = name;
  }

  @action onChagneHandler = (value: string) => {
    this.field.value = value;
  };

  @action onClearHandler = () => {
    this.field.value = "";
  };
}

export default Control;
