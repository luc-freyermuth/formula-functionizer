import { FormulaError } from '../../errors.enum';
import { throwFormulaError } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const excelTimes: ExcelOperatorFunction<number | string> = (
  a: number | string,
  b: number | string
): number => {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    throwFormulaError(FormulaError.VALUE);
  }
  return a * b;
};

export const javascriptTimes: JsOperatorFunction = (a, b) => a * b;
