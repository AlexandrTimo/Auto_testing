describe('wait commands - examples', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url("/Ajax-Loader/index.html");
    });
    afterEach(async () => {
        await browser.pause(1500);
    });
    // Pause command example
    it ('pause command', async () => {
        const clickButton = await $('//*[text()="CLICK ME!"]/..');

        await browser.pause(5000);
        await clickButton.click();
    });
    // waitForClickable command example
    it ('waitForClickable', async () => {
        const clickButton = await $('#button1');
        //await clickButton.waitForClickable({timeout: 3000}); // failed - element ("#button1") still not clickable after 3000ms
        await clickButton.waitForClickable();
        await clickButton.click();
    });
    // waitForDisplayed command example
    it ('waitForDisplayed', async () => {
        const clickButton = await $('#button1');
        await clickButton.waitForDisplayed();
        await clickButton.click();
    });
    // waitForExist command example 
    it ('waitForExist', async () => {
        const clickButton = await $('#button1');
        await clickButton.waitForExist();
        //await clickButton.click(); // click method will fail - (element not interactable), coz it doesn't work with method 'waitForExist'(read description)
    });
    // waitUntil command example on "/Accordion/index.html" - Loading status
    it ('waitUntil', async () => {
        await browser.url("/Accordion/index.html");
        const loadingStatusUI = await $('#text-appear-box');

        await loadingStatusUI.waitUntil(async function(){
            return (await this.getText()) === 'LOADING COMPLETE.'
        },
        {
            timeout: 15000,
            timeoutMsg: 'expected text to be different after 15 seconds.'
        })
    });
});