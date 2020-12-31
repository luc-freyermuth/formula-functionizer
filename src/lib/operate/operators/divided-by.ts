import { JsOperatorFunction, OperatorFunction } from '../operator.type';

export const dividedBy: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): number | null => {
  if (a === null && b === null) {
    return null;
  }
  if (a === null) a = 0;
  if (b === null) b = 0;
  return a / b;
};

export const javascriptDividedBy: JsOperatorFunction = (a, b) => a / b;
