$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\r\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6425231900,
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
  "name": "I login using the invalid username abc and the invalid password xyz",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 35
    },
    {
      "val": "xyz",
      "offset": 64
    }
  ],
  "location": "LoginStepDefs.i_login_using_invalid_username_invalid_password(String,String)"
});
formatter.result({
  "duration": 6469202700,
  "error_message": "java.lang.AssertionError: A detailed report will be created at \u0027C:\\arnab\\CRAFT_Cucumber\\CRAFT_Cucumber\\target\\test-classes\\retest\\recheck\\cucumber.api.testng.AbstractTestNGCucumberTests.report\u0027. You can review the details by using our CLI (https://github.com/retest/recheck.cli/) or GUI (https://retest.de/review/).\n\n3 check(s) in \u0027cucumber.api.testng.AbstractTestNGCucumberTests\u0027 found the following difference(s):\nTest \u0027feature\u0027 has 16 difference(s) in 3 state(s):\n00 resulted in:\n\tinput (email-1) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]\u0027:\n\t\tid:\n\t\t  expected\u003d\"username\",\n\t\t    actual\u003d\"email\"\n01 resulted in:\n\tMetadata Differences:\n\t  Please note that these differences do not affect the result and are not included in the difference count.\n\t\twindow.height:\n\t\t  expected\u003d\"806\",\n\t\t    actual\u003d\"840\"\n\t\twindow.width:\n\t\t  expected\u003d\"1051\",\n\t\t    actual\u003d\"1552\"\n\thtml () at \u0027html[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d1036,height\u003d674]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d1536,height\u003d710]\"\n\tdiv (login) at \u0027html[1]/body[1]/div[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d0,height\u003d-145]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d0,height\u003d-181]\"\n\tdiv (div) at \u0027html[1]/body[1]/div[1]/div[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d38,y\u003d90,width\u003d-76,height\u003d-90]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d198,y\u003d90,width\u003d-396,height\u003d-90]\"\n\t\tmargin-left:\n\t\t  expected\u003d\"38px\",\n\t\t    actual\u003d\"198px\"\n\t\tmargin-right:\n\t\t  expected\u003d\"38px\",\n\t\t    actual\u003d\"198px\"\n\t\tmax-width:\n\t\t  expected\u003d\"960px\",\n\t\t    actual\u003d\"1140px\"\n\tdiv (logincolumn) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d240,y\u003d0,width\u003d-480,height\u003d0]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d285,y\u003d0,width\u003d-570,height\u003d0]\"\n\tlabel (email) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/label[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-337,height\u003d-46]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-427,height\u003d-46]\"\n\tbr (br) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/br[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d41,y\u003d18,width\u003d-378,height\u003d-70]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d41,y\u003d18,width\u003d-468,height\u003d-70]\"\n\tinput (email-1) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]\u0027:\n\t\tid:\n\t\t  expected\u003d\"username\",\n\t\t    actual\u003d\"email\"\n\tlabel (password) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/label[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-308,height\u003d-46]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-398,height\u003d-46]\"\n\tbr (br-1) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/br[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d70,y\u003d18,width\u003d-378,height\u003d-70]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d70,y\u003d18,width\u003d-468,height\u003d-70]\"\n\tlabel (label) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/label[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-258,height\u003d-46]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-348,height\u003d-46]\"\n\tbr (br-2) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/br[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d120,y\u003d18,width\u003d-378,height\u003d-70]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d120,y\u003d18,width\u003d-468,height\u003d-70]\"\n\tinput (submit) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/input[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d32,width\u003d-304,height\u003d-32]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d32,width\u003d-394,height\u003d-32]\"\n\ta (register_here) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/a[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d285,y\u003d1,width\u003d-285,height\u003d-2]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d375,y\u003d1,width\u003d-375,height\u003d-2]\"\n02 resulted in:\n\tMetadata Differences:\n\t  Please note that these differences do not affect the result and are not included in the difference count.\n\t\twindow.height:\n\t\t  expected\u003d\"806\",\n\t\t    actual\u003d\"840\"\n\t\twindow.width:\n\t\t  expected\u003d\"1051\",\n\t\t    actual\u003d\"1552\"\n\thtml () at \u0027html[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d1036,height\u003d674]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d1536,height\u003d710]\"\n\tdiv (login) at \u0027html[1]/body[1]/div[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d0,height\u003d-145]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d0,height\u003d-181]\"\n\tdiv (div) at \u0027html[1]/body[1]/div[1]/div[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d38,y\u003d90,width\u003d-76,height\u003d-90]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d198,y\u003d90,width\u003d-396,height\u003d-90]\"\n\t\tmargin-left:\n\t\t  expected\u003d\"38px\",\n\t\t    actual\u003d\"198px\"\n\t\tmargin-right:\n\t\t  expected\u003d\"38px\",\n\t\t    actual\u003d\"198px\"\n\t\tmax-width:\n\t\t  expected\u003d\"960px\",\n\t\t    actual\u003d\"1140px\"\n\tdiv (logincolumn) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d240,y\u003d0,width\u003d-480,height\u003d0]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d285,y\u003d0,width\u003d-570,height\u003d0]\"\n\tlabel (email) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/label[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-337,height\u003d-46]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-427,height\u003d-46]\"\n\tbr (br) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/br[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d41,y\u003d18,width\u003d-378,height\u003d-70]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d41,y\u003d18,width\u003d-468,height\u003d-70]\"\n\tinput (email-1) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]\u0027:\n\t\tid:\n\t\t  expected\u003d\"username\",\n\t\t    actual\u003d\"email\"\n\tlabel (password) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/label[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-308,height\u003d-46]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-398,height\u003d-46]\"\n\tbr (br-1) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/br[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d70,y\u003d18,width\u003d-378,height\u003d-70]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d70,y\u003d18,width\u003d-468,height\u003d-70]\"\n\tlabel (label) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/label[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-258,height\u003d-46]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d0,width\u003d-348,height\u003d-46]\"\n\tbr (br-2) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/br[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d120,y\u003d18,width\u003d-378,height\u003d-70]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d120,y\u003d18,width\u003d-468,height\u003d-70]\"\n\tinput (submit) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/input[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d0,y\u003d32,width\u003d-304,height\u003d-32]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d0,y\u003d32,width\u003d-394,height\u003d-32]\"\n\ta (register_here) at \u0027html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/a[1]\u0027:\n\t\toutline:\n\t\t  expected\u003d\"java.awt.Rectangle[x\u003d285,y\u003d1,width\u003d-285,height\u003d-2]\",\n\t\t    actual\u003d\"java.awt.Rectangle[x\u003d375,y\u003d1,width\u003d-375,height\u003d-2]\"\r\n\tat de.retest.recheck.RecheckImpl.capTest(RecheckImpl.java:189)\r\n\tat de.retest.web.selenium.AutocheckingRecheckDriver.capTest(AutocheckingRecheckDriver.java:84)\r\n\tat com.CucumberCraft.pageObjects.LoginPage.login(LoginPage.java:35)\r\n\tat com.CucumberCraft.stepDefinitions.LoginStepDefs.i_login_using_invalid_username_invalid_password(LoginStepDefs.java:26)\r\n\tat ✽.When I login using the invalid username abc and the invalid password xyz(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1533249100,
  "status": "passed"
});
});