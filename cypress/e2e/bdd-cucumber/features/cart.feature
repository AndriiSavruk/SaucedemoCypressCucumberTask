Feature: Cart Features

  Background: 
    Given The user opens the login page
    When The user provides credentials
      | username      | password     |
      | standard_user | secret_sauce |
    And The user clicks on the Login button
    And The user clicks on the "Add to cart" button in the 'Sauce Labs Backpack' block
    And The user clicks on the cart icon

  Scenario: The user goes back to the shopping
    When The user clicks on Continue shopping button
    Then The user is on the inventory page

  Scenario: The user removes the product from the cart
    When The user clicks on the Remove button in the 'Sauce Labs Backpack' block
    Then The cart has no 'Sauce Labs Backpack' item

  Scenario: The user goes to the Checkout page
    When The user clicks on Checkout button
    Then The user is on the Checkout page
