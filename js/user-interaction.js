"use strict";

// TODO: Ask the user for their name.

var name = prompt ('Please Enter Your Name.');
 if (name === '') {
 	//       Keep asking if an empty input is provided.
 	prompt('Come on Pleaseeeeee.');
 }	else {
// TODO: Show an alert message that welcomes the user based on their input.
 		alert('Hello ' + name);
	 }
// TODO: Ask the user if they like pizza.
var confirmed =confirm('You like pizza?');
//       Based on their answer show a creative alert message.
	if (confirmed) {
		alert( name + ', I like pizza too.');
	} else {
		alert('But, pizza is so good.');
	}