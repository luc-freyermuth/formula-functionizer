import { ParsedFunction } from '../lib/parser.class';

declare global {
  class GeneratedGrammarParser {
    yy: any;
    parse(formula: string): ParsedFunction;
  }
}
