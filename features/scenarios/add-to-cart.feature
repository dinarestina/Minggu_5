@addtocart
Feature: Add To Cart

  @regression
  Scenario: Add item to cart
    Given I am on the front page
    When I try to login with username "dina.jr" and password "restina03"
    Then I am successfully login with username "dina.jr"
    When I add items to cart:
      | itemName          | quantity |
      | Samsung galaxy s6 |        1 |
      | Nokia lumia 1520  |        1 |

