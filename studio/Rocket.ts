import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems:[];
    astronauts:[]

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg  
    }
    sumMass( items: Payload[] ){
        for (let i = 0; i < this.cargoItems.length; i++) {
           let weight = 0;
            const itemsSum = (weight+=i);
            return itemsSum 
            }
    };
    
    currentMassKg(): number;
    canAdd(item: Payload): boolean;
    addCargo(cargo: Cargo): boolean;
    addAstronaut(astronaut: Astronaut): boolean

}