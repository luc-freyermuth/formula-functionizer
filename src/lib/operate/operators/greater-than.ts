import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const greaterThan: ExcelOperatorFunction<number | null> = (
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

export const javascriptGreaterThan: JsOperatorFunction = (a, b) => a > b;
