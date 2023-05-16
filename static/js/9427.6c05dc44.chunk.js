"use strict";(self.webpackChunkmarkdown_previewer=self.webpackChunkmarkdown_previewer||[]).push([[9427],{9427:function(e,t,n){function r(e){var t="error";function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var r=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),a=new RegExp("^((<>)|(<=)|(>=))"),i=new RegExp("^[\\.,]"),o=new RegExp("^[\\(\\)]"),c=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),u=n(["and","or","not","xor","is","mod","eqv","imp"]),b=["WScript","err","debug","RegExp"],l=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"].concat(["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"]);b=b.concat(["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"]),e.isASP&&(b=b.concat(["server","response","request","session","application"]),l=l.concat(["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"]));var s=n(["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"]),v=n(["true","false","nothing","empty","null"]),d=n(["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"]),m=n(b),p=n(l),h='"',f=n(["class","sub","select","while","if","function","property","with","for"]),y=n(["else","elseif","case"]),g=n(["next","loop","wend"]),k=n(["end"]),w=n(["do"]),x=n(["on error resume next","exit"]),C=n(["rem"]);function I(e,t){t.currentIndent++}function L(e,t){t.currentIndent--}function S(e,n){if(e.eatSpace())return null;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(C))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var b=!1;if((e.match(/^\d*\.\d+/i)||e.match(/^\d+\.\d*/)||e.match(/^\.\d+/))&&(b=!0),b)return e.eat(/J/i),"number";var l=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?l=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),l=!0):e.match(/^0(?![\dx])/i)&&(l=!0),l)return e.eat(/L/i),"number"}return e.match(h)?(n.tokenize=function(e){var t=1==e.length,n="string";return function(r,a){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(e))return a.tokenize=S,n;r.eat(/['"]/)}return t&&(a.tokenize=S),n}}(e.current()),n.tokenize(e,n)):e.match(a)||e.match(r)||e.match(u)?"operator":e.match(i)?null:e.match(o)?"bracket":e.match(x)?(n.doInCurrentLine=!0,"keyword"):e.match(w)?(I(0,n),n.doInCurrentLine=!0,"keyword"):e.match(f)?(n.doInCurrentLine?n.doInCurrentLine=!1:I(0,n),"keyword"):e.match(y)?"keyword":e.match(k)?(L(0,n),L(0,n),"keyword"):e.match(g)?(n.doInCurrentLine?n.doInCurrentLine=!1:L(0,n),"keyword"):e.match(s)?"keyword":e.match(v)?"atom":e.match(p)?"variableName.special":e.match(d)||e.match(m)?"builtin":e.match(c)?"variable":(e.next(),t)}return{name:"vbscript",startState:function(){return{tokenize:S,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var r=function(e,n){var r=n.tokenize(e,n),a=e.current();return"."===a?(r=n.tokenize(e,n),a=e.current(),!r||"variable"!==r.substr(0,8)&&"builtin"!==r&&"keyword"!==r?t:("builtin"!==r&&"keyword"!==r||(r="variable"),l.indexOf(a.substr(1))>-1&&(r="keyword"),r)):r}(e,n);return n.lastToken={style:r,content:e.current()},null===r&&(r=null),r},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(g)||r.match(k)||r.match(y)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit}}}n.r(t),n.d(t,{vbScript:function(){return a},vbScriptASP:function(){return i}});var a=r({}),i=r({isASP:!0})}}]);
//# sourceMappingURL=9427.6c05dc44.chunk.js.map