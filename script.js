// Write your JavaScript code here!



// const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets)

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
        
    })
    const form = document.getElementById('launchForm')
    
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let list = document.getElementById('faultyItems');
       
        let pilotName = document.querySelector('input[name=pilotName]').value;
        // let pilotName = pilotInput.value
        let copilotName = document.querySelector('input[name=copilotName]').value;
        let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        let cargoMass = document.querySelector('input[name=cargoMass]').value;
        console.log(pilotName, copilotName, fuelLevel, cargoMass)
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass,)
    })

});