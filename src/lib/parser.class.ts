import { FormulaError } from './errors.enum';
import { Parser as GrammarParser } from './grammar-parser/grammar-parser';
import { operateExcely, operateJavascriptly } from './operate/operate';
import { defaultOptions, ParserOptions } from './options';
import {
  callFunction,
  oppositeNumber,
  throwFormulaError,
  trimEdges,
} from './utils.functions';

export type ParsedFunction = (variables: { [variable: string]: any }) => any;

export class Parser {
  private grammarParser: GeneratedGrammarParser;

  constructor(userOptions: Partial<ParserOptions> = {}) {
    const options: ParserOptions = {
      ...defaultOptions,
      ...userOptions,
    };
    this.grammarParser = (new GrammarParser() as unknown) as GeneratedGrammarParser;
    this.grammarParser.yy = {
      oppositeNumber,
      trimEdges,
      operate:
        options.operators === 'excel' ? operateExcely : operateJavascriptly,
      throwFormulaError,
      callFunction: (functionName: string, args: any[]) =>
        callFunction(options.functions, functionName, args),
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
