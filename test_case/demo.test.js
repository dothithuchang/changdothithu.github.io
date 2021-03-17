const config = require('config');
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');


describe('/LOGIN FUNCTION', () => {

    var driver;
    beforeEach(async () => {

        let chromeOption = new Options();
        chromeOption.excludeSwitches('enable-logging');
        chromeOption.addArguments("--incognito");
        chromeOption.addArguments("--start-maximized");
        chromeOption.addArguments('--no-sandbox');

        driver = await new Builder().forBrowser('chrome')
            .setChromeOptions(chromeOption)
            .build();
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('Check login function', async () => {
        await driver.get('https://viblo.asia/p/selenium-webdriver-va-nodejs-vyDZO7JxZwj');
        let currentURL = await driver.getCurrentUrl();
        console.log(currentURL);
        assert.equal(currentURL, 'https://viblo.asia/p/selenium-webdriver-va-nodejs-vyDZO7JxZwj');
    });
})