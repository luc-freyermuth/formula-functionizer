import { Parser as GrammarParser } from './grammar-parser/grammar-parser';
import { operateJavascriptly, operateSafely } from './operate/operate';
import { defaultOptions, ParserOptions } from './options';
import { oppositeNumber, trimEdges } from './utils.functions';

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
        options.operators === 'safe' ? operateSafely : operateJavascriptly,
    };
  }

  parse(formula: string): ParsedFunction {
    return this.grammarParser.parse(formula);
  }
}
