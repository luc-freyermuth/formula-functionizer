import { FormulaError } from './errors.enum';
import { Parser as GrammarParser } from './grammar-parser/grammar-parser';
import { operateExcely, operateJavascriptly } from './operate/operate';
import { defaultOptions, ParserOptions } from './options';
import {
  oppositeNumber,
  throwFormulaError,
  trimEdges,
} from './utils.functions';

export type ParsedFunction = (variables: { [variable: string]: any }) => any;

export class Parser {
  private grammarParser: any;

  constructor(options: Partial<ParserOptions> = {}) {
    options = {
      ...defaultOptions,
      ...options,
    };
    this.grammarParser = new GrammarParser();
    this.grammarParser.yy = {
      oppositeNumber,
      trimEdges,
      operate:
        options.operators === 'excel' ? operateExcely : operateJavascriptly,
      throwFormulaError,
    };
  }

  parse(formula: string): ParsedFunction {
    try {
      return this.grammarParser.parse(formula);
    } catch (e) {
      if (Object.values(FormulaError).includes(e.message)) {
        return () => e.message;
      } else {
        return () => FormulaError.ERROR;
      }
    }
  }
}
