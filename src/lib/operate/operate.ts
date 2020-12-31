import { OperatorFunction } from './operator.type';
import { concatenate } from './operators/concatenate';
import { dividedBy } from './operators/divided-by';
import { equal } from './operators/equal';
import { greaterThan } from './operators/greater-than';
import { greaterThanOrEqual } from './operators/greater-than-or-equal';
import { lessThan } from './operators/less-than';
import { lessThanOrEqual } from './operators/less-than-or-equal';
import { minus } from './operators/minus';
import { notEqual } from './operators/not-equal';
import { plus } from './operators/plus';
import { power } from './operators/power';
import { times } from './operators/times';

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

const operators: Record<Operator, OperatorFunction<any>> = {
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

export function operate(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  return operators[operator](firstOperand, secondOperand);
}
