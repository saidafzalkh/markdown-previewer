"use strict";(self.webpackChunkmarkdown_previewer=self.webpackChunkmarkdown_previewer||[]).push([[482],{482:function(e,t,n){n.r(t),n.d(t,{solr:function(){return k}});var r=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,o=/[\|\!\+\-\*\?\~\^\&]/,u=/^(OR|AND|NOT|TO)$/i;function i(e){return function(t,n){for(var o=e;(e=t.peek())&&null!=e.match(r);)o+=t.next();return n.tokenize=a,u.test(o)?"operator":function(e){return parseFloat(e).toString()===e}(o)?"number":":"==t.peek()?"propertyName":"string"}}function a(e,t){var n,u,k=e.next();return'"'==k?t.tokenize=(u=k,function(e,t){for(var n,r=!1;null!=(n=e.next())&&(n!=u||r);)r=!r&&"\\"==n;return r||(t.tokenize=a),"string"}):o.test(k)?t.tokenize=(n=k,function(e,t){return"|"==n?e.eat(/\|/):"&"==n&&e.eat(/\&/),t.tokenize=a,"operator"}):r.test(k)&&(t.tokenize=i(k)),t.tokenize!=a?t.tokenize(e,t):null}var k={name:"solr",startState:function(){return{tokenize:a}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}}]);
//# sourceMappingURL=482.93c16bd5.chunk.js.map