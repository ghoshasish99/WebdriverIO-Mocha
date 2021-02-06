const Page = require('./page');

class LoginPage extends Page {
    
    get email () { return $('#email') }
    get password () { return $('#password') }
    get btnSubmit () { return $('form.login > .MuiButtonBase-root > .MuiButton-label') }
    get loginerror () { return $('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]')}
    get btncreateAccount1() { return $('div.login > .MuiButtonBase-root > .MuiButton-label')}
    get firstname () { return $('#firstname') }
    get lastname () { return $('#lastname') }
    get registeremail () { return $('#registeremail') }
    get confirmpassword () { return $('#confirmpassword') }
    get btncreateAccount2() { return $('form.register > .MuiButtonBase-root > .MuiButton-label')}
    get productSearch () { return $('input[aria-label="Product search"]')}


    login (username, password) {
        this.email.setValue(username);
        this.password.setValue(password);
        this.btnSubmit.click(); 
    } 

    createAccount(fname,lname,email,password){
        this.btncreateAccount1.click();
        this.firstname.setValue(fname);
        this.lastname.setValue(lname);
        this.registeremail.setValue(email);
        this.password.setValue(password);
        this.confirmpassword.setValue(password);
        this.btncreateAccount2.click();
    }

    open () {
        return super.open('cts-shop/login');
    }
}

module.exports = new LoginPage();
