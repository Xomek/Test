import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class Countries {
  options: CountryInfo[] = [];
  loading: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getCountries(countryName: string) {
    this.options = await getCountryByName(countryName);
  }
}

export default new Countries();
