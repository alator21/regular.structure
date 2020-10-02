import {Human} from "./Human";
import {Sex} from "./Sex";

export class Woman extends Human {
    protected constructor(name: string[], surname: string[]) {
        super(name, surname);
    }

    static create(name: string[], surname: string[]): Woman {
        return new Woman(name, surname);
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

    sex(): Sex {
        return Sex.FEMALE;
    }
}
