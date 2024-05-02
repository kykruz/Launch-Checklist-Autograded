// Write your helper functions here!

require('cross-fetch/polyfill');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    let planetInfo = '';
    planetInfo +=
        `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${name}</li>
               <li>Diameter: ${diameter}</li>
               <li>Star: ${star}</li>
               <li>Distance from Earth: ${distance}</li>
               <li>Number of Moons: ${moons}</li>
            </ol>
            <img src=${imageUrl}>`

    missionTarget.innerHTML = planetInfo
}
function validateInput(testInput) {
    console.log(testInput)
    if (testInput === "") {
        console.log('empty')
        return "Empty"
    }
    if (Number(testInput)) {
        console.log('num')
        return "Is a Number"
    }
    if (isNaN(testInput)) {
        console.log('not num')
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus')
    let launchStatus = document.getElementById('launchStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus')
    

    let ready = true;

    if (validateInput(copilot) === 'Empty' || validateInput(pilot) === 'Empty'
        || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {

        alert('All fields are required!');
        return
    }

    if (validateInput(copilot) === 'Is a Number' || validateInput(pilot) === 'Is a Number'
        || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {

        alert('Make sure to enter valid information for each field!');
        return
    }

    else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            ready = false;
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }

        if (cargoLevel > 10000) {
            ready = false;
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }

        if (ready) {
            list.style.visibility = 'visible';
            launchStatus.style.color = 'green';
            launchStatus.innerHTML = 'Shuttle is Ready for Launch';

        } else {
            list.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        }

    }

}


async function myFetch() {
    let planetsReturned;

    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await response.json();

    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.round(Math.random() * (planets.length - 1));
    let results = planets[random];
    return results
}




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;