import { makeAutoObservable } from "mobx";
import { getObjectKeys } from "../../helpers";
import { KeyofType } from "../../types";
import { ButtonFieldsInterface } from "./ButtonControls.types";

// Сначала я реализовал MVVM через useButtonControls, а потом понял для чего всё таки в задании был нужен mobx

class ViewModel {
  fields: ButtonFieldsInterface = {
    right2: {
      value: "",
    },

    ["left1-right1"]: {
      value: "",
    },
  };

  buttons = {
    right2: {
      rightButtons: [
        {
          text: "Очистить",
          onClick: () => {
            this.fields.right2.value = "";
          },
        },
        {
          text: "Заполнить",
          onClick: () => {
            this.fields.right2.value = "Hello World";
          },
        },
      ],
    },

    ["left1-right1"]: {
      leftButtons: [
        {
          text: "Проверить",
          onClick: () => {
            const value = this.fields["left1-right1"].value;
            !isNaN(+value) && value !== "" && alert(value);
          },
        },
      ],

      rightButtons: [
        {
          text: "alert",
          onClick: () => {
            alert(this.fields["left1-right1"].value);
          },
        },
      ],
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  onChagneHandler = (value: string, name: KeyofType<typeof this.fields>) => {
    this.fields[name].value = value;
  };

  get labels() {
    return getObjectKeys(this.fields);
  }
}

export default new ViewModel();
