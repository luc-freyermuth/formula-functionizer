import { FormulaError } from '../../errors.enum';
import { throwFormulaError } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const excelPower: ExcelOperatorFunction<number | string> = (
  a: number | string,
  b: number | string
): number => {
  a = Number(a);
  b = Number(b);

  const result = Math.pow(a, b);

  if (isNaN(result)) {
    throwFormulaError(FormulaError.VALUE);
  }
  return result;
};

export const javascriptPower: JsOperatorFunction = (a, b) => Math.pow(a, b);
