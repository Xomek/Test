export const getObjectKeys = <T extends object>(object: T): (keyof T)[] =>
  Object.keys(object) as (keyof T)[];

export const debounce = <T>(
  effect: (args: T) => void,
  ms: number
): ((args: T) => void) => {
  let timer: NodeJS.Timeout;

  return (args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => effect(args), ms);
  };
};
