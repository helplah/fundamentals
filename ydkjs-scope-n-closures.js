/* // pg 7
function foo(a) {
  console.log( a ); // 2
}

foo( 2 );

  RHS reference for foo
  LHS reference for variable a - find variable container a, n assign 2 to a
  RHS reference for console obj - to find log property
  RHS reference for variable a - to retrieve value of var a
  3RHS 1LHS
*/


/* // pg 7
function foo(a) {
  var b = a;
  return a + b;
}

var c = foo( 2 );

  RHS reference for foo - retrieve his/her source value

  LHS reference for var a - find variable container a, n assign 2
  RHS reference for var a - cfm value of a
  LHS reference for var b - assign value of a to b

  RHS reference for var a - find value of a
  RHS reference for var b - find value of b
  LHS reference for var c - find variable container c, n assign foo(2)
  4RHS 3LHS
*/

/*
function foo(a) {
  console.log( a + b );
  b = a;
}

foo( 2 );
 RHS
  if RHS look-up ever fails to find a variable, ReferenceError is thrown:
    Uncaught ReferenceError: b is not defined

  else if a variable is found for a RHS look-up, but you do something with its value that is impossible
  - execute-as-function a non-function value, or reference a property on a null or undefined value - 
  engine throws a different kind of error, called TypeError

  LHS
  if engine is performing LHS look-up, and it arrives at global scope without finding it,
  if the program is not running in 'Strict Mode', then the global scope will create a variable of that name
  in the global scope, and hand it back to the engine.
*/
