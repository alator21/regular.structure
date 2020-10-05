import { Food, IFoodProps  } from './../Abstract.Food'
export class Grains extends Food {
    constructor(VeggieProps: IFoodProps){
        super(VeggieProps, "Grains")
    }
}