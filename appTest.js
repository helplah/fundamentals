const assert = require('chai').assert;
// const sayHello = require('../playground').sayHello;
// const addNumbers = require('../playground').addNumbers;
const app = require('./app');

// Results
let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(5,5);

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      //let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });
  
    it('sayHello should return type string', function() {
      //let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });
  
  describe('addNumbers()', function() {
    it('addNumbers should return above 5', function() {
      //let result = app.addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5);
    });
  
    it('addNumbers should return type number', function() {
      //let result = app.addNumbers(5, 5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});