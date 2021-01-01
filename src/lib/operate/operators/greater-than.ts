import { excelifyComparison, PrimitiveOrNoValue } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const javascriptGreaterThan: JsOperatorFunction = (a, b) => a > b;

export const excelGreaterThan: ExcelOperatorFunction<PrimitiveOrNoValue> = excelifyComparison(
  javascriptGreaterThan
);
