import { Cargo } from "./Cargo";
import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload {
    // properties and methods
    massKg: number;
    totalCapacityKg: number;
    name: String;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ) : number {

        let totalMassKg: number = 0;

        for (let i:number = 0; i<items.length; i++ ){

            totalMassKg = totalMassKg + items[i].massKg;
        }
    
        return totalMassKg;

    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems)+ this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean{

        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
            
    }


    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }

 }