var assert = require('assert')
var chai = require('chai')
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser))

describe('Cafetownsend Test', () => {
    it('should be able to login', () => {
        browser.url('http://cafetownsend-angular-rails.herokuapp.com/login')
        browser.maximizeWindow();
        $('[ng-model="user.name"]').setValue("Luke");
        $('[ng-model="user.password"]').setValue("Skywalker");
        $('//*[@id="login-form"]/fieldset/button').click();
        browser.pause(2000);
    })
    it('should be able to create a user', () => {
        $('#bAdd').click();
        $('[ng-model="selectedEmployee.firstName"]').setValue("WebDriverIOFirstName");
        $('[ng-model="selectedEmployee.lastName"]').setValue("WebDriverIOLastName");
        $('[ng-model="selectedEmployee.startDate"]').setValue("2019-11-23");
        $('[ng-model="selectedEmployee.email"]').setValue("WebDriverIOuser@gmail.com");
        $('/html/body/div/div/div/form/fieldset/div/button[2]').click();
        browser.pause(5000);
        chai.expect('//*[@id="employee-list"]/li[contains(text(),"WebDriverIOFirstName")]').to.be.there();
        
    })
    it('should be able to delete a user', () => {
        $('//*[@id="employee-list"]/li[contains(text(),"WebDriverIOFirstName")]').click();
        $('#bDelete').click();
        browser.acceptAlert();
        browser.pause(2000);
        $('//*[@id="employee-list"]/li[contains(text(),"WebDriverIOFirstName")]').click()//Just to refresh
        browser.pause(2000);
        chai.expect('//*[@id="employee-list"]/li[contains(text(),"WebDriverIOFirstName")]').to.not.be.there();
        
    })
    it('should be able to logout', () => {
        $('/html/body/div/header/div/p[1]').click();
        browser.pause(5000);
        chai.expect('//*[@id="login-form"]/fieldset/label[1]/span[1]').to.be.there();
        
    })
})