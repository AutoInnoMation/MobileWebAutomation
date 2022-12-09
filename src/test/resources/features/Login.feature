Feature: Login 
	As a user, I want to be able to login to the application
	when I present valid credentials


@self-healing	
Scenario: Login with invalid username and invalid password
	When I login using the username "test@test.com" and the password "test"
	
	
