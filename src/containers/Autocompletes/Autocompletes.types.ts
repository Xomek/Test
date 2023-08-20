export interface FieldType {
  value: string;
}

export type AutocompleteNames = "autocomplete3" | "autocomplete10";
export type AutocompleteFieldsType = Record<AutocompleteNames, FieldType>;
