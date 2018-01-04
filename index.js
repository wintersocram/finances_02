console.log('A simple node application\n');

/**
  * require and exports
  */

/*
const myModule1 = require( './sample_module_1' );
console.log( 'myModule1: ', myModule1 );
console.log( 'randomNum1(): ', myModule1.randomNum1() );
console.log( 'randomNum2(): ', myModule1.randomNum2() );
*/

/*
const myModule2 = require( './sample_module_2' );
console.log( 'myModule2: ', myModule2() );
// not working function inside function. need to check the correct syntax
// console.log( 'randomNum3(): ', myModule2().randomNum3() );
*/
// to correct the problem of function inside function, here is an solution:
/*
const apple = require('./fruit.js');
apple().setName('Apple');
apple().setDescription('uma fruta vermelha, proveniente da macieira');
console.log(apple().getInfo());
// and use like this
const banana = require('./fruit.js');
banana().setName('Banana');
banana().setDescription('uma fruta amarela, proveniente da bananeira');
console.log(banana().getInfo());
// or yet:
let fruits = require('./fruit.js');
const orange = fruits();
orange.setName('Orange'); // pay attention: orange has not the call to a function as banana has : ()
orange.setDescription('uma fruta laranja, proveniente da laranjeira');
console.log(orange.getInfo());
*/

/**
  * Core Modules
  */

// os
/*
const os = require( 'os' );
// console.log( 'os: ', os );
console.log( 'os.platform(): ', os.platform() );
console.log( 'os.totalmem(): ', os.totalmem() );
console.log( 'os.freemem(): ', os.freemem() );
console.log( 'os.homedir(): ', os.homedir() );
*/

// http
/*
const http = require( 'http' );
console.log( 'http: ', http );
*/


/**
  * NPM Modules
  */

// underscore
/*
const _ = require( 'underscore' );
let names = [ 'Marcos' , 'Thais' , 'Happy' , 'Elune' ];
_.each( names, (name) => { console.log('Name: ', name); } )
*/


