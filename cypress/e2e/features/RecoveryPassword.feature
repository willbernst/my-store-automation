Feature: Forgot my password

    As a previously registered user, if I have forgotten
    my password, I would like to recover it.

    Scenario: Access the I forgot my password screen, and validate components
        Given That I want to login to the website, I access the login page
        When I no longer remember my password, I click on Forgot your password link
        When I access the password recovery screen
        When I see the card with password recovery information
        Then I see and the field to fill in the email to receive the recovery link

    Scenario: Requesting link to reset password
        Given I access the recovery page
        When I type my account email
        When I click on the SEND RESET LINK button
        Then I should see the password recovery link success message if my email is in the database

    Scenario: The reset Link was not sent because the email format is invalid
        Given I access the recovery page
        When I type an email with the wrong format
        When I click on the SEND RESET LINK button
        Then I should see the message saying that the email format is wrong