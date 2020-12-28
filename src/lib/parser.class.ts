import { Parser as GrammarParser } from './grammar-parser/grammar-parser';
export type ParsedFunction = (variables: { [variable: string]: any }) => any;

export class Parser {
  private grammarParser: any;

  constructor() {
    this.grammarParser = new GrammarParser();
    this.grammarParser.yy = {
      toNumber: (input: any) => Number(input),
    };
  }

  parse(formula: string): ParsedFunction {
    return this.grammarParser.parse(formula);
  }
}
