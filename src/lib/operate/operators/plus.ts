import { FormulaError } from '../../errors.enum';
import { throwFormulaError } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const excelPlus: ExcelOperatorFunction<number> = (
  a: number,
  b: number
): number => {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    throwFormulaError(FormulaError.VALUE);
  }
  return a + b;
};

export const javascriptPlus: JsOperatorFunction = (a, b) => a + b;
