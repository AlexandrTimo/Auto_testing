describe("webdriverunvivesity - contact us page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  it("valid submission - submit all information", async () => {
    await browser.url("/Contact-Us/contactus.html");
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

    const succesfulSubmission = $("#contact_reply > h1");
    await expect(succesfulSubmission).toHaveText("Thank You for your Message!");
    //await browser.pause(5000);
  });

  it.only("invalid submission - dont submit all information", async () => {
    await browser.url("/Contact-Us/contactus.html");
    //name
    const firstName = await $('//*[@name="first_name"]');
    //lastname
    const lastName = await $('//*[@name="last_name"]');
    //comments/message
    const message = await $('//*[@name="message"]');
    //submit button
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue("Alex");
    await lastName.setValue("Timo");
    await message.setValue("Hello! Welcome to WebDriver IO!");
    await submitButton.click();
    await browser.pause(5000);
  });
});
