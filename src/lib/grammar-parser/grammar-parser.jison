/* description: Parses end evaluates mathematical expressions. */
/* lexical grammar */
%lex
%%
\s+                                                                                             {/* skip whitespace */}
'"'("\\"["]|[^"])*'"'                                                                           {return 'STRING';}
"'"('\\'[']|[^'])*"'"                                                                           {return 'STRING';}
[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(])                                                              {return 'FUNCTION';}
'#'[A-Z0-9\/]+('!'|'?')?                                                                        {return 'ERROR';}
[A-Za-z\.]+(?=[(])                                                                              {return 'FUNCTION';}
[A-Za-z]{1,}[A-Za-z_0-9]+                                                                       {return 'VARIABLE';}
[A-Za-z_]+                                                                                      {return 'VARIABLE';}
[0-9]+                                                                                          {return 'NUMBER';}
"&"                                                                                             {return '&';}
" "                                                                                             {return ' ';}
[.]                                                                                             {return 'DECIMAL';}
":"                                                                                             {return ':';}
";"                                                                                             {return ';';}
","                                                                                             {return ',';}
"*"                                                                                             {return '*';}
"/"                                                                                             {return '/';}
"-"                                                                                             {return '-';}
"+"                                                                                             {return '+';}
"^"                                                                                             {return '^';}
"("                                                                                             {return '(';}
")"                                                                                             {return ')';}
"["                                                                                             {return '[';}
"]"                                                                                             {return ']';}
">"                                                                                             {return '>';}
"<"                                                                                             {return '<';}
"NOT"                                                                                           {return 'NOT';}
'"'                                                                                             {return '"';}
"'"                                                                                             {return "'";}
"!"                                                                                             {return "!";}
"="                                                                                             {return '=';}
"%"                                                                                             {return '%';}
[#]                                                                                             {return '#';}
<<EOF>>                                                                                         {return 'EOF';}
/lex

/* operator associations and precedence (low-top, high-bottom) */
%left '='
%left '<=' '>=' '<>' 'NOT' '||'
%left '>' '<'
%left '+' '-'
%left '*' '/'
%left '^'
%left '&'
%left '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
  : expression EOF {
      return (d = {}) => $1(d);
    }
;

expression
  : variableSequence {
      $$ = d => d[$1[0]];
    }
  | number {
      $$ = d => Number($1);
    }
  | STRING {
      $$ = d => yy.trimEdges($1);
    }
  | expression '&' expression {
      $$ = d => yy.operate('&', $1(d), $3(d));
    }
  | expression '=' expression {
      $$ = d => yy.operate('=', $1(d), $3(d));
    }
  | expression '+' expression {
      $$ = d => yy.operate('+', $1(d), $3(d));
    }
  | '(' expression ')' {
      $$ = $2;
    }
  | expression '<' '=' expression {
      $$ = d => yy.operate('<=', $1(d), $4(d));
    }
  | expression '>' '=' expression {
      $$ = d => yy.operate('>=', $1(d), $4(d));
    }
  | expression '<' '>' expression {
      $$ = d => yy.operate('<>', $1(d), $4(d));
    }
  | expression NOT expression {
      $$ = d => yy.operate('NOT', $1(d), $3(d));
    }
  | expression '>' expression {
      $$ = d => yy.operate('>', $1(d), $3(d));
    }
  | expression '<' expression {
      $$ = d => yy.operate('<', $1(d), $3(d));
    }
  | expression '-' expression {
      $$ = d => yy.operate('-', $1(d), $3(d));
    }
  | expression '*' expression {
      $$ = d => yy.operate('*', $1(d), $3(d));
    }
  | expression '/' expression {
      $$ = d => yy.operate('/', $1(d), $3(d));
    }
  | expression '^' expression {
      $$ = d => yy.operate('^', $1(d), $3(d));
    }
  | '-' expression {
      var n1 = yy.oppositeNumber($2);

      $$ = n1;

      if (isNaN($$)) {
          $$ = 0;
      }
    }
  | '+' expression {
      var n1 = yy.toNumber($2);

      $$ = n1;

      if (isNaN($$)) {
          $$ = 0;
      }
    }
  | FUNCTION '(' ')' {
      $$ = d => yy.callFunction($1);
    }
  | FUNCTION '(' expseq ')' {
      $$ = d => yy.callFunction($1, $3(d));
    }
  | '[' expseq ']' {
      $$ = d => $2(d);
    }
  | error
  | error error
;

expseq
  : expression {
      $$ = d => [$1(d)];
    }
  | expseq ';' expression {
      $$ = d => {
        const tab = $1(d);
        tab.push($3(d));
        return tab;
      }
    }
  | expseq ',' expression {
      $$ = d => {
        const tab = $1(d);
        tab.push($3(d));
        return tab;
      }
    }
;

variableSequence
  : VARIABLE {
      $$ = [$1];
    }
  | variableSequence DECIMAL VARIABLE {
      $$ = (Array.isArray($1) ? $1 : [$1]);
      $$.push($3);
    }
;

number
  : NUMBER {
      $$ = $1;
    }
  | NUMBER DECIMAL NUMBER {
      $$ = ($1 + '.' + $3) * 1;
    }
  | number '%' {
      $$ = $1 * 0.01;
    }
;

error
  : ERROR {
      $$ = yy.throwError($1);
    }
;

%%
