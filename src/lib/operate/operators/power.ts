import { JsOperatorFunction, OperatorFunction } from '../operator.type';

export const power: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): number | null => {
  if (a === null && b === null) {
    return null;
  }
  if (a === null) a = 0;
  if (b === null) b = 1;
  return Math.pow(a, b);
};

export const javascriptPower: JsOperatorFunction = (a, b) => Math.pow(a, b);
