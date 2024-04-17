Feature: Auth-Token


    I want to test Auth-CreateToken api
    @smoke
    Scenario: Create a authentication token using valid user credential
        Given I set "auth" api endpoint
        And I set "POST" api method
        And I set "auth/validuser.json" api payload
        And I set "application/json" api content type
        When I call the api endpoint
        Then I receive valid status code 200
        And I receive valid "auth/validtoken.json" response schema
        And I receive valid content type "application/json"
    @smoke
        Scenario: Create a authentication token using invalid user credential
        Given I set "auth" api endpoint
        And I set "POST" api method
        And I set "auth/invaliduser.json" api payload
        And I set "application/json" api content type
        When I call the api endpoint
        Then I receive valid status code 200
        And I receive valid "auth/invaliduser.json" response schema
        And I receive "Bad credentials" as "reason" property value

        