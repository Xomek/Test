import { action, makeObservable, observable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import Control from "../../ViewModels/Control";

class ViewModel<
  T extends { value: string; name: string },
  K extends string
> extends Control<T, K> {
  @observable countries: CountryInfo[] = [];
  @observable isLoading = false;

  constructor(name: K) {
    super(name);
    makeObservable(this);
  }

  @action getCountries = async (countryName: string) => {
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
  };

  @action selectOption = (selectedOption: CountryInfo) => {
    this.field.value = `${selectedOption.name} ${selectedOption.fullName}`;
  };
}

export default ViewModel;
