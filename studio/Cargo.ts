import { Payload } from "./Payload";
export class Cargo implements Payload {
    // properties and methods
    massKg: number;
    material: String;

    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }


 }