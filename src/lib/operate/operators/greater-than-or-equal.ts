import { excelifyComparison, PrimitiveOrNoValue } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const javascriptGreaterThanOrEqual: JsOperatorFunction = (a, b) =>
  a >= b;

export const excelGreaterThanOrEqual: ExcelOperatorFunction<PrimitiveOrNoValue> = excelifyComparison(
  javascriptGreaterThanOrEqual
);
