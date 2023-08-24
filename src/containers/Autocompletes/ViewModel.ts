import {
  action,
  makeObservable,
  observable,
  override,
  runInAction,
} from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import Control from "../../ViewModels/Control";
import { FieldType } from "./Autocompletes.types";

class ViewModel<T extends FieldType> extends Control<T> {
  countries: CountryInfo[];
  isLoading: boolean;

  constructor(initial: T) {
    super(initial);

    makeObservable(this, {
      field: override,
      onChagneHandler: override,
      onClearHandler: override,

      countries: observable,
      isLoading: observable,
      getCountries: action,
      selectOption: action,
    });

    this.countries = [];
    this.isLoading = false;
  }

  getCountries = async (countryName: string) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const patch = await getCountryByName(countryName);

      runInAction(() => {
        if (this.isLoading) {
          this.countries = patch;
          this.isLoading = false;
        }
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  selectOption = (selectedOption: CountryInfo) => {
    this.field.value = `${selectedOption.name} ${selectedOption.fullName}`;
  };
}

export default ViewModel;
