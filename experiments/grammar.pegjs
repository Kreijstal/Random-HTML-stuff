// Simple Arithmetics Grammar
// ==========================
//
// Accepts expressions like "2 * (3 + 4)" anda computes their value.

Start
 = variables:varsAssign parameters:parameterDelimeter {return {variables:variables,parameters:parameters}}
 
varAssign
 =  _ type:Word _ ":" _ def:Word _ validation:Word? _ ";" {return {type:type,def:def,validation:validation}}
varsAssign
= (varAssign)*

Comment "comment"
  = MultiLineComment
  / SingleLineComment

MultiLineComment
  = "/*" (!"*/" SourceCharacter)* "*/"
  
SingleLineComment
  = "//" (!LineTerminator SourceCharacter)*
  
SourceCharacter
  = .  

LineTerminator
  = [\n\r\u2028\u2029]

parameter
 = type:Word _ name:Word {return {type:type,name:name}} 

parameterDelimeter
 = _ f:parameter l:parameterRep* {return [f].concat(l)}
parameterRep
 = ","_ as:parameter _ {return as}
Word
 = [A-z0-9_]+ {return text()}
WordDelimeter
 = f:Word l:WordRep* {return [f].concat(l)}
WordRep
 = ","_ as:Word _ {return as}
 
_
 = (WhiteSpace / LineTerminatorSequence / Comment)*
 
Zs = [\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]

LineTerminatorSequence "end of line"
  = "\n"
  / "\r\n"
  / "\r"
  / "\u2028"
  / "\u2029"

WhiteSpace "whitespace"
  = "\t"
  / "\v"
  / "\f"
  / " "
  / "\u00A0"
  / "\uFEFF"
  / Zs
              
