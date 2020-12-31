export interface ParserOptions {
  operators: 'safe' | 'javascript';
}

export const defaultOptions: ParserOptions = {
  operators: 'safe',
};
