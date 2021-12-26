// execute one file but split code in modules in diferent files
// CommonJS, every file in NodeJS is a module (by default)
// Modules - Encapsulated Code (only share minimum (what we want))


const names = require('./04-names-module');
const sayHi = require('./05-utils-module');
const data = require('./06-alternative-flavour-module')
// console.log(data);

// when you import a module, you alse invoke it
require('./07-mind-blown')

sayHi('dusan')
sayHi(names.dusan)
sayHi(names.john)

