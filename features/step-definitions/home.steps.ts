import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home/home.page.ts';

Given(/^I am on the HomePage page$/, async () => {
    await HomePage.open();
});

When(/^I reject all cookies$/, async () => {
    await HomePage.CookiesModalPage.modalBody().waitForExist();
    await HomePage.CookiesModalPage.modalBody().waitForDisplayed();
    await HomePage.CookiesModalPage.denyAllCookiesButton().click();
});


When(/^I accept all cookies$/, async () => {
    await HomePage.CookiesModalPage.modalBody().waitForExist();
    await HomePage.CookiesModalPage.modalBody().waitForDisplayed();
    await HomePage.CookiesModalPage.acceptAllCookiesButton().click();
});

When(/^I click on "(.*)" link in the navigation bar$/, async (val: string) => {
    let element: WebdriverIO.Element | undefined = undefined;
    switch (val) {
        case 'parfum':
            element = await HomePage.navBar.parfumOption();
            break;
    }
    if (!element) {
        throw new Error(`Element with text ${val} not found`);
    }

    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();

});

