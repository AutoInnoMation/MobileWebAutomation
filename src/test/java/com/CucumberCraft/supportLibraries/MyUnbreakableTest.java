package com.CucumberCraft.supportLibraries;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeMethod;
import java.nio.file.Paths;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import de.retest.web.RecheckWebImpl;
import de.retest.web.selenium.By;
import de.retest.web.selenium.RecheckDriver;

public class MyUnbreakableTest {
	private RecheckDriver driver;
	private RecheckWebImpl re;

	    @BeforeMethod
		public void setup() {
	    	System.setProperty("webdriver.chrome.driver", "C:\\Workspace\\EggPlant_BDD\\Chrome V87\\chromedriver.exe");
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--window-size=1280,720");
	        driver = new RecheckDriver( new ChromeDriver(options) );
	    }

	    @Test
	    public void check_order() throws Exception {
	        driver.startTest();
	        String url = Paths.get( "src/test/resources/index.html" ).toUri().toURL().toString();
	        driver.get(url);
	        driver.findElement(By.id("email")).sendKeys("a@gmail.com");
	        driver.findElement(By.id("password")).sendKeys("16");
	        //driver.findElement(By.name("login")).submit();

	        driver.capTest();
	    }

	    @AfterMethod
		public void tearDown() {
	        driver.quit();
	    }
}
