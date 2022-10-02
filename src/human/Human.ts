import {Sex} from "./Sex";

export abstract class Human {
    private _name: string[];
    private _surname: string[];
    private _sex: Sex


    protected constructor(name: string[], surname: string[], sex: Sex) {
        this._name = name;
        this._surname = surname;
        this._sex = sex;
    }


    changeName(name: string[]) {
        this._name = name;
    }

    changeSurname(surname: string[]) {
        this._surname = surname;
    }


    abstract greet(): void;


    get name(): string[] {
        return this._name;
    }

    get surname(): string[] {
        return this._surname;
    }

    get sex(): Sex {
      return this._sex
    }

    printDetails(): void {
        console.table({'name': this._name.join(','), 'surname': this._surname.join(','), 'sex': Sex[this._sex]});
    }
}
