
stepDefinition.exports = function () {

  this.Given(/^User is on NeBanking landing page$/, function (callback) {
	console.log("Navigate to NetBanking URL");
  });

  this.When(/^User login into application with username and password$/, function (callback) {
    console.log("Accept Login and Password");
  });

  this.Then(/^Home page is populated$/, function (callback) {
    console.log("Navigate Account URL");
  });
  	// Username and password -> value
    this.When(/^User login into application with username \"([^\"]*)\" and password \"([^\"]*)\"$/, function (arg1, arg2, callback) {
    
    const username = await $('#text');
    const password = await $('#password');

    await username.setValue("arg1");
    await password.setValue("arg2");   
    
    console.log(arg1);
    console.log(arg2);
  });

	this.And(/^Cards dispalyed are \"([^\"]*)\"$/, function (arg, callback) {
    console.log(arg);
  });
  
  this.When(/^User login into application with username (.+) and password (.+)$/, function (username, password, callback) {
    console.log(`${username} and ${password}`);
  });

};