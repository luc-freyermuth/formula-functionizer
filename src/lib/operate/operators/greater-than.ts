import { OperatorFunction } from '../operator.type';

export const greaterThan: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): boolean => {
  if (a === null && b === null) {
    return false;
  }
  if (a === null || b === null) {
    return true;
  }
  return a > b;
};
