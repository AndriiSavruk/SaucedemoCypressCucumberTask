Feature: Inventory Page Navigation Feature

  Background: 
    Given The user opens the login page
    When The user provides credentials
      | username      | password     |
      | standard_user | secret_sauce |
    And The user clicks on the Login button

  Scenario: Log out
    When The user opens the navigation menu
    And The user chooses Logout
    Then The user is on the login page

  Scenario: Closing the navigation burger menu
    When The user opens the navigation menu
    And The user clicks on the X icon in the menu
    Then The navigation burger menu disappears

  Scenario: Clicking on the product's image
    When The user clicks on the 'Sauce Labs Backpack' product image
    Then The user is on the 'Sauce Labs Backpack' product page

  Scenario: Clicking on the product's name
    When The user clicks on the 'Sauce Labs Backpack' product name
    Then The user is on the 'Sauce Labs Backpack' product page

  Scenario: Clicking on the "Add to cart" button
    When The user clicks on the "Add to cart" button in the 'Sauce Labs Backpack' block
    Then The red badge in the cart icon appears
