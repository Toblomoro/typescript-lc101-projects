import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg  
    }
   sumMass( items: Payload[] ): number {
        let weight:number = 0;
        items.forEach(element => {
            weight+=element.massKg
            
        });
        return weight
    };
    /*sumMass( items: Payload[] ): number {
        let total: number = 0
        items.forEach(item => {
            total += item.massKg
        })
        return total
    }*/
    
    currentMassKg(): number {
       const mass= this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
       return mass
        };
    canAdd(item: Payload): boolean {
       if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        return true
       }else return false

    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)==true) {
         return true  
            
        } else return false
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)==true) {
           return true
            
        } else return false
      
    }

}