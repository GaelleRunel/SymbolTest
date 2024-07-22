# SymbolTest - ApologyBox

ApologyBox or "Excuses de Dev" in french, is a phrase generator to keep users waiting users.

## Technologies
The front is in React.Js
With a back Node.js

## Installation
### Prerequisites
* npm 10.7.0
* node 20.15.0

### Setup
To run this project, install it locally using npm:
```
$ npm install
$ npm start
```

And to start the front
```
$ cd ApologyBox
$ npm start
```
* The FRONT access is on your localhost:3000

* The BACK/ADMIN access is on your localhost:8080

## Description

The different routes : 

1- FRONT --- localhost:3000
* "/" => Main page "Les excuses de dev".
* "/lost" => Page displaying “i'm lost” with a gif in the center of the page. After 5 seconds
redirection to “/”.
* "*" => 404 error page.
* “/$http_code” => Page displaying message corresponding to http code.

2- BACK/ ADMIN --- localhost:8080
* "/api/list" => Page with the list of apologies
* "/api/new-apology" => Page with form to add an apology to the .json file (api)
