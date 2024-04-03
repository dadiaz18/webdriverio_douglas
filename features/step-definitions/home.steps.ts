import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import HomePage from '../pageobjects/home.page';

Given(/^I am on the HomePage page$/, async () => {
    await HomePage.open();
});


