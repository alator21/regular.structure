import {Animal} from "./Animal";

export class Cat extends Animal {

    private constructor(height: number, weight: number, runningSpeedPerKm: number) {
        super(height, weight, runningSpeedPerKm);
    }

    static create(height: number, weight: number, runningSpeedPerKm: number): Cat {
        return new Cat(height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Meow meow');
    }

    purr(): void {
        console.error("Purr purr");
    }

}