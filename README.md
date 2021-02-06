# WebdriverIO with Mocha

[![Build Status](https://dev.azure.com/AutomationsTools/Execution/_apis/build/status/ghoshasish99.WebdriverIO-Mocha?branchName=master)](https://dev.azure.com/AutomationsTools/Execution/_build/latest?definitionId=3&branchName=master)

### Getting Started
* Create a standard node project using `npm init` and following the next steps
* To install WebdriverIO, run this command on commandline `npm i --save-dev @wdio/cli`
* To Generate the WebdriverIO configuration file, run this command `npx wdio config -y`. This will create all config parameters and download subsequent libraries.

### Writing tests
By default WebdriverIO uses `mocha` framework. So you can write your code in `describe` & `it` blocks, like so :
```javascript
describe('Login and Registration', () => {
    it('login should fail with invalid credentials', () => {
        browser.url('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login')
        $('#email').setValue('username');
        $('#password').setValue('wrongpassword');
        $('form.login > .MuiButtonBase-root > .MuiButton-label').click();
        expect($('=Wrong username/password')).toBeVisible();
    });
});
```
By default, WebdriverIO globally exposes `browser`.

Most common types of WebdriverIO selectors are as follows :
```javascript
$('h2.subheading a') //CSS selector
$('=WebdriverIO')    //Link Text
$('//body/p[2]')     //Xpath
```
To execute WebdriverIO tests, simply use `npx wdio wdio.conf.js`

To run WebdriverIO test in headless mode, add the following capability inside the wdio.conf.js file :
```javascript
'goog:chromeOptions': {
            args: ['--headless'],
        }
```
To know more about WebdriverIO, visit the [official page.](https://webdriver.io/)