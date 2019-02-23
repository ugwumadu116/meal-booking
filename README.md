# Meal-booking
This is an Ecommerce web app, where you can book an meal and have it delivered to you!


[![Build Status](https://travis-ci.com/ugwumadu116/meal-booking.svg?branch=develop)](https://travis-ci.com/ugwumadu116/meal-booking)
[![Coverage Status](https://coveralls.io/repos/github/ugwumadu116/meal-booking/badge.svg?branch=develop)](https://coveralls.io/github/ugwumadu116/meal-booking?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/f949e3c7d0af936134c9/maintainability)](https://codeclimate.com/github/ugwumadu116/meal-booking/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f949e3c7d0af936134c9/test_coverage)](https://codeclimate.com/github/ugwumadu116/meal-booking/test_coverage)

## Getting Started
Clone the Repo.
-------------
https://github.com/ugwumadu116/meal-booking.git

## Prerequisites
* Node v10.15.0 or above
* Npm v6.4 or above

## Endpoints
<table>
<tr>
    <th>HTTP VERB</th>
	<th>ENDPOINT</th>
	<th>FUNCTIONALITY</th>
</tr>
<tr>
	<td>GET</td>
	<td>api/v1/meals/</td> 
	<td>Caterers can get all meals options they uploaded</td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/meals/</td> 
	<td>Catereres can add meal options linked to their account</td>
</tr>
<tr>
	<td>PUT</td>
	<td>api/vi/meals/:mealId</td> 
	<td>Caterers can update their meal options</td>
</tr>
<tr>
	<td>DELETE</td>
	<td>api/v1/meals/:mealId</td> 
	<td>Caterers can delete their meal options</td>
</tr>
<tr>
	<td>GET</td>
	<td>api/v1/menu/</td> 
	<td>Caterers and Users can Get the menu for the day </td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/menu/</td> 
	<td>Caterers can Set a menu for the day</td>
</tr>
<tr>
	<td>GET</td>
	<td>api/v1/orders</td> 
	<td>Get All Orders</td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/orders</td> 
	<td>Users can make orders</td>
</tr>
<tr>
	<td>PUT</td>
	<td>api/v1/orders/:orderId</td> 
	<td>Users can modify their orders</td>
</tr>
</table>

## Installation
**On your Local Machine**
- Pull the [develop](https://github.com/ugwumadu116/meal-booking.git) branch off this repository
- Run `npm install` to install all dependencies
- Run npm start to start the app
- Access endpoints on **localhost:3000**
## Running the tests
Run `npm test` in the terminal for the cloned folder.
## Built With
* [Node.js](http://www.nodejs.org/) - Runtime-Enviroment


## GitHub Pages
URL: https://ugwumadu116.github.io/meal-booking/index.html

## Pivotal Tracker board
URL:  https://www.pivotaltracker.com/n/projects/2243153

## Authors
* **Ugwumadu Joel**