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
