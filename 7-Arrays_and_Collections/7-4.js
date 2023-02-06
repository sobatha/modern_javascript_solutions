// The thisArg argument (defaults to undefined) will be used as the this value when calling callbackFn. 
// The this value ultimately observable by callbackFn is determined according to the usual rules: 
// if callbackFn is non-strict, primitive this values are wrapped into objects, and undefined/null is substituted with globalThis.
//  The thisArg argument is irrelevant for any callbackFn defined with an arrow function,
//  as arrow functions don't have their own this binding.

var customThis = {val : 10};
var array = [1];
function log(val, index) {
    console.log(this.val); // 10 
}
array.forEach(log, customThis);

//書き直し
array.forEach(function(val, index) {console.log(customThis.val)})
