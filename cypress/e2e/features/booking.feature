Feature: Booking feature


    I want to test booking feature
    @functional
    Scenario: Get all booking ids
        Given I set "booking" api endpoint
        And I set "GET" api method
        And I set "application/json" api content type
        When I call the api endpoint
        Then I receive valid status code 200
        And I receive valid "booking/bookings.json" response schema
        And I receive valid content type "application/json"

