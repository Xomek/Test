export interface FieldType {
  value: string;
  name: string;
  max: number;
}

export enum AUTOCOMPLETES_NAMES {
  AUTOCOMPLETE3 = "autocomplete3",
  AUTOCOMPLETE10 = "autocomplete10",
}

export type AutocompleteFieldsType = Record<AUTOCOMPLETES_NAMES, FieldType>;
