Feature: Navigation Feature

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

  
