export interface INutritionalFacts {
    readonly sodium:        number
    readonly calories:      number
    readonly fiber:         number
    readonly protein:       number
    readonly sugar:         number
    readonly carbs:         number
    readonly fat:           number
    readonly saturatedFat:  number 
    readonly potassium:     number 
    readonly cholesterol:   number
}

export interface IFoodProps {
    readonly name:          string
    readonly nutrition: INutritionalFacts
}

export type FoodGroup = "Fruit" | "Grains" | "Legumes" | "Meats" | "Vegetable"

export abstract class Food 
{
    private _foodDetails: IFoodProps
    private _foodGroup: FoodGroup

    constructor(props: IFoodProps, foodFamily: FoodGroup){
       this._foodDetails = props
       this._foodGroup = foodFamily
    }

    public getNutritionalData(): INutritionalFacts {
        return {...this._foodDetails.nutrition}
    }

    public get foodGroup():FoodGroup {
        return this._foodGroup
    }

    public get name():string
    {
        return this._foodDetails.name
    }
}