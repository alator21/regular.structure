import { IFoodProps  } from './../Abstract.Food'
import { Vegetable } from './Vegetable'
export class Legumes extends Vegetable {
    constructor(VeggieProps: IFoodProps) {
        super(VeggieProps, "Legumes")
    }
}