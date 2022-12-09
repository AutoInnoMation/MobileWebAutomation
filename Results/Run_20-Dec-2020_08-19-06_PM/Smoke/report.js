$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\r\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6209811300,
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
  "duration": 16816621700,
  "status": "passed"
});
formatter.after({
  "duration": 1618437700,
  "status": "passed"
});
});