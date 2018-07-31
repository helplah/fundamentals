// chp 1
/*
function foo(num) {
  console.log( "foo: " + num );
  // keep track of how many times `foo` is called
  this.count++;
}

foo.count = 0;
var i;

for (i=0; i<10; i++) {
  if (i > 5) {
    foo( i );
  }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9
// how many times was `foo` called?
console.log('foo.count:', foo.count ); // 0 -- WTF?
*/



// Chp 2 - inspect call-site and determine which of the four rules applies
// Default Binding
/*
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 2

function foo() {
  'use strict';
  console.log(this.a);
}
var a = 2;
foo(); // TypeError: this is undefined 
*/


/*
// Implicit Binding
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
}

obj.foo();

// only the top/last level of an object property reference chain matters to the call site
function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
}

var obj1 = {
  a: 2,
  obj2: obj2
}

obj1.obj2.foo();
*/


// Explicit Binding
/*
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
}

foo.call(obj); // 2
*/


// Hard binding (under explicit binding)
/*
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

var bar = function() {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2 

// hard-bound `bar` can no longer have its `this` overriden
bar.call(window); // 2
*/


// wrap a function with a hard binding creates a pass-through of any arguments passed and any return value received:
/*
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = function() {
  return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
*/


// reusuable helper
/*
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}
  
// simple `bind` helper
function bind(fn, obj) {
  return function() {
    return fn.apply( obj, arguments );
  };
}

var obj = {
  a: 2
};

var bar = bind( foo, obj );
var b = bar( 3 ); // 2 3
console.log( b ); // 5
*/


// bind(..) returns a new function that is hardcoded to call the original function with the this context set as you specified.
/*
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}
  
var obj = {
  a: 2
};

var bar = foo.bind( obj );
var b = bar( 3 ); // 2 3
console.log( b ); // 5
*/


// API call context
/*
function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome"
};

// use `obj` as `this` for `foo(...)` calls
[1, 2, 3].forEach(foo, obj);
// 1 awesome  2 awesome  3 awesome
*/


// new Binding