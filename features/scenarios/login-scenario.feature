@login
Feature: DemoBlaze app Login Scenario

  @smoke
  Scenario: Successfully login using correct username password
    Given I am on the front page
    When I try to login with correct credential
    Then I am successfully logged in

  @smoke
  Scenario: Login with parameter
    Given I am on the front page
    When I try to login with username "dina.jr" and password "restina03"
    Then I am successfully login with username "dina.jr"

  @regression
  Scenario Outline: Login with multiple account
    Given I am on the front page
    When I try to login with username "<username>" and password "<password>"
    Then I am successfully login with username "<username>"

    Examples: 
      | username        | password  |
      | dina.jr         | restina03 |
      | wibowo.bullseye | bullseye  |

  @scroll
  Scenario: Scrolling Test
    Given I am on the front page
    Given I perform scrolling to footer
