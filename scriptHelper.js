// Write your helper functions here!

require('cross-fetch/polyfill');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

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
            <img src="${imageUrl}">`

    missionTarget.innerHTML = planetInfo
}
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    }
    if (Number(testInput)) {
        return "Is a Number"
    }
    if (isNaN(testInput) === true) {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    
    let ready = true;

    if (validateInput(copilot.value) === 'Empty' || validateInput(pilot.value) === 'Empty'
        || validateInput(fuelLevel.value) === 'Empty' || validateInput(cargoLevel.value) === 'Empty') {

        alert('All fields are required!');
        return
    }

    if (validateInput(copilot.value) === 'Is a Number' || validateInput(pilot.value) === 'Is a Number'
        || validateInput(fuelLevel.value) === 'Not a Number' || validateInput(cargoLevel.value) === 'Not a Number') {

        alert('Make sure to enter valid information for each field!');
        return
    }

    else {
        pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;

        if (fuelLevel.value < 10000) {
            ready = false;
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }

        if (cargoLevel.value > 10000) {
            ready = false;
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }

        if (ready) {
            list.style.visibility = 'visible';
            launchStatus.style.color = 'green';
            launchStatus.innerHTML = 'Shuttle is ready for launch';

        } else {
            list.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
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