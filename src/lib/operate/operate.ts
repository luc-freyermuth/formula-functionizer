import { ExcelOperatorFunction, JsOperatorFunction } from './operator.type';
import { concatenate } from './operators/concatenate';
import { excelDividedBy, javascriptDividedBy } from './operators/divided-by';
import { equal } from './operators/equal';
import {
  excelGreaterThan,
  javascriptGreaterThan,
} from './operators/greater-than';
import {
  excelGreaterThanOrEqual,
  javascriptGreaterThanOrEqual,
} from './operators/greater-than-or-equal';
import { excelLessThan, javascriptLessThan } from './operators/less-than';
import { excelLessThanOrEqual } from './operators/less-than-or-equal';
import { excelMinus, javascriptMinus } from './operators/minus';
import { notEqual } from './operators/not-equal';
import { excelPlus, javascriptPlus } from './operators/plus';
import { excelPower, javascriptPower } from './operators/power';
import { excelTimes, javascriptTimes } from './operators/times';

export enum Operator {
  PLUS = '+',
  MINUS = '-',
  TIMES = '*',
  DIVIDED_BY = '/',
  EQUAL = '=',
  NOT_EQUAL = '<>',
  GREATER_THAN = '>',
  GREATER_THAN_OR_EQUAL = '>=',
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL = '<=',
  POWER = '^',
  CONCATENATE = '&',
}

const safeOperators: Record<Operator, ExcelOperatorFunction<any>> = {
  [Operator.PLUS]: excelPlus,
  [Operator.MINUS]: excelMinus,
  [Operator.TIMES]: excelTimes,
  [Operator.DIVIDED_BY]: excelDividedBy,
  [Operator.EQUAL]: equal,
  [Operator.NOT_EQUAL]: notEqual,
  [Operator.GREATER_THAN]: excelGreaterThan,
  [Operator.GREATER_THAN_OR_EQUAL]: excelGreaterThanOrEqual,
  [Operator.LESS_THAN]: excelLessThan,
  [Operator.LESS_THAN_OR_EQUAL]: excelLessThanOrEqual,
  [Operator.POWER]: excelPower,
  [Operator.CONCATENATE]: concatenate,
};

const javascriptOperators: Record<Operator, JsOperatorFunction> = {
  [Operator.PLUS]: javascriptPlus,
  [Operator.MINUS]: javascriptMinus,
  [Operator.TIMES]: javascriptTimes,
  [Operator.DIVIDED_BY]: javascriptDividedBy,
  [Operator.EQUAL]: equal,
  [Operator.NOT_EQUAL]: notEqual,
  [Operator.GREATER_THAN]: javascriptGreaterThan,
  [Operator.GREATER_THAN_OR_EQUAL]: javascriptGreaterThanOrEqual,
  [Operator.LESS_THAN]: javascriptLessThan,
  [Operator.LESS_THAN_OR_EQUAL]: javascriptGreaterThanOrEqual,
  [Operator.POWER]: javascriptPower,
  [Operator.CONCATENATE]: concatenate,
};

export function operateExcely(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  return safeOperators[operator](firstOperand, secondOperand);
}

export function operateJavascriptly(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  return javascriptOperators[operator](firstOperand, secondOperand);
}
