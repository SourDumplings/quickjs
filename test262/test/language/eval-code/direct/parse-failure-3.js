// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If Result(3).type is not normal, then Result(3).type must be throw.
    Throw Result(3).value as an exception
es5id: 15.1.2.1_A3.3_T1
description: Continue statement
---*/

//CHECK#1
try {
  eval("continue;");
  throw new Test262Error('#1.1: continue must throw SyntaxError. Actual: ' + (eval("continue;")));
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    throw new Test262Error('#1.2: continue must throw SyntaxError. Actual ' + (e));
  }  
}

//CHECK#2
try {
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
       eval("continue;");       
    }
  }
  throw new Test262Error('#2.1: continue must throw SyntaxError. Actual: ' + (eval("continue;")));    
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    throw new Test262Error('#2.2: continue must throw SyntaxError. Actual: ' + (e));
  }  
}
