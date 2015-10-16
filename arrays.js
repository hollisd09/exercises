







var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
var el = document.getElementById("planets");
planets.forEach(function(currentPlanet) {
	el.innerHTML += "<planets>" + currentPlanet + " " + "</planets>";
});



// Use the map method to create a new array where the first letter of each planet is capitalized
var newPlanets = planets.map(function(currentPlanet) {
	var firstLetter = currentPlanet.split("")[0].toUpperCase();
	return firstLetter + currentPlanet.slice(1);
});
console.log("newPlanets", newPlanets);


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function (prev, curr) {
	return prev + " " + curr;
});
console.log("sentence", sentence + ".");

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(currentPlanet) {
	return currentPlanet.indexOf("e") > -1;
});
console.log("ePlanets", ePlanets);



/* indexOf("e") > -1; */
/**/