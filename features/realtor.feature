Feature: Property Search

  Scenario: Verify property search results
	Given I land on the home page
	When I search for "Morgantown, WV" property
	And I click on second listed property
	Then I should see the selected property
	
	 