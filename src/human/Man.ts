import {Human} from "./Human";
import {Sex} from "./Sex";

export class Man extends Human {
    protected constructor(name: string[], surname: string[], sex: Sex) {
        super(name, surname, sex);
    }

    static create(name: string[], surname: string[],  sex: Sex): Man {
        return new Man(name, surname, sex);
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
}
