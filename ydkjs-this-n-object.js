/* chp 1
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

foo.call(obj); 
*/


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