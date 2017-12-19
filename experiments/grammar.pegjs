// Form grammar
// ==========================
//
// Accepts forms types and makes a form according to the types you set
Start
 = varsAssign parameterDelimeter
 
varAssign
 =  _ Word _ ":" _ Word _ Word _ ";"
varsAssign
= (varAssign)*

parameter
 = type:Word _ name:Word {return {type:type,name:name}} 
 parameterDelimeter
 =  f:parameter l:parameterRep* {return [f].concat(l)}
parameterRep
 = ","_ as:parameter _ {return as}
Word
 = [A-z0-9_]+ {return text()}
WordDelimeter
 = f:Word l:WordRep* {return [f].concat(l)}
WordRep
 = ","_ as:Word _ {return as}

_ "whitespace"
  = [ \t\n\r]*
              
