(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
var names = ['Thomas','Chiara','Josh','Nick'];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
	    //*****This is old code*********
	    // console.log(names[0]);
	    // console.log(names[1]);
	    // console.log(names[2]);
	    // console.log(names[3]);
	// TODO: Modify the code that logs the names array elements individually to instead use a for loop.
for (var n = 0; n < names.length; n++) {
	console.log(names[n]);
}
	//TODO: Below the for loop, use a forEach loop to print the names again.
names.forEach(function (element, index, array){
	console.log(index +" "+ element);
});

})();





