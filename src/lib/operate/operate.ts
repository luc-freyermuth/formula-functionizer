import { JsOperatorFunction, OperatorFunction } from './operator.type';
import { concatenate } from './operators/concatenate';
import { dividedBy, javascriptDividedBy } from './operators/divided-by';
import { equal } from './operators/equal';
import { greaterThan, javascriptGreaterThan } from './operators/greater-than';
import {
  greaterThanOrEqual,
  javascriptGreaterThanOrEqual,
} from './operators/greater-than-or-equal';
import { javascriptLessThan, lessThan } from './operators/less-than';
import { lessThanOrEqual } from './operators/less-than-or-equal';
import { javascriptMinus, minus } from './operators/minus';
import { notEqual } from './operators/not-equal';
import { javascriptPlus, plus } from './operators/plus';
import { javascriptPower, power } from './operators/power';
import { javascriptTimes, times } from './operators/times';

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

const safeOperators: Record<Operator, OperatorFunction<any>> = {
  [Operator.PLUS]: plus,
  [Operator.MINUS]: minus,
  [Operator.TIMES]: times,
  [Operator.DIVIDED_BY]: dividedBy,
  [Operator.EQUAL]: equal,
  [Operator.NOT_EQUAL]: notEqual,
  [Operator.GREATER_THAN]: greaterThan,
  [Operator.GREATER_THAN_OR_EQUAL]: greaterThanOrEqual,
  [Operator.LESS_THAN]: lessThan,
  [Operator.LESS_THAN_OR_EQUAL]: lessThanOrEqual,
  [Operator.POWER]: power,
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

export function operateSafely(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  // TODO update operators to match excel operators behavior
  return safeOperators[operator](firstOperand, secondOperand);
}

export function operateJavascriptly(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  return javascriptOperators[operator](firstOperand, secondOperand);
}
