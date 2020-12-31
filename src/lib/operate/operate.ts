import { OperatorFunction } from './operator.type';
import { dividedBy } from './operators/divided-by';
import { minus } from './operators/minus';
import { plus } from './operators/plus';
import { times } from './operators/times';

export enum Operator {
  PLUS = '+',
  MINUS = '-',
  TIMES = '*',
  DIVIDED_BY = '/',
}

const operators: Record<Operator, OperatorFunction<any>> = {
  [Operator.PLUS]: plus,
  [Operator.MINUS]: minus,
  [Operator.TIMES]: times,
  [Operator.DIVIDED_BY]: dividedBy,
};

export function operate(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  return operators[operator](firstOperand, secondOperand);
}
