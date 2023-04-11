Feature: Login feature
  @data
    Scenario: Create Test data
    Given user logged into the application
    When user creates PO
    And user complete DC arrivals
    Then Dc inventory has materials for LMD creation

 Scenario: Login to Velynk
   Given user navigated to the baseurl
   When user enter valid username and password
   Then user should be logged in