Feature: Health check


    I want to test application health
    @smoke
    Scenario: Application health check 
        Given I set "ping" api endpoint
        And I set "GET" api method
        And I set "application/json" api content type
        When I call the api endpoint
        Then I receive valid status code 201