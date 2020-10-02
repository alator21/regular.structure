import {Zombie} from "./Zombie";

export class FriendlyZombie extends Zombie {
    private static readonly YEARS_PER_SLEEP: number = 2.1;

    private constructor(currentRegion: string, numberOfYearsPerSleep: number) {
        super(currentRegion, numberOfYearsPerSleep);
    }

    static create(currentRegion: string): FriendlyZombie {
        return new FriendlyZombie(currentRegion, FriendlyZombie.YEARS_PER_SLEEP);
    }

    interactWithHuman(): void {
        console.log(`come here lovely human,i want to hug you <3`);
    }

}