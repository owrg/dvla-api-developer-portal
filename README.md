# dvla-api-developer-portal
This repository contains code to prototype the possible External Developer API application form.

## The problem
The current External Developer API registration form for VES (https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/Register-For-VES-API.html) is:
- embarrasing
- causing issues with the team who action items in the dvlaapiaccess@dvla.gov.uk mailbox

Specifically there have been a number (currently an uknown amount) of emails with insufficient information in the requests.

## The possible solution
A prototype of the possible solution has been created here: https://dvla-api-developer-portal.herokuapp.com/v0/api/ves-application-01
It includes:
- a web form for capturing the required fields
- a confirmation screen to the requester
- a confirmation email to the requester
- an email request to DSST to action
- a mock screen of DSST actioning the request
- a confirmation email to the requester confirming completion

## Planned changes
There a number of changes that will be made in the near future:
- add requester email verification
- add character and email validation to the web form
