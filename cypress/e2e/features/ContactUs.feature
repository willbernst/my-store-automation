Feature: Contact Us page to My Store website

    As a user I want to contact the My Store team
    
    Scenario: Message sent successfully without being a logged in user
        Given I am a user wanting to contact the site team
        When I click on Contact Us buttton
        Then I should be redirected to the contact us page
        Then I see the site info block
        Then I see the contact form
        When I set a subject
        When I correctly fill in the email
        When I upload the file to contact
        When I fill in the message field
        Then I click on Send button
        Then I should receive a shipping confirmation message

    Scenario: Message not sent due to invalid email
        Given I am a user wanting to contact the site team
        When I click on Contact Us buttton
        Then I should be redirected to the contact us page
        When I do not fill in the email correctly
        Then I click on Send button
        Then I should receive a message stating that I entered the email incorrectly

    Scenario: Message not sent due to blank message field
        Given I am a user wanting to contact the site team
        When I click on Contact Us buttton
        Then I should be redirected to the contact us page
        When I correctly fill in the email
        When I do not fill in the message field
        Then I click on Send button
        Then I should recieve a message that the message field cannot be blank
@focus         
    Scenario: Message not sent because the email was not entered correctly, missing @
        Given I am a user wanting to contact the site team
        When I click on Contact Us buttton
        Then I should be redirected to the contact us page
        When I fill in the email field without @
        Then I click on Send button
        Then I see the message informing the filling error