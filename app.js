// will need to npm init create package.json with test: mocha and npm install --save-dev mocha chai

module.exports = {
  sayHello: function() {
    return 'hello';
  },
  addNumbers: function(value1, value2) {
    return value1 + value2;
  }
}