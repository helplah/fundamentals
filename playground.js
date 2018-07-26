const array = ['a', 'b', 'c', 'd', 'e'];
let firstElement = array.shift();
array.splice(2, 0, firstElement); 
console.log(array);

console.log('');
