const Page = require('./page');

class SearchPage extends Page {
    
    get searchfield () { return $('input[aria-label="Product search"]') }
    get btnSearch () { return $('button[aria-label="Search"]') }
    get searchedProduct () { return $('.MuiCardContent-root > :nth-child(1)') }
    get btnAddToBasket () { return $('//button/span[text()="Add to your basket"]')}
    get iconBasket () { return $('#basket')}
    get proceedToCheckout () { return $('#proceedtocheckout')}
    

    searchProduct(item){
        this.searchfield.setValue(item);
        this.btnSearch.click();
    }

    addProduct(item) {
        $('//*[text()="'+item+'"]').click();
        this.btnAddToBasket.click();
        this.iconBasket.click();
    }
}

module.exports = new SearchPage();
