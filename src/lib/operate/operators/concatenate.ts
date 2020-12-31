import { OperatorFunction } from '../operator.type';

export const concatenate: OperatorFunction<any> = (a: any, b: any): string => {
  return String(a) + String(b);
};
