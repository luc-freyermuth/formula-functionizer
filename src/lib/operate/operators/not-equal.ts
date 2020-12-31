import { OperatorFunction } from '../operator.type';

export const notEqual: OperatorFunction<any> = (a: any, b: any): boolean => {
  return a !== b;
};
