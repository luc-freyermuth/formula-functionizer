import { OperatorFunction } from '../operator.type';

export const plus: OperatorFunction = (
  a: number | null,
  b: number | null
): number => {
  if (a === null) a = 0;
  if (b === null) b = 0;
  return a + b;
};
