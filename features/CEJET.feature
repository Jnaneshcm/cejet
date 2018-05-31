Feature: CEApplication.feature

  @smoke
  Scenario: TestCase for the Demo of CE JET Application
    Given user is on "Login Page"
    When user enters the data in text box "Password" "welcome1"
    Then user click on the Button "ViewProject"
    Given user is on "CustomerDetailPage"
    Then user verifies the page is displayed "Customer Detail"
    Then user verifies the texts are displayed "CustomerEngagement" "Customer Engagement"
    Then user verifies the texts are displayed "CustomerInformation" "Customer Information"
    Then user verifies the texts are displayed "Attributes" "Attributes"
    Then user verifies the texts are displayed "PurchaseProfile" "Purchase Profile"
    Then user verifies the texts are displayed "Segments" "Segments"
    Then user click on the Button "HomeImage"
  
