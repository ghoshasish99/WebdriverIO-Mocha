var Page = require ('./page');

class Logout extends Page{
    get logoutbutton(){
        return $('/html/body/div/header/div/p[1]');
    }
}

module.exports = new Logout();