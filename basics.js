// 1) Value vs Reference
/* In JS, the type of value solely controls whether that value will be assigned by value-copy or reference-copy */
// Simple values are always assigned/passed by value-copy: null, undefined, boolean, string, number, symbol
(function() {
  let a = 42;
  let b = a;
  console.log("Proving value-copy, variable a:", a);
  console.log("Proving value-copy, variable b:", b);
  console.log("\n");
})();

// Compound values - object (including arrays) - always create a copy of the reference on assignment/passing
(function() {
  let arr1 = ["a", "b", "c"];
  let arr2 = arr1;
  arr2[2] = 42;

  console.log("Proving reference-copy, array arr1:", arr1);
  console.log("Mutate arr2 and it affects shared-copy value of array arr2:", arr2);
  console.log("\n");
})();

// if, switch, for, while unlike functions don't create a new scope
if (true) {
  var varInIf = "Can you see var in if statement?"; // name is in global scope cos of var keyword
  let letInIf = "Can you see let in if statement?"; // 
  const constInIf = "Can you see const in if statement?"; 
}

console.log("var inside if:", varInIf);
console.log("\n");
//console.log("let inside if:", letInIf); // ReferenceError: letInIf is not defined
//console.log("const inside if:", constInIf); // ReferenceError: constInIf is not defined

/* IIFEs avoid variable hoisting from within blocks, protect against polluting the global namespace 
and simultaneously allow public access to methods 
while retaining privacy for variables defined within the function. */
(function (add) { 
  const foo = "bar";
  let num = add;

  console.log("Testing IIFE:", foo);
  console.log("Testing IIFE w parameter:", num);
  console.log("\n");
})(10);

console.log("Typeof null:", typeof null); 
console.log("Typeof undefined:", typeof undefined);
console.log("\n");

(function() {
  const a = [1, 2, 3];
  const doubled = a.forEach((num, index) => {
    // Do something with num and/or index.


  });

  // doubled = undefined
})();

