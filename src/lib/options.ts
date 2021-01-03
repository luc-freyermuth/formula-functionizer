export interface ParserOptions {
  operators: 'excel' | 'javascript';
  functions: {
    [functionName: string]: (...args: any[]) => any;
  };
}

export const defaultOptions: ParserOptions = {
  operators: 'excel',
  functions: {},
};
