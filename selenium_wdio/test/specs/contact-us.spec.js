describe("webdriverunvivesity - contact us page", () => {
  // Avoid duplicating before use a hook
  beforeEach(async () => {
    // set via function wdio config file ->
    //await browser.maximizeWindow();
    //await browser.url("/Contact-Us/contactus.html");
    console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
  });
  // Avoid duplicating after use a hook
  afterEach(async () => {
    await browser.pause(5000);
  });
  it("valid submission - submit all information", async () => {
    const firstName = await $('//*[@name="first_name"]');
    const lastName = await $('//*[@name="last_name"]');
    const email = await $('//*[@name="email"]');
    const message = await $('//*[@name="message"]');
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue("Alexandr");
    await lastName.setValue("Timo");
    await email.setValue("atimo@gmail.com");
    await message.setValue("Hey, could you tell me what is life about?");
    await submitButton.click();

    const succesfulSubmission = $('#contact_reply > h1');
    await expect(succesfulSubmission).toHaveText('Thank You for your Message!');

    // expect -> as jest assertions 
    const succesfulSubmission2 = await $('#contact_reply > h1').getText();
    expect(succesfulSubmission2).toEqual('Thank You for your Message!');
    
  });

  it("invalid submission - dont submit all information", async () => {
    const firstName = await $('//*[@name="first_name"]');
    const lastName = await $('//*[@name="last_name"]');
    const message = await $('//*[@name="message"]');
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue("Alex");
    await lastName.setValue("Timo");
    await message.setValue("Hello! Welcome to WebDriver IO!");
    await submitButton.click();

    
    const successfulSubmission = $('body');
    await expect(successfulSubmission).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address']);
  });
});
