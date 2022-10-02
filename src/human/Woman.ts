import {Human} from "./Human";
import {Sex} from "./Sex";

export class Woman extends Human {
    protected constructor(name: string[], surname: string[], sex: Sex) {
        super(name, surname, sex);
    }

    static create(name: string[], surname: string[], sex: Sex): Woman {
        return new Woman(name, surname, sex);
    }

    doSomeAwesomeWomanThings(): void {
        console.table([
            `Paint a paint`,
            `Manage manageable money`
        ]);
    }


    greet(): void {
        console.log(`Oh oh hello^^`);
    }
}
