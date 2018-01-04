console.log('A simple node application\n');

/**
  * require and exports
  */

/*
const myModule1 = require('./sample_module_1');
console.log('myModule1: ', myModule1);
console.log('randomNum1(): ', myModule1.randomNum1());
console.log('randomNum2(): ', myModule1.randomNum2());
*/

/*
const myModule2 = require('./sample_module_2');
console.log('myModule2: ', myModule2());
// not working function inside function. need to check the correct syntax
// console.log('randomNum3(): ', myModule2().randomNum3());
*/


/**
  * Core Modules
  */

// os
/*
const os = require('os');
// console.log('os: ', os);
console.log('os.platform(): ', os.platform());
console.log('os.totalmem(): ', os.totalmem());
console.log('os.freemem(): ', os.freemem());
console.log('os.homedir(): ', os.homedir());
*/

// http
/*
const http = require('http');
console.log('http: ', http);
*/


/**
  * NPM Modules
  */

var _ = require('underscore');