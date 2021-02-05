var  LoginPage  = require ('../pageobject/LoginPage');
var  CreateUser  = require ('../pageobject/CreateUser');
var  DeleteUser  = require('../pageobject/DeleteUser');
var  Logout  = require('../pageobject/Logout');
var chai = require('chai');
var chaiwebdriverio = require('chai-webdriverio').default;
var assert = require('assert');
chai.use(chaiwebdriverio(browser));
const fs = require('fs');
var jsonbody = fs.readFileSync('./testdata/newuser.json');
var inputs = JSON.parse(jsonbody);

describe('Cafetownsend Test', () =>{

      it('should be able to login',()=>{
         LoginPage.open();
         LoginPage.username.setValue('Luke');
         LoginPage.password.setValue('Skywalker');
         LoginPage.submit();
         LoginPage.greetings.waitForDisplayed(5000)
      })

      inputs.forEach(input => {   

      it(`should be able to create user ${input["firstname"]}`,()=>{
        CreateUser.createbutton.click();
        CreateUser.firstname.setValue(input["firstname"]);
        CreateUser.lastname.setValue(input["lastname"]);
        CreateUser.startdate.setValue(input["startdate"]);
        CreateUser.email.setValue(input["email"]);
        CreateUser.submit();
        browser.pause(2000);
        CreateUser.setusername=input["firstname"];
        chai.expect(CreateUser.addeduser.getText()).to.contain(input["firstname"]);
     })

     it(`should be able to delete user ${input["firstname"]}`,()=>{
        DeleteUser.setusername=input["firstname"];
        DeleteUser.usertobeDeleted.click();
        DeleteUser.deletebutton.click();
        browser.acceptAlert();
        browser.pause(2000);
        DeleteUser.usertobeDeleted.click(); // To refresh
        browser.pause(2000);
        chai.expect(DeleteUser.userlist.getText()).not.to.contain(input["firstname"])
     })

   }) 

     it('should be able to logout',()=>{
        Logout.logoutbutton.click();
        LoginPage.usernameText.waitForDisplayed(5000)
        chai.expect(LoginPage.usernameText.getText()).to.contain('Username');
      })
     

})
