package com.CucumberCraft.pageObjects;

import java.net.MalformedURLException;
import java.nio.file.Paths;

import org.apache.log4j.Logger;

import com.CucumberCraft.stepDefinitions.MasterStepDefs;
import com.CucumberCraft.supportLibraries.DriverManager;

import de.retest.web.selenium.By;
import de.retest.web.selenium.RecheckDriver;


public class LoginPage extends MasterStepDefs {

	static Logger log = Logger.getLogger(LoginPage.class);
	
	

	@SuppressWarnings("rawtypes")
	RecheckDriver driver = DriverManager.getWebDriver();
	
	public void login(String userName, String password) {
		try {
			//driver.startTest();
			String url = Paths.get( "src/test/resources/index.html" ).toUri().toURL().toString();
			 driver.get(url);
			 driver.manage().window().maximize();
			 //driver.findElement(By.retestId("email-1")).sendKeys("a@gmail.com");
		     //driver.findElement(By.retestId("password-1")).sendKeys("16");
			 driver.findElement(By.id("username")).sendKeys(userName);
		     driver.findElement(By.id("password")).sendKeys(password);
		     
			 driver.capTest();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	
}
