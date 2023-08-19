export class Holder<T extends Record<string, any>> {
  value: T;
  constructor(arg: T) {
    this.value = arg;
  }

  getKeys(): (keyof T)[] {
    return Object.keys(this.value) as (keyof T)[];
  }
}
