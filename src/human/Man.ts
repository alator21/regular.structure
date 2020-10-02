import {Human} from "./Human";
import {Sex} from "./Sex";

export class Man extends Human {
    protected constructor(name: string[], surname: string[]) {
        super(name, surname);
    }

    static create(name: string[], surname: string[]): Man {
        return new Man(name, surname);
    }

    doSomeAwesomeManThings(): void {
        console.table([
            `Go to the gym`,
            `Work hard every second, kappa`
        ]);
    }


    greet(): void {
        console.log(`Ugh Ugh hey:)`);
    }

    sex(): Sex {
        return Sex.MALE;
    }
}
