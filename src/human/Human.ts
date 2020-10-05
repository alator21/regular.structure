import { Gender } from './Gender'
import { Food } from './../Food/Abstract.Food'
export abstract class Human {
    private _name: string[];
    private _surname: string[];


    protected constructor(name: string[], surname: string[]) {
        this._name = name;
        this._surname = surname;
    }

    public eats(foodInstance: Food)
    {
        let msg = ''
        switch (foodInstance.foodGroup) {
            case "Meats":
                msg = foodInstance.name === 'fish' 
                    ? 'but I dont eat Fish' 
                    : "I love to eat Meat"
                break;
            case "Vegetable":
                msg = `I dont want to eat Vegetables, \n${foodInstance.name} is gross.`
            default:
                break;
        }
        
        if(msg.length > 0) {
            console.log(msg)
        }

    }


    changeName(name: string[]) {
        this._name = name;
    }

    changeSurname(surname: string[]) {
        this._surname = surname;
    }


    abstract greet(): void;

    abstract GetGender(): Gender


    get name(): string[] {
        return this._name;
    }

    get surname(): string[] {
        return this._surname;
    }

    printDetails(): void {
        console.table({'name': this._name.join(','), 'surname': this._surname.join(','), 'sex': Gender[this.GetGender()]});
    }
}