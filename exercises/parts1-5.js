"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
let kilometersToMars = 225000000;
let kilometersToTheMoon = 384400;
// Part 2: Print Days to Mars
/*let milesToMars: number=(kilometersToMars*milesPerKilometer);
let hoursToMars: number=(milesToMars/speedMph);
let daysToMars: number=(hoursToMars/24);*/
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
/*console.log(`It will take ${spacecraftName} ${daysToMars} to reach Mars.`)
console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} to reach the Moon`)*/
// Part 4: Create a Spacecraft Class
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        let milesAway = (kilometersAway * this.milesPerKilometer);
        let hoursToLocation = (milesAway / this.speedMph);
        let daysToLocation = (hoursToLocation / 24);
        return daysToLocation;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} to reach the Moon`)
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
