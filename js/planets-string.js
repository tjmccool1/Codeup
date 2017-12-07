(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);
    console.log('---- ---- ---- ----');

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var br = document.createElement('br');
    //var br = document.getElementById('br');
    var planetsString = planetsArray.join(br);
    console.log(planetsString);
    console.log('---- ---- ---- ----');


    var planetsString = planetsArray.join('\n');
    console.log(planetsString);
    console.log('---- ---- ---- ----');

    planetsString = planetsString.split('\n').join('<br>');
    console.log(planetsString);
    console.log('---- ---- ---- ----');

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    
})();
