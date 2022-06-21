package stepDefinations;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDefinition {
	
	
	 	@Given("^User is on NetBanking landing page$")
	    public void user_is_on_nebanking_landing_page() throws Throwable {
		 	//Main page landing
	 		System.out.println("Navigate to URL");
	    }

	    @When("^User login into application with username and password$")
	    public void user_login_into_application_with_username_and_password() throws Throwable {
	    	//Input login
	    	System.out.println("Accept Login and Password");
	    }

	    @Then("^Home page is populated$")
	    public void home_page_is_populated() throws Throwable {
	    	//Landing Account page (validation)
	    	System.out.println("Navigate Account URL");
	    }

	    @And("^Cards are dispalyed$")
	    public void cards_are_dispalyed() throws Throwable {
	    	//Validating and display cards
	    	System.out.println("Displayed card information");
	    }
}
