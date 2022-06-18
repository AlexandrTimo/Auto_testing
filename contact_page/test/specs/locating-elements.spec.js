describe('locating elements', () => {
    beforeEach( async() => {
        await browser.maximizeWindow();
        await browser.url("https://selectors.webdriveruniversity.com/");
    });

    // Locating single Element
    it('$ - locate element', async() => {
        await browser.$('//a[@href="#portfolio"]').click();

        const webdriverElement = await $('[data-target="#portfolioModal1"]');
        const actualResult = await webdriverElement.click();
        await browser.pause(3000);
    });

    // Locating multiple Elements (Array)
    it('$$ - locate elements in table', async() => {
        const expectTitles = ["#","First","Last","Handle","1","2","3","Firstname","Lastname","Age"];
        const actualTitles = [];
        const tableHeaderTitles = await $$('//table//th');
        for (const title of tableHeaderTitles){
            actualTitles.push(await title.getText());
            //console.log(await title.getText());
        }
        expect(expectTitles).toEqual(actualTitles);
    });
});