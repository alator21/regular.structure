import { Food, IFoodProps  } from './../Abstract.Food'
export class Meat extends Food {
    constructor(VeggieProps: IFoodProps){
        super(VeggieProps, "Meats")
    }
}