var Page = require ('./page');

class CreateUser extends Page{
        
    get createbutton(){
        return $('#bAdd');
    }
    get firstname(){
        return $('[ng-model="selectedEmployee.firstName"]');
    }
    get lastname(){
        return $('[ng-model="selectedEmployee.lastName"]');
    }
    get startdate(){
        return $('[ng-model="selectedEmployee.startDate"]');
    }
    get email(){
        return $('[ng-model="selectedEmployee.email"]');
    }
    get addbutton(){
        return $('/html/body/div/div/div/form/fieldset/div/button[2]');
    }
    submit(){
        this.addbutton.click();
    }
    username(uname){
        return uname;
    }
    get addeduser(){
        return $(`//*[@id="employee-list"]/li[contains(text(),"${this.username}")]`);
    }
    set setusername(UserName){
        this.username=UserName;
    }
} 

module.exports = new CreateUser();
