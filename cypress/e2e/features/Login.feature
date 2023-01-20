Feature: Login to My Store website

    As a previously registered user, 
    I would like to login 
    to access my account

    Scenario: Login Successfully
        Given I access the main page of the my store website
        When I access the login page
        When I enter a valid email and password and click on Sign In button
        Then I must check the name "William Dewes" as login user validation

    Scenario: Unsuccessful Login
        Given I access the main page of the my store website
        When I access the login page
        When I enter a invalid email and passowrd and click on Sign In button
        Then I must be warned about my wrong credentials