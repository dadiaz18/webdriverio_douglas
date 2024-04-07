import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import assert from 'assert';

import ParfumPage from '../pageobjects/parfum/parfum.page.ts';
import ProductCardPage from '../pageobjects/parfum/product_card.page.ts';

Then(/^I validate the ParfumPage title$/, async () => {
    const title = (await ParfumPage.parfumPageTitle()).getText();
    expect(title).toHaveText('Parfüm & Düfte');
});

When(/^I click the "(.*)" dropdown$/, async (dropdown_name) => {
    let element;

    switch (dropdown_name) {
        case 'Produktart':
            element = await ParfumPage.produktartDropdown();
            break;
        case 'Marke':
            element = await ParfumPage.markeDropDown();
            break;
        case 'Für wen':
            element = await ParfumPage.furwenDropdown();
            break;
        case 'Geschenk für':
            element = await ParfumPage.geschenkDropdown();
            break;
    }

    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
});

When(/^I wait for the menu content to be visible$/, async () => {
    await ParfumPage.facetMenu().waitForExist();
    await ParfumPage.facetMenu().waitForDisplayed();
    assert.strictEqual(await ParfumPage.facetMenu().isDisplayed(), true);
});

When(/^I search for "(.*)" in the dropdown$/, async (val) => {
    await ParfumPage.facetSearch().waitForExist();
    await ParfumPage.facetSearch().waitForDisplayed();
    await ParfumPage.facetSearch().setValue(val);
});

When(/^I select the option "(.*)"$/, async (val) => {
    const options = await ParfumPage.facetOptions();
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const text = await option.getText();
        if (text === val) {
            await option.click();
            break;
        }
    }
});

//check the quantity of products in title
When(/^I validate the quantity of products in title with "(.*)"$/, async (val) => {
    try {
        const products_quantity = await ParfumPage.quantityOfProductsInTitle();
        const text = await products_quantity.getText();
        expect(text).toHaveText(val);
    }
    catch (error) {
        console.log('Error: ', error);
    }
});


Then(/^I validate the sales product card with the following values:$/, async (table) => {
    const valuesArray = table.hashes();
    const elements = await ParfumPage.getSaleProductCards();
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const card = new ProductCardPage(element);
        const values = valuesArray[i];
        const brand = await (await card.brandTitle()).getText();
        const name = await (await card.productName()).getText();
        const type = await (await card.productType()).getText();
        assert.strictEqual(brand, values['brand']);
        assert.strictEqual(name, values['product']);
        assert.strictEqual(type, values['type']);
    }
});


Then(/^I validate the new product card with the following values:$/, async (table) => {
    const valuesArray = table.hashes();
    const elements = await ParfumPage.getNueProductCards();
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const card = new ProductCardPage(element);
        const values = valuesArray[i];
        await card.cardContainer().scrollIntoView();
        const brand = await (await card.brandTitle()).getText();
        const name = await (await card.productName()).getText();
        const type = await (await card.productType()).getText();
        assert.strictEqual(brand, values['brand']);
        assert.strictEqual(name, values['product']);
        assert.strictEqual(type, values['type']);
    }
});