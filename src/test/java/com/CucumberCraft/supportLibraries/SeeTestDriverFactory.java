/*
 * package com.CucumberCraft.supportLibraries;
 * 
 * import org.apache.log4j.Logger; import org.openqa.selenium.WebDriver; import
 * com.experitest.client.Client; import com.experitest.selenium.MobileWebDriver;
 * 
 * public class SeeTestDriverFactory {
 * 
 * public static Client client; static Logger log =
 * Logger.getLogger(SauceLabsDriverFactory.class);
 * 
 * private SeeTestDriverFactory() {
 * 
 * }
 * 
 *//**
	 * Function to return the appropriate {@link WebDriver} object based on the
	 * parameters passed
	 * 
	 * @param iosWebAppName
	 * @param androidWebAppName
	 * 
	 * @param browser           The {@link MobilePlatform} to be used for the test
	 *                          execution
	 * @return The corresponding {@link WebDriver} object
	 *//*
		 * public static MobileWebDriver getSeeTestDriver(String host, int port, String
		 * projectBaseDirectory, String reportFormat, String reportDirectory, String
		 * testName, MobileExecutionPlatform executionPlatform, String AndroidAppName,
		 * String iOSAppName, String androidWebAppName, String iosWebAppName, String
		 * deviceName) { MobileWebDriver driver = null; try {
		 * 
		 * driver = new MobileWebDriver(host, port, projectBaseDirectory, reportFormat,
		 * reportDirectory, testName); client = driver.client; String androidPrefix =
		 * "adb:" + deviceName; String iosPrefix = "ios_app:" + deviceName; switch
		 * (executionPlatform) { case ANDROID: // client.setDevice(androidPrefix);
		 * driver.setDevice(androidPrefix);
		 * driver.application(AndroidAppName).launch(true, true); break; case IOS: //
		 * client.setDevice(iosPrefix); driver.setDevice(iosPrefix);
		 * driver.application(iOSAppName).launch(true, true); break; case WEB_ANDROID:
		 * driver.setDevice(androidPrefix); driver.application("chrome:" +
		 * androidWebAppName).launch(false, true); break; case WEB_IOS: // yet to
		 * implement driver.setDevice(iosPrefix); driver.application("safari:" +
		 * iosWebAppName).launch(true, true); break; default: throw new
		 * Exception("Unhandled Execution Mode!"); } } catch (Exception ex) {
		 * ex.printStackTrace(); log.error(ex.getMessage()); }
		 * 
		 * return driver; }
		 * 
		 * }
		 */