import { OperatorFunction } from './operator.type';
import { minus } from './operators/minus';
import { plus } from './operators/plus';

export enum Operator {
  PLUS = '+',
  MINUS = '-',
}

const operators: Record<Operator, OperatorFunction> = {
  [Operator.PLUS]: plus,
  [Operator.MINUS]: minus,
};

export function operate(
  operator: Operator,
  firstOperand: any,
  secondOperand: any
): any {
  return operators[operator](firstOperand, secondOperand);
}
