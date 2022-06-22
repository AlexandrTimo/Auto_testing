package stepDefinations;

import java.util.List;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDefinition {
	
	
	 	@Given("^User is on NetBanking landing page$")
	    public void user_is_on_nebanking_landing_page() throws Throwable {
		 	//Main page landing
	 		System.out.println("Navigate to NetBanking URL");
	    }

	    @When("^User login into application with username and password$")
	    public void user_login_into_application_with_username_and_password() throws Throwable {
	    	//Input login
	    	System.out.println("Accept Login and Password");
	    }
	    
	    // Username and password -> value
	    @When("^User login in to application with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_login_in_to_application_with_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
	    	System.out.println("-- Scenario #1 --");
	    	System.out.println("[Two Arguments]");
	        System.out.println(strArg1);
	        System.out.println(strArg2);
	    }

	    @Then("^Home page is populated$")
	    public void home_page_is_populated() throws Throwable {
	    	//Landing Account page (validation)
	    	System.out.println("Navigate Account URL");
	    }

	    @And("Cards dispalyed are {string}")
	    public void cards_not_dispalyed_are(String arg) {
	   	    // Write code here that turns the phrase above into concrete actions
	   	    System.out.println(arg);
	   	}

	    //Pipeline data table
	    @When("^User sign up with following details$")
	    public void user_sign_up_with_following_details(DataTable data) throws Throwable {
	    	// Converting type 'datatable' to list string
	    	// -> to get each row and column
	    	List<List<String>> obj = data.asLists();
	    	System.out.println("-- Scenario #2 --");
	    	System.out.println("[Mutiple Arguments(DataTable)]");
	    	System.out.println(obj.get(0).get(0));
	    	System.out.println(obj.get(0).get(1));
	    	System.out.println(obj.get(0).get(2));
	    	System.out.println(obj.get(0).get(3));
	    	System.out.println(obj.get(0).get(4));
	    }
	    
	    @When("^User login into application with username (.+) and password (.+)$")
	    public void user_login_into_application_with_username_and_password(String username, String password) throws Throwable {
	    	System.out.println("-- Scenario #3 --");
	    	System.out.println("[Parameterization(Repeat request)]");
	    	System.out.println(username + " and " + password);
    	}

}
