const LoginPage = require('../pageobjects/login.page');
const SearchPage = require('../pageobjects/search.page');
const accountData = require('../../testdata/account.json')

describe('Login and Registration', () => {
    it('login should fail with invalid credentials', () => {
        LoginPage.open();
        LoginPage.login(accountData.negativeLogin.username,accountData.negativeLogin.password);
        expect(LoginPage.loginerror).toBeVisible();
    });
    it('Account Creation should be successful', () => {
        let random = Math.floor(Math.random()*90000) + 10000;
        let email = accountData.create.email.replace('Ashish','Ashish'+random); 
        LoginPage.open();
        LoginPage.createAccount(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)
        expect(SearchPage.searchfield).toBeVisible();
    });
});


