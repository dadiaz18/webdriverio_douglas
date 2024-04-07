import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

//I pause for 5 seconds step, but dynamic
When(/^I pause for (\d+) seconds$/, async (val: number) => {
    await browser.pause(val*1000);
});

When(/^I click at the corner of the screen$/, async () => {
    await browser.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'mouse' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 0, y: 0 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }
    ]);
});

//wait until page loaded
When(/^I wait until the page is loaded$/, async () => {
    await browser.waitUntil(async () => {
        return await browser.execute(() => {
            return document.readyState === 'complete';
        });
    });
});


// I reload the page
When(/^I reload the page$/, async () => {
    await browser.refresh();
});