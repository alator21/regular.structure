import { Food, IFoodProps } from './../Abstract.Food'

export class Fruit extends Food {
    constructor(VeggieProps: IFoodProps) {
        super(VeggieProps, "Fruit")
    }
}