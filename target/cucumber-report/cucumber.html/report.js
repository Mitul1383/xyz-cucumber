$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/resources/featurefile/bankmanagercustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Bank manager Add customer successfully",
  "description": "As a user  I want to visit xyz bank website",
  "id": "bank-manager-add-customer-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15230639400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify manager should add customer successfully",
  "description": "",
  "id": "bank-manager-add-customer-successfully;verify-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter first name \"Hermoine\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter last name \"Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter postcode \"E859AC\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "System should display popup message Click on ok button on pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "System shows customer added successfully message",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1435210100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 648068000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 378108400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine",
      "offset": 20
    }
  ],
  "location": "BankManagerAndCustomer.iEnterFirstName(String)"
});
formatter.result({
  "duration": 465355500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Granger",
      "offset": 19
    }
  ],
  "location": "BankManagerAndCustomer.iEnterLastName(String)"
});
formatter.result({
  "duration": 226151300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E859AC",
      "offset": 18
    }
  ],
  "location": "BankManagerAndCustomer.iEnterPostcode(String)"
});
formatter.result({
  "duration": 192973800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 338995800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.systemShouldDisplayPopupMessageClickOnOkButtonOnPop()"
});
formatter.result({
  "duration": 149199700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.systemShowsCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.after({
  "duration": 193700,
  "status": "passed"
});
formatter.before({
  "duration": 11442460100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify bank manager should open account successfully",
  "description": "",
  "id": "bank-manager-add-customer-successfully;verify-bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click On bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on open account button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select customer first name",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on selected currency button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select currency as pound",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see message account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 5456900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1144943300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 66100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iSelectCustomerFirstName()"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnSelectedCurrencyButton()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iSelectCurrencyAsPound()"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnProcessButton()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iCanSeeMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 1664013900,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UURKDTI\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Mitul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61382}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b1ca33d20e107545ad9e90f359d374f4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat com.bank.cucumber.stepdefs.BankManagerAndCustomer.iCanSeeMessageAccountCreatedSuccessfully(BankManagerAndCustomer.java:94)\r\n\tat ✽.Then I can see message account created successfully(src/test/java/com/bank/resources/featurefile/bankmanagercustomer.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 7918157200,
  "status": "passed"
});
formatter.before({
  "duration": 12007715700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify customer should login and logout successfully",
  "description": "",
  "id": "bank-manager-add-customer-successfully;verify-customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on to search your name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click select name",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be login successfully and displayed logout message",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on logout tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see displayed your name",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 8850000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 886986400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnToSearchYourName()"
});
formatter.result({
  "duration": 1353790600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickSelectName()"
});
formatter.result({
  "duration": 20065261900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/select\\[\\@id\\\u003d\\\u0027userSelect\\\u0027\\]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UURKDTI\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Mitul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8552729b272d02cc571f30c1f6bb7932\n*** Element info: {Using\u003did, value\u003d//select[@id\u003d\u0027userSelect\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:43)\r\n\tat com.bank.pages.CustomerPage.clickOnSelectName(CustomerPage.java:33)\r\n\tat com.bank.cucumber.stepdefs.BankManagerAndCustomer.iClickSelectName(BankManagerAndCustomer.java:111)\r\n\tat ✽.When I click select name(src/test/java/com/bank/resources/featurefile/bankmanagercustomer.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankManagerAndCustomer.iShouldBeLoginSuccessfullyAndDisplayedLogoutMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLogoutTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankManagerAndCustomer.iShouldSeeDisplayedYourName()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1752738900,
  "status": "passed"
});
formatter.uri("src/test/java/com/bank/resources/featurefile/customerdepositwithdrawdelete.feature");
formatter.feature({
  "line": 1,
  "name": "Customer deposit money withdrawal money delete account functionality",
  "description": "As a user\r\nI want to visit xyz bank website",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11357761700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify customer should deposit money successfully",
  "description": "",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality;verify-customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search customer that is created",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select searched customer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter amount \"100\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see deposit amount successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 4607400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 11175078600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSearchCustomerThatIsCreated()"
});
formatter.result({
  "duration": 216841700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSelectSearchedCustomer()"
});
formatter.result({
  "duration": 20178365700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/select\\[\\@id\\\u003d\\\u0027userSelect\\\u0027\\]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UURKDTI\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Mitul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61488}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a1750aaad076445da0572402fa28dfe1\n*** Element info: {Using\u003did, value\u003d//select[@id\u003d\u0027userSelect\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:43)\r\n\tat com.bank.pages.CustomerPage.clickOnSelectName(CustomerPage.java:33)\r\n\tat com.bank.cucumber.stepdefs.CustomerDepositWithdrawDelete.iSelectSearchedCustomer(CustomerDepositWithdrawDelete.java:42)\r\n\tat ✽.And I select searched customer(src/test/java/com/bank/resources/featurefile/customerdepositwithdrawdelete.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnDepositButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "CustomerDepositWithdrawDelete.iEnterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnDepositButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iShouldSeeDepositAmountSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2404305100,
  "status": "passed"
});
formatter.before({
  "duration": 11614159200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify customer should withdraw money successfully",
  "description": "",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality;verify-customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search customer that is created",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select searched customer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter amount \"50\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I customer should withdrawal amount successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 3240400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 896295000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSearchCustomerThatIsCreated()"
});
formatter.result({
  "duration": 1415295700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSelectSearchedCustomer()"
});
formatter.result({
  "duration": 20089255900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/select\\[\\@id\\\u003d\\\u0027userSelect\\\u0027\\]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UURKDTI\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Mitul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61669}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7b9b6d47d02f151c7a2182e9fae82726\n*** Element info: {Using\u003did, value\u003d//select[@id\u003d\u0027userSelect\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:43)\r\n\tat com.bank.pages.CustomerPage.clickOnSelectName(CustomerPage.java:33)\r\n\tat com.bank.cucumber.stepdefs.CustomerDepositWithdrawDelete.iSelectSearchedCustomer(CustomerDepositWithdrawDelete.java:42)\r\n\tat ✽.And I select searched customer(src/test/java/com/bank/resources/featurefile/customerdepositwithdrawdelete.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnWithdrawalButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "CustomerDepositWithdrawDelete.iEnterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnWithdrawalButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iCustomerShouldWithdrawalAmountSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2020315900,
  "status": "passed"
});
formatter.before({
  "duration": 11134902400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify bank manager should delete customer account successfully",
  "description": "",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality;verify-bank-manager-should-delete-customer-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on bank manager login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on customer button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on searched customer",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click select name \"Hermoine\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on delete customer button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should delete customer successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 2737700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 747598900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnCustomerButton()"
});
formatter.result({
  "duration": 445612900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnSearchedCustomer()"
});
formatter.result({
  "duration": 1175221600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine",
      "offset": 21
    }
  ],
  "location": "CustomerDepositWithdrawDelete.iClickSelectName(String)"
});
formatter.result({
  "duration": 157680300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnDeleteCustomerButton()"
});
formatter.result({
  "duration": 283576800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iShouldDeleteCustomerSuccessfully()"
});
formatter.result({
  "duration": 35700,
  "status": "passed"
});
formatter.after({
  "duration": 341100,
  "status": "passed"
});
});