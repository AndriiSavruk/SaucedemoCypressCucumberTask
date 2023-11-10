Feature: Login Feature

  Background: 
    Given The user opens the login page

  Scenario: Success login
    When The user provides credentials
      | username      | password     |
      | standard_user | secret_sauce |
    And The user clicks on the Login button
    Then The user is on the inventory page

  Scenario: Locked user failed login
    When The user provides credentials
      | username        | password     |
      | locked_out_user | secret_sauce |
    And The user clicks on the Login button
    Then The user receives 'Epic sadface: Sorry, this user has been locked out.' message

  Scenario: Invalid username failed login
    When The user provides credentials
      | username  | password     |
      | fakedUser | secret_sauce |
    And The user clicks on the Login button
    Then The user receives 'Epic sadface: Username and password do not match any user in this service' message

  Scenario: Invalid password failed login
    When The user provides credentials
      | username      | password      |
      | standard_user | fakedPassword |
    And The user clicks on the Login button
    Then The user receives 'Epic sadface: Username and password do not match any user in this service' message
