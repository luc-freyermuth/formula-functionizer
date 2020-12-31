import { JsOperatorFunction, OperatorFunction } from '../operator.type';

export const lessThanOrEqual: OperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): boolean => {
  if (a === null || b === null) {
    return true;
  }
  return a <= b;
};

export const javascriptLessThanOrEqual: JsOperatorFunction = (a, b) => a <= b;
