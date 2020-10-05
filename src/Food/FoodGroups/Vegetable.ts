import { Food, IFoodProps, FoodGroup } from './../Abstract.Food'
export class Vegetable extends Food {
    constructor(VeggieProps: IFoodProps, foodGroup: FoodGroup = "Vegetable"){
        super(VeggieProps, foodGroup)
    }
}