import { Human } from "./Human";
import { Sex } from "./Sex";

export class Elve extends Human {
  protected constructor(name: string[], surname: string[], sex: Sex) {
    super(name, surname, sex);
  }
  static create(name: string[], surname: string[], sex: Sex): Elve {
    return new Elve(name, surname, sex);
  }

  doSomeAwesomeManThings(): void {
    console.table([
        `Skin routine`
    ]);
  }

  greet(): void {
    throw new Error("S Suilad");
  }
}
