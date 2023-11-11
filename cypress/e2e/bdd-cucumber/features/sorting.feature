Feature: Inventory Page Sorting Feature

  Background: 
    Given The user opens the login page
    When The user provides credentials
      | username      | password     |
      | standard_user | secret_sauce |
    And The user clicks on the Login button

  Scenario: The user sorts products by Name (Z to A)
    When The user selects sorting by 'Name (Z to A)'
    Then The Products block starts with 'Test.allTheThings() T-Shirt (Red)'

  Scenario: The user sorts products by Price (low to high)
    When The user selects sorting by 'Price (low to high)'
    Then The Products block starts with 'Sauce Labs Onesie'

    Scenario: The user sorts products by Price (high to low)
    When The user selects sorting by 'Price (high to low)'
    Then The Products block starts with 'Sauce Labs Fleece Jacket'
