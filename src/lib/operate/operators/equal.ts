import { OperatorFunction } from '../operator.type';

export const equal: OperatorFunction<any> = (a: any, b: any): boolean => {
  return a === b;
};
