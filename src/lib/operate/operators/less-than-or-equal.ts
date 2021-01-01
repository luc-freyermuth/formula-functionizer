import { excelifyComparison, PrimitiveOrNoValue } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const javascriptLessThanOrEqual: JsOperatorFunction = (a, b) => a <= b;

export const excelLessThanOrEqual: ExcelOperatorFunction<PrimitiveOrNoValue> = excelifyComparison(
  javascriptLessThanOrEqual
);
