import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class Countries {
  options: CountryInfo[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getCountries(countryName: string) {
    try {
      this.isLoading = true;
      this.options = await getCountryByName(countryName);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
    }
  }
}

export default new Countries();
