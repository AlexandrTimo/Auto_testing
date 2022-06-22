#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template


Feature: Application login


  Scenario: Home page default login
    Given User is on NetBanking landing page
    When User login in to application with username "Alex" and password "97189"
    Then Home page is populated
    And Cards dispalyed are "true"

  Scenario: Home page default login
    Given User is on NetBanking landing page
    When User login in to application with username "John" and password "1546"
    Then Home page is populated
    And Cards dispalyed are "false"
    
  Scenario: Home page default login
    Given User is on NetBanking landing page
    When User sign up with following details
    | atimo | 1414 | atimo@gmail.com | San Jose, CA | +1 (408)234-4887 |
    Then Home page is populated
    And Cards dispalyed are "false"
    
  Scenario Outline: Home page default login
    Given User is on NetBanking landing page
    When User login into application with username <username> and password <password>
    Then Home page is populated
    And Cards dispalyed are "true"
    
    Examples:
    | username | password |
    | user1     | pass1    |
    | user2     | pass2    |
    | user3     | pass3    |
    | user4     | pass4    | 
    
    
    
    
    