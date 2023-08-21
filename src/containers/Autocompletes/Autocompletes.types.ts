export interface FieldType {
  value: string;
  max: number;
}

export type AutocompleteNames = "autocomplete3" | "autocomplete10";
export type AutocompleteFieldsType = Record<AutocompleteNames, FieldType>;
