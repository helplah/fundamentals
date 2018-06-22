// 1) Value vs Reference
/* In JS, the type of value solely controls whether that value will be assigned by value-copy or reference-copy */
// Simple values are always assigned/passed by value-copy: null, undefined, boolean, string, number, symbol
let a = 42;
let b = a;
console.log("a", a);
console.log("b", b);

// Compound values - object (including arrays) - always create a copy of the reference on assignment/passing
let arr1 = ["a", "b", "c"];
let arr2 = arr1;
arr2[2] = 42;

console.log("arr1", arr1);
console.log("arr2", arr2);

if (true) {
  var varInIf = "Can you see var in if statement?";
  let letInIf = "Can you see let in if statement?";
  const constInIf = "Can you see const in if statement?";
}

console.log("var inside if:", varInIf);
console.log("let inside if:", letInIf); // ReferenceError: letInIf is not defined
console.log("const inside if:", constInIf); // ReferenceError: constInIf is not defined




