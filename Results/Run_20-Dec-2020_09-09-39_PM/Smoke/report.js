$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\r\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6260610900,
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
  "duration": 16473853000,
  "error_message": "java.lang.AssertionError: A detailed report will be created at \u0027C:\\arnab\\CRAFT_Cucumber\\CRAFT_Cucumber\\target\\test-classes\\retest\\recheck\\cucumber.api.testng.AbstractTestNGCucumberTests.report\u0027. You can review the details by using our CLI (https://github.com/retest/recheck.cli/) or GUI (https://retest.de/review/).\n\n3 check(s) in \u0027cucumber.api.testng.AbstractTestNGCucumberTests\u0027 found the following difference(s):\nTest \u0027feature\u0027 has 2 difference(s) in 3 state(s):\n00 resulted in:\n\tinput (username) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]\u0027:\n\t\tid:\n\t\t  expected\u003d\"username\",\n\t\t    actual\u003d\"email\", breaks\u003d\"AbstractTestNGCucumberTests.java:21\"\n01 resulted in:\n\tinput (username) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]\u0027:\n\t\tid:\n\t\t  expected\u003d\"username\",\n\t\t    actual\u003d\"email\"\n02 resulted in:\n\tinput (username) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]\u0027:\n\t\tid:\n\t\t  expected\u003d\"username\",\n\t\t    actual\u003d\"email\"\r\n\tat de.retest.recheck.RecheckImpl.capTest(RecheckImpl.java:189)\r\n\tat de.retest.web.selenium.AutocheckingRecheckDriver.capTest(AutocheckingRecheckDriver.java:84)\r\n\tat com.CucumberCraft.pageObjects.LoginPage.login(LoginPage.java:35)\r\n\tat com.CucumberCraft.stepDefinitions.LoginStepDefs.i_login_using_the_username_and_the_password(LoginStepDefs.java:44)\r\n\tat ✽.When I login using the username \"test@test.com\" and the password \"test\"(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1235524900,
  "status": "passed"
});
});