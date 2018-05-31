$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CEJET.feature");
formatter.feature({
  "line": 1,
  "name": "CEApplication.feature",
  "description": "",
  "id": "ceapplication.feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 37016010263,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "TestCase for the Demo of CE JET Application",
  "description": "",
  "id": "ceapplication.feature;testcase-for-the-demo-of-ce-jet-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on \"Login Page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the data in text box \"Password\" \"welcome1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on the Button \"ViewProject\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on \"CustomerDetailPage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user verifies the page is displayed \"Customer Detail\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user verifies the texts are displayed \"CustomerEngagement\" \"Customer Engagement\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user verifies the texts are displayed \"CustomerInformation\" \"Customer Information\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user verifies the texts are displayed \"Attributes\" \"Attributes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user verifies the texts are displayed \"PurchaseProfile\" \"Purchase Profile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user verifies the texts are displayed \"Segments\" \"Segments\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on the Button \"HomeImage\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Login Page",
      "offset": 12
    }
  ],
  "location": "CEJETStandardSteps.user_is_on(String)"
});
formatter.result({
  "duration": 140567032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 34
    },
    {
      "val": "welcome1",
      "offset": 45
    }
  ],
  "location": "CEJETStandardSteps.user_enters_the_below_data_in_text_box(String,String)"
});
formatter.result({
  "duration": 200405826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ViewProject",
      "offset": 26
    }
  ],
  "location": "CEJETStandardSteps.user_click_on_the_Button(String)"
});
formatter.result({
  "duration": 143297700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerDetailPage",
      "offset": 12
    }
  ],
  "location": "CEJETStandardSteps.user_is_on(String)"
});
formatter.result({
  "duration": 21355551736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Detail",
      "offset": 37
    }
  ],
  "location": "CEJETStandardSteps.user_verifies_the_page_is_displayed(String)"
});
formatter.result({
  "duration": 5033770681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerEngagement",
      "offset": 39
    },
    {
      "val": "Customer Engagement",
      "offset": 60
    }
  ],
  "location": "CEJETStandardSteps.user_verifies_the_texts_are_displayed(String,String)"
});
formatter.result({
  "duration": 482434250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CustomerInformation",
      "offset": 39
    },
    {
      "val": "Customer Information",
      "offset": 61
    }
  ],
  "location": "CEJETStandardSteps.user_verifies_the_texts_are_displayed(String,String)"
});
formatter.result({
  "duration": 555957561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attributes",
      "offset": 39
    },
    {
      "val": "Attributes",
      "offset": 52
    }
  ],
  "location": "CEJETStandardSteps.user_verifies_the_texts_are_displayed(String,String)"
});
formatter.result({
  "duration": 530554474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PurchaseProfile",
      "offset": 39
    },
    {
      "val": "Purchase Profile",
      "offset": 57
    }
  ],
  "location": "CEJETStandardSteps.user_verifies_the_texts_are_displayed(String,String)"
});
formatter.result({
  "duration": 501438975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Segments",
      "offset": 39
    },
    {
      "val": "Segments",
      "offset": 50
    }
  ],
  "location": "CEJETStandardSteps.user_verifies_the_texts_are_displayed(String,String)"
});
formatter.result({
  "duration": 438753821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HomeImage",
      "offset": 26
    }
  ],
  "location": "CEJETStandardSteps.user_click_on_the_Button(String)"
});
formatter.result({
  "duration": 6686684179,
  "status": "passed"
});
formatter.after({
  "duration": 1831495726,
  "status": "passed"
});
});