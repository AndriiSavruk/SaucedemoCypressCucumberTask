Feature: Login Feature
Background:
Given The user opens the login page
  Scenario: Success login
    When The user fills in username field with 'standard_user'
    When The user fills in password field with 'secret_sauce'
    When The user clicks on the Login button
    Then The user is on the inventory page
  Scenario: Locked user failed login 
    When The user fills in username field with 'locked_out_user'
    When The user fills in password field with 'secret_sauce'
    When The user clicks on the Login button
    Then The user receives 'Epic sadface: Sorry, this user has been locked out.' message
  Scenario: Invalid username failed login 
    When The user provides invalid credentials
    |username |password    |
    |fakedUser|secret_sauce|
    When The user clicks on the Login button
    Then The user receives 'Epic sadface: Username and password do not match any user in this service' message
  Scenario: Invalid password failed login 
    When The user provides invalid credentials
    |username     |password     |
    |standard_user|fakedPassword|
    When The user clicks on the Login button
    Then The user receives 'Epic sadface: Username and password do not match any user in this service' message