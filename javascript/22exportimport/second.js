//es5
var myObj = require('./first');
//import myObj from './first'

console.log(myObj.user)

console.log(myObj.dbQuery.sub(5,2))

/**
[ { name: 'Alvin', city: 'Boston' }, { name: 'Priya', city: 'Paris' } ]
3
*/