import { excelifyComparison, PrimitiveOrNoValue } from '../../utils.functions';
import { ExcelOperatorFunction, JsOperatorFunction } from '../operator.type';

export const javascriptLessThan: JsOperatorFunction = (a, b) => a < b;

export const excelLessThan: ExcelOperatorFunction<PrimitiveOrNoValue> = excelifyComparison(
  javascriptLessThan
);
