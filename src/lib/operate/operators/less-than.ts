import { OperatorFunction } from '../operator.type';

export const lessThan: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): boolean => {
  if (a === null && b === null) {
    return false;
  }
  if (a === null || b === null) {
    return true;
  }
  return a < b;
};
