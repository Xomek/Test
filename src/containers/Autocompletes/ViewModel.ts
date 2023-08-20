import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import { getObjectKeys } from "../../helpers";
import {
  AutocompleteFieldsType,
  AutocompleteNames,
} from "./Autocompletes.types";

// Сначала я реализовал MVVM через useAutocompletes, а потом понял для чего всё таки в задании был нужен mobx

class ViewModel {
  fields: AutocompleteFieldsType = {
    autocomplete3: { value: "" },
    autocomplete10: { value: "" },
  };
  countries: CountryInfo[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getCountries(countryName: string) {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const patch = await getCountryByName(countryName);

      runInAction(() => {
        this.countries = patch;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  onChagneHandler(value: string, name: AutocompleteNames) {
    this.fields[name].value = value;
  }

  onClearHandler(name: AutocompleteNames) {
    this.fields[name].value = "";
  }

  selectOption = (selectedOption: CountryInfo, name: AutocompleteNames) => {
    this.fields[
      name
    ].value = `${selectedOption.name} ${selectedOption.fullName}`;
  };

  get labels() {
    return getObjectKeys(this.fields);
  }
}

export default new ViewModel();
