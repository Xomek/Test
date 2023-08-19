export interface AutocompleteFiledsInterface {
  autocomplete3: { value: string; max: number };
  autocomplete10: { value: string; max: number };
}

export type AutocompleteFieldsType = keyof AutocompleteFiledsInterface;
