import { FormulaError } from './errors.enum';

export function trimEdges(text: string): string {
  return text.substring(1, text.length - 1);
}

export function oppositeNumber(value: number): number {
  return -1 * value;
}

export function throwFormulaError(type: FormulaError) {
  throw new Error(type);
}

export type PrimitiveOrNoValue = string | number | boolean | null | undefined;
export type PrimitiveOrNoValueTypes =
  | 'string'
  | 'number'
  | 'boolean'
  | 'object'
  | 'undefined';

const excelComparisonTypePriority = {
  number: 1,
  string: 2,
  boolean: 3,
  undefined: 4,
};

export function excelifyComparison(
  javascriptComparisonFunction: (
    a: PrimitiveOrNoValue,
    b: PrimitiveOrNoValue
  ) => boolean
): (a: PrimitiveOrNoValue, b: PrimitiveOrNoValue) => boolean {
  return (a, b) => {
    let typeOfA = typeof a as PrimitiveOrNoValueTypes;
    let typeOfB = typeof b as PrimitiveOrNoValueTypes;

    // fallback to undefined if value type is object (handles null case)
    if (typeOfA === 'object' || typeOfA === 'undefined') {
      typeOfA = 'undefined';
      a = null;
    }

    if (typeOfB === 'object' || typeOfB === 'undefined') {
      typeOfB = 'undefined';
      b = null;
    }

    if (typeOfA === typeOfB) {
      if (typeOfA === 'string') {
        a = (a as string).toLowerCase();
        b = (b as string).toLowerCase();
      }
      return javascriptComparisonFunction(a, b);
    } else {
      return (
        excelComparisonTypePriority[typeOfA] <
        excelComparisonTypePriority[typeOfB]
      );
    }
  };
}
