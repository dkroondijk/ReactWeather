var names = ['Diederik', 'Kip', 'Spencer'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Diederik'));

// var person = {
//   name: 'Diederik',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(person.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log('standard', add(1, 3));
console.log('addStatement', addStatement(2, 3));
console.log('addExpression', addStatement(3, 3));
