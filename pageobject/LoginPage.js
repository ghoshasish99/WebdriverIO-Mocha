var Page = require ('./page');

class LoginPage extends Page {

    get username() {
        return $('[ng-model="user.name"]');
    }
    get password(){
        return $('[ng-model="user.password"]'); 
    }
    get LoginButton(){
        return $('//*[@id="login-form"]/fieldset/button'); 
    }
    get usernameText(){
        return $('//*[@id="login-form"]/fieldset/label[1]/span[1]'); 
    }
    get greetings(){
        return $('#greetings'); 
    }
    open(){
        super.open('/');
    }
    submit(){
        this.LoginButton.click();
    }
}

module.exports = new LoginPage();
