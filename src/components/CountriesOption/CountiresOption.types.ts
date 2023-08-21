import { CountryInfo } from "../../api/apiService";

export interface CountriesOptionProps {
  option: CountryInfo;
  onClick: (selectedOption: CountryInfo) => void;
}
