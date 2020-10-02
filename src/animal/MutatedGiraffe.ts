import {Animal} from "./Animal";

export class MutatedGiraffe extends Animal {
    private static readonly INITIAL_SPEED = 17;

    private constructor(height: number, runningSpeedPerKm: number) {
        super(height, runningSpeedPerKm);
    }

    static create(height: number): MutatedGiraffe {
        return new MutatedGiraffe(height, MutatedGiraffe.INITIAL_SPEED);
    }

    communicate(): void {
        console.error('grrrrrrrr mutant zzzzz');
    }

}