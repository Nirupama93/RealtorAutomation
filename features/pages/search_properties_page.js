
var SearchPropertiesPage = function() {
	
	
	this.getSearchPropertiesCount = function() {		
		var elementText = element(by.xpath("//div[@id='srp-sort-count-wrap']/span"));
		var waitUntil = protractor.ExpectedConditions;
                browser.wait(waitUntil.presenceOf(elementText), 300, 'Text element is taking too long to display');
         return elementText.getText();
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
