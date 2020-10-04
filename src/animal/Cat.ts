import {Animal} from "./Animal";

export class Cat extends Animal {

    private constructor(height: number, runningSpeedPerKm: number) {
        super(height, runningSpeedPerKm);
    }

    static create(height: number, runningSpeedPerKm: number): Cat {
        return new Cat(height, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Meow meow');
    }

    purr(): void {
        console.error("Purr purr");
    }

}