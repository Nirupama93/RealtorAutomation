
var HomePage = function() {

  this.open = function() {
	browser.waitForAngularEnabled(false);
	browser.driver.manage().window().maximize();
    browser.get('https://www.realtor.com/');
	browser.manage().addCookie({name:'clstr', value: 'c'});
	browser.refresh();
  };

  this.searchProperty = function(keyword) {
    element(by.id('searchBox')).sendKeys(keyword);
  };

  this.searchButton = function() {
    element(by.css('.js-searchButton')).click()
  };
  
};

module.exports = HomePage;
