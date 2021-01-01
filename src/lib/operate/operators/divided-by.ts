import { FormulaError } from '../../errors.enum';
import { throwFormulaError } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const excelDividedBy: ExcelOperatorFunction<number | string> = (
  a: number | string,
  b: number | string
): number => {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    throwFormulaError(FormulaError.VALUE);
  }

  if (b === 0) {
    throwFormulaError(FormulaError.DIV_ZERO);
  }
  return a / b;
};

export const javascriptDividedBy: JsOperatorFunction = (a, b) => a / b;
