import { OperatorFunction } from '../operator.type';

export const dividedBy: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): number | null => {
  if (a === null && b === null) {
    return null;
  }
  if (a === null) a = 1;
  if (b === null) b = 1;
  return a / b;
};
