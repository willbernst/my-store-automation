Feature: Register to My Store website

    As a user who has not yet registered,
    I would like to register on the platform

    Scenario: Accessing the registration page
        Given I am a user wanting to register
        When I access the login page
        When I click on the create account button
        Then I should be redirected to the register page


    Scenario: Registration done successfully
        Given I access the registration page
        When I see the registration form
        When I enter a firstname
        When I enter a lastname
        When I enter a valid email
        When I enter a valid password
        When I enter a valid birthdate
        When I check the offers checkbox
        When I check the newsletter checkbox
        When I check the terms policy checkbox
        Then I click on the register button
        Then I should be redirected to the home page
        
    
    Scenario: Unsuccessful registration