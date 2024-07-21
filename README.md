# SymbolTest - ApologyBox

ApologyBox or "Excuses de Dev" in french, is a phrase generator to keep users waiting users.

## Technologies
The front is in React.Js
With a back Node.js

## Installation
### Prerequisite
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

## Description

The different routes : :
* "/" => Main page "Les excuses de dev".
* "/lost" => Page displaying “i'm lost” with a gif in the center of the page. After 5 seconds
redirection to “/”.
* "*" => 404 error page.
* “/$http_code” => Page displaying message corresponding to http code.
