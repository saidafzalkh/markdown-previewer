"use strict";(self.webpackChunkmarkdown_previewer=self.webpackChunkmarkdown_previewer||[]).push([[8471],{8471:function(e,t,n){n.r(t),n.d(t,{commonLisp:function(){return d}});var r,o=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,a=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,c=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,l=/[^\s'`,@()\[\]";]/;function i(e){for(var t;t=e.next();)if("\\"==t)e.next();else if(!l.test(t)){e.backUp(1);break}return e.current()}function u(e,t){if(e.eatSpace())return r="ws",null;if(e.match(c))return"number";var n;if("\\"==(n=e.next())&&(n=e.next()),'"'==n)return(t.tokenize=s)(e,t);if("("==n)return r="open","bracket";if(")"==n||"]"==n)return r="close","bracket";if(";"==n)return e.skipToEnd(),r="ws","comment";if(/['`,@]/.test(n))return null;if("|"==n)return e.skipTo("|")?(e.next(),"variableName"):(e.skipToEnd(),"error");if("#"==n)return"("==(n=e.next())?(r="open","bracket"):/[+\-=\.']/.test(n)||/\d/.test(n)&&e.match(/^\d*#/)?null:"|"==n?(t.tokenize=f)(e,t):":"==n?(i(e),"meta"):"\\"==n?(e.next(),i(e),"string.special"):"error";var l=i(e);return"."==l?null:(r="symbol","nil"==l||"t"==l||":"==l.charAt(0)?"atom":"open"==t.lastType&&(o.test(l)||a.test(l))?"keyword":"&"==l.charAt(0)?"variableName.special":"variableName")}function s(e,t){for(var n,r=!1;n=e.next();){if('"'==n&&!r){t.tokenize=u;break}r=!r&&"\\"==n}return"string"}function f(e,t){for(var n,o;n=e.next();){if("#"==n&&"|"==o){t.tokenize=u;break}o=n}return r="ws","comment"}var d={name:"commonlisp",startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:u}},token:function(e,t){e.sol()&&"number"!=typeof t.ctx.indentTo&&(t.ctx.indentTo=t.ctx.start+1),r=null;var n=t.tokenize(e,t);return"ws"!=r&&(null==t.ctx.indentTo?"symbol"==r&&a.test(e.current())?t.ctx.indentTo=t.ctx.start+e.indentUnit:t.ctx.indentTo="next":"next"==t.ctx.indentTo&&(t.ctx.indentTo=e.column()),t.lastType=r),"open"==r?t.ctx={prev:t.ctx,start:e.column(),indentTo:null}:"close"==r&&(t.ctx=t.ctx.prev||t.ctx),n},indent:function(e){var t=e.ctx.indentTo;return"number"==typeof t?t:e.ctx.start+1},languageData:{commentTokens:{line:";;",block:{open:"#|",close:"|#"}},closeBrackets:{brackets:["(","[","{",'"']}}}}}]);
//# sourceMappingURL=8471.271302bc.chunk.js.map