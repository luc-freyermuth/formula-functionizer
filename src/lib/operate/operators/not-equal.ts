import { JsOperatorFunction } from '../operator.type';

export const notEqual: JsOperatorFunction = (a: any, b: any): boolean => {
  return a !== b;
};
