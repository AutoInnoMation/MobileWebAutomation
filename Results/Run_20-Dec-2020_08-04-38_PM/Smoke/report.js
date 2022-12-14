$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\r\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6255227800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login with invalid username and invalid password",
  "description": "",
  "id": "login;login-with-invalid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@self-healing"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I login using the username \"test@test.com\" and the password \"test\"",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 28
    },
    {
      "val": "test",
      "offset": 61
    }
  ],
  "location": "LoginStepDefs.i_login_using_the_username_and_the_password(String,String)"
});
formatter.result({
  "duration": 6371065600,
  "error_message": "java.lang.AssertionError: \u0027cucumber.api.testng.AbstractTestNGCucumberTests\u0027: No Golden Master found. First time test was run? Created new Golden Master, so don\u0027t forget to commit...\n\tsrc\\test\\resources\\retest\\recheck\\cucumber.api.testng.AbstractTestNGCucumberTests\\feature.00.recheck\n\tsrc\\test\\resources\\retest\\recheck\\cucumber.api.testng.AbstractTestNGCucumberTests\\feature.01.recheck\n\tsrc\\test\\resources\\retest\\recheck\\cucumber.api.testng.AbstractTestNGCucumberTests\\feature.02.recheck\r\n\tat de.retest.recheck.RecheckImpl.capTest(RecheckImpl.java:189)\r\n\tat de.retest.web.selenium.AutocheckingRecheckDriver.capTest(AutocheckingRecheckDriver.java:84)\r\n\tat com.CucumberCraft.pageObjects.LoginPage.login(LoginPage.java:35)\r\n\tat com.CucumberCraft.stepDefinitions.LoginStepDefs.i_login_using_the_username_and_the_password(LoginStepDefs.java:44)\r\n\tat ???.When I login using the username \"test@test.com\" and the password \"test\"(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1469371800,
  "status": "passed"
});
});