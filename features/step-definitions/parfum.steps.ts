import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import assert from 'assert';

import ParfumPage from '../pageobjects/parfum/parfum.page.ts';
import ProductCardPage from '../pageobjects/parfum/product_card.page.ts';

Then(/^I validate the ParfumPage title$/, async () => {
    const title = (await ParfumPage.parfumPageTitle()).getText();
    expect(title).toHaveText('Parfüm & Düfte');
});

Then(/^I see the list of products$/, async () => {
    await ParfumPage.gridOfProducts().waitForExist();
    await ParfumPage.gridOfProducts().waitForDisplayed();
    assert.strictEqual(await ParfumPage.gridOfProducts().isDisplayed(), true);
});


Then(/^I validate the selected filters with the following values:$/, async (table: DataTable) => {
    const valuesArray = table.hashes();
    const elements = await ParfumPage.selectedFacets();
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const text = await element.getText();
        assert.strictEqual(text, valuesArray[i]['value']);
    }
});

When(/^I click the "(.*)" dropdown$/, async (dropdown_name) => {
    let element: WebdriverIO.Element | undefined = undefined;

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
        case 'Highlights':
            element = await ParfumPage.highlightsDropdown();
            break;  
    }

    if (element) {
        await element.waitForExist();
        await element.waitForDisplayed();
        await element.click();
    }
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

When(/^I wait for loader doesn't exist$/, async () => {
    await ParfumPage.pageLoader().waitForExist({ reverse: true });
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

When(/^I close the dropdown$/, async () => {
    await ParfumPage.facetCloseButton().waitForExist();
    await ParfumPage.facetCloseButton().waitForDisplayed();
    await ParfumPage.facetCloseButton().click();
});

//check the quantity of products in title
When(/^I validate the quantity of products in title with "(.*)"$/, async (val: string) => {
    const products_quantity = await ParfumPage.quantityOfProductsInTitle();
    const text = await products_quantity.getText();
    expect(text).toHaveText(val);
});


//I validate the list of products with the following values
Then(/^I validate the list of products with the following values:$/, async (table: DataTable) => {
    const valuesArray = table.hashes();
    const elements = await ParfumPage.getProducts();
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const card = new ProductCardPage(element);
        const values = valuesArray[i];
        await card.cardContainer().scrollIntoView();
        if (values['brand']) {
            const brand = await (await card.brandTitle()).getText();
            assert.strictEqual(brand, values['brand']);
        }
        if (values['product']) {
            const name = await (await card.productName()).getText();
            assert.strictEqual(name, values['product']);
        }
        if (values['type']) {
            const type = await (await card.productType()).getText();
            assert.strictEqual(type, values['type']);
        }
        if (values['category']) {
            const category = await (await card.productCategory()).getText();
            assert.strictEqual(category, values['category']);
        }
    }
});
