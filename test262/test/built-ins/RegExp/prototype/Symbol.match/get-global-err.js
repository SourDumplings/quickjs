// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Behavior when error is thrown during retrieval of `global` property
esid: sec-regexp.prototype-@@match
info: |
    1. Let _rx_ be the *this* value.
    2. If Type(_rx_) is not Object, throw a *TypeError* exception.
    3. Let _S_ be ? ToString(_string_).
    4. Let _flags_ be ? ToString(? Get(_rx_, *"flags"*)).

    sec-get-regexp.prototype.flags get RegExp.prototype.flags
    6. Let _global_ be ToBoolean(? Get(_R_, *"global"*)).
features: [Symbol.match]
---*/

var re = /./;
Object.defineProperty(re, 'global', {
  get() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  RegExp.prototype[Symbol.match].call(re);
});
