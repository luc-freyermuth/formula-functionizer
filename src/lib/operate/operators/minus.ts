import { JsOperatorFunction, OperatorFunction } from '../operator.type';

export const minus: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): number | null => {
  if (a === null && b === null) {
    return null;
  }
  if (a === null) a = 0;
  if (b === null) b = 0;
  return a - b;
};

export const javascriptMinus: JsOperatorFunction = (a, b) => a - b;
