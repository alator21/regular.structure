import {Animal} from "./Animal";

export class Giraffe extends Animal {
    private static readonly INITIAL_SPEED = 10;

    private constructor(height: number, runningSpeedPerKm: number) {
        super(height, runningSpeedPerKm);
    }

    static create(height: number): Giraffe {
        return new Giraffe(height, Giraffe.INITIAL_SPEED);
    }

    communicate(): void {
        console.error('Muah muah yes muah');
    }

}