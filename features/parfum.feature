Feature: Parfum

  Background:
    Given I am on the HomePage page
    When I reject all cookies
    Then I click on "parfum" link in the navigation bar
    Then I click at the corner of the screen
    Then I validate the ParfumPage title

  @Sale
  Scenario: Sale Criteria
    #Highlights
    When I click the "Highlights" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Sale"
    And I close the dropdown
    #Produktart
    When I click the "Produktart" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Eau de Parfum" in the dropdown
    And I select the option "Eau de Parfum"
    #Marke
    When I click the "Marke" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Viktor&Rolf" in the dropdown
    Then I select the option "Viktor&Rolf"
    And I close the dropdown
    #Für wen
    When I click the "Für wen" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Männlich"
    Then I close the dropdown
    And I wait for loader doesn't exist
    # List of products
    Then I validate the list of products with the following values:
      | brand       | product   | type              |
      | VIKTOR&ROLF | Spicebomb | Extreme           |
      | VIKTOR&ROLF | Spicebomb | Infrared          |
      | VIKTOR&ROLF | Spicebomb | Nightvision Spray |

  @New
  Scenario: Neu Criteria
    #Highlights
    When I click the "Highlights" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "NEU"
    And I close the dropdown
    Then I wait for loader doesn't exist
    #Produktart
    When I click the "Produktart" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Bodyspray" in the dropdown
    Then I select the option "Bodyspray"
    #Für wen
    When I click the "Für wen" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Männlich"
    And I close the dropdown
    # List of products
    Then I validate the list of products with the following values:
      | brand | product       | type             |
      | 4711  | Remix Cologne | Sparkling Island |


  @Limited
  Scenario: Limitiert Criteria
    #Produktart
    When I click the "Produktart" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Eau de Parfum" in the dropdown
    Then I select the option "Eau de Parfum"
    And I close the dropdown
    #Marke
    When I click the "Marke" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Armani" in the dropdown
    Then I select the option "Armani"
    And I close the dropdown
    #Highlights
    When I click the "Highlights" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Limitiert"
    And I close the dropdown
    Then I wait for loader doesn't exist
    #Geschenk für
    When I click the "Geschenk für" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Muttertag"
    And I close the dropdown
    #Für wen
    When I click the "Für wen" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Weiblich"
    And I close the dropdown
    Then I wait for loader doesn't exist
    Then I see the list of products
    Then I validate the list of products with the following values:
      | brand  | 
      | ARMANI |