
var SearchPropertiesPage = function() {
	
	
	this.getSearchPropertiesCount = function() {
		browser.driver.sleep(2000);
    return element(by.xpath("//div[@id='srp-sort-count-wrap']/span")).getText();
    };
	
	this.getSelectedPrice = function() {
    return element.all(by.css('.data-price-display')).get(1).getText();
    };
	
	this.clickOnSecondResult = function() {
      element.all(by.css('.srp-item-address a')).get(1).click();
    };
	
	this.getPropertyPrice = function() {
    return element(by.xpath("//span[@itemprop='price']")).getText();
    };

};

module.exports = SearchPropertiesPage;
