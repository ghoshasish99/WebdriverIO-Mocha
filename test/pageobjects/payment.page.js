const Page = require('./page');

class PaymentPage extends Page {
    
    get title () { return $('#datitle') }
    get firstname () { return $('#dafirstname') }
    get lastname () { return $('#dalastname') }
    get addr1 () { return $('#daaddressline1')}
    get addr2 () { return $('#daaddressline2')}
    get city () { return $('#dacity')}
    get state () { return $('#dastateprovinceregion')}
    get zip () { return $('#dazippostcode')}
    get btnNext () { return $('#buttonnext > .MuiButton-label')}
    get cardNo () { return $('#cardnumber') }
    get nameOnCard () { return $('#nameoncard') }
    get expirymonth () { return $('#expirymonth') }
    get expiryyear () { return $('#expiryyear')}
    get securitycode () { return $('#securitycode')}
    get btnConfirm () { return $('//*[text()="Confirm"]')}

    enterAddressDetails(title,fname,lname,addr1,addr2,city,state,zip){
        this.title.setValue(title);
        this.firstname.setValue(fname);
        this.lastname.setValue(lname);
        this.addr1.setValue(addr1);
        this.addr2.setValue(addr2);
        this.city.setValue(city);
        this.state.setValue(state);
        this.zip.setValue(zip);
    }

    enterPaymentDetails(cardNo,name,month,year,code){
        this.btnNext.click();
        this.cardNo.setValue(cardNo);
        this.nameOnCard.setValue(name);
        this.expirymonth.setValue(month);
        this.expiryyear.setValue(year);
        this.securitycode.setValue(code);
        this.btnConfirm.click();
    }
}

module.exports = new PaymentPage();
