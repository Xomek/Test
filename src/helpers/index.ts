export const getObjectKeys = <T extends object>(object: T): (keyof T)[] =>
  Object.keys(object) as (keyof T)[];
