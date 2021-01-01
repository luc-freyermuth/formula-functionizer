import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const greaterThanOrEqual: ExcelOperatorFunction<number | null> = (
  a: number | null,
  b: number | null
): boolean => {
  if (a === null || b === null) {
    return true;
  }
  return a >= b;
};

export const javascriptGreaterThanOrEqual: JsOperatorFunction = (a, b) =>
  a >= b;
