var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var RealtorStepDefs = function() {

  var HomePage = require("../pages/home_page.js");
  var SearchPropertiesPage = require("../pages/search_properties_page.js");
  var selectedPrice = "";

  this.World = function MyWorld() {
    this.homePage = new HomePage();
	this.searchPage = new SearchPropertiesPage();
  };

  this.Given('I land on the home page', function (callback) {
    this.homePage.open();
    callback();
  });

  this.When('I search for $keyword property', function (keyword, callback) {
    this.homePage.searchProperty(keyword);
	this.homePage.searchButton();
    callback();
  });
  
  this.When('I click on second listed property', function (callback) {
    var totalCount = this.searchPage.getSearchPropertiesCount();
	var count = parseInt(totalCount);
	if (count > 0) {
        console.log("Property results count greater then zero");
    } else {
        console.log("Property results count less than zero");
    }
	selectedPrice = this.searchPage.getSelectedPrice();
	this.searchPage.clickOnSecondResult();
    callback();
  });
  
  this.When('I should see the selected property', function (callback) {
    var propertyPrice = this.searchPage.getPropertyPrice();
	if (propertyPrice==selectedPrice) {
        console.log("selected property is displayed");
    } else {
        console.log("selected property is not displayed");
    }
    callback();
  });
  
};

module.exports = RealtorStepDefs;