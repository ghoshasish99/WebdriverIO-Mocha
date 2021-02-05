var allure = require('allure-commandline');
 
// returns ChildProcess instance
var generation = allure(['generate', 'allure-results']);
 
generation.on('exit', function(exitCode) {
    console.log('Generation is finished with code:', exitCode);
});