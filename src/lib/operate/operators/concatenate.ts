import { ExcelOperatorFunction } from '../operator.type';

export const concatenate: ExcelOperatorFunction<any> = (
  a: any,
  b: any
): string => {
  return String(a) + String(b);
};
