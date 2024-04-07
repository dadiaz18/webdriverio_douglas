Feature: Parfum

  Background:
    Given I am on the HomePage page
    When I reject all cookies
    Then I wait until the page is loaded
    Then I click on "parfum" link in the navigation bar
    Then I click at the corner of the screen
    #Then I wait until the page is loaded
    Then I validate the ParfumPage title

  @Sale
  Scenario: Sale Criteria
    Then I click the "Produktart" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Eau de Parfum" in the dropdown
    Then I select the option "Eau de Parfum"
    Then I click the "Marke" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Viktor&Rolf" in the dropdown
    Then I select the option "Viktor&Rolf"
    Then I click the "Für wen" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Männlich"
    Then I click at the corner of the screen
    Then I validate the sales product card with the following values:
      | brand       | product   | type              |
      | VIKTOR&ROLF | Spicebomb | Extreme           |
      | VIKTOR&ROLF | Spicebomb | Infrared          |
      | VIKTOR&ROLF | Spicebomb | Nightvision Spray |

  @Neu
  Scenario: Neu Criteria
    Then I click the "Produktart" dropdown
    Then I wait for the menu content to be visible
    Then I search for "Bodyspray" in the dropdown
    Then I select the option "Bodyspray"
    Then I click the "Für wen" dropdown
    Then I wait for the menu content to be visible
    Then I select the option "Männlich"
    Then I click at the corner of the screen
    Then I validate the new product card with the following values:
      | brand | product       | type             |
      | 4711  | Remix Cologne | Sparkling Island |
