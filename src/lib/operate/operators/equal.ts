import { JsOperatorFunction } from '../operator.type';

export const equal: JsOperatorFunction = (a: any, b: any): boolean => {
  return a === b;
};
