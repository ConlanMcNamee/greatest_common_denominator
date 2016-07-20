var gcd = require('./greatest_common_divisor.js');

//this is a problem i discovered on Code Wars
//it uses the greatest common divisor algorithm along with
//some other needed code.
//the problem is two people run at differnt speeds
//what is the least amount of laps each will need to run
//to finish at the same place.

function leastLaps(x, y) {
  //we multiply our two numbers together then divide by
  //the greatest common divisor
  //lets assume our numbers is in miles
  var numberOfMilesNeededToRun = (x * y) / gcd(x,y);

  //once we have our the lowest number miles each person needs to run
  //you divide that number by how long their laps take 
  return [numberOfMilesNeededToRun / x, numberOfMilesNeededToRun / y ]
}

console.log(leastLaps(65,5));
