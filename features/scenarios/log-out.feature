@atHomePage
Feature: Log Out Scenario

  @logout
  Scenario: Successfully Logout 
    Given I am on the front page
    When I try to login with username "dina.jr" and password "restina03"
    When I am successfully login with username "dina.jr"
    When I click button logout 
    Then I am back on the front page
