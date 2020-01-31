var Page = require ('./page');

class DeleteUser extends Page{
    
    username(uname){
        return uname;
    }
    get usertobeDeleted(){
        return $(`//*[@id="employee-list"]/li[contains(text(),"${this.username}")]`);
    }
    get userlist(){
        return $('#employee-list');
    }
    get deletebutton(){
        return $('#bDelete');
    }
    set setusername(UserName){
        this.username = UserName;
    }

}
module.exports = new DeleteUser();