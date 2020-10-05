import { Fruit } from "./../Food/FoodGroups/Fruit";
import { Grains } from "./../Food/FoodGroups/Grain";
import { Legumes } from "./../Food/FoodGroups/Legumes";
import { Meat } from "./../Food/FoodGroups/Meat";
import { Vegetable } from "./../Food/FoodGroups/Vegetable";

//#region Fruits
export const Orange = new Fruit({
  name: "orange",
  nutrition: {
    sodium: 1.4,
    calories: 68.6,
    fiber: 3.08,
    protein: 1.27,
    sugar: 11.9,
    carbs: 17.56,
    fat: 0.21,
    saturatedFat: 0.02,
    potassium: 232.4,
    cholesterol: 0,
  },
});

export const Apple = new Fruit({
  name: "apple",
  nutrition: {
    sodium: 1.82,
    calories: 94.64,
    fiber: 4.37,
    protein: 0.47,
    sugar: 18.91,
    carbs: 25.13,
    fat: 0.31,
    saturatedFat: 0.05,
    potassium: 194.74,
    cholesterol: 0,
  },
});

export const Peach = new Fruit({
  name: "peach",
  nutrition: {
    sodium: 0,
    calories: 68.25,
    fiber: 2.63,
    protein: 1.59,
    sugar: 14.68,
    carbs: 16.7,
    fat: 0.44,
    saturatedFat: 0.03,
    potassium: 332.5,
    cholesterol: 0,
  },
});

export const Grapes = new Fruit({
  name: "grapes",
  nutrition: {
    sodium: 0.98,
    calories: 33.81,
    fiber: 0.44,
    protein: 0.35,
    sugar: 7.59,
    carbs: 8.87,
    fat: 0.08,
    saturatedFat: 0.03,
    potassium: 93.59,
    cholesterol: 0,
  },
});

export const Papaya = new Fruit({
  name: "papaya",
  nutrition: {
    sodium: 11.6,
    calories: 62.35,
    fiber: 2.47,
    protein: 0.68,
    sugar: 11.34,
    carbs: 15.69,
    fat: 0.38,
    saturatedFat: 0.12,
    potassium: 263.9,
    cholesterol: 0,
  },
});

export const Strawberries = new Fruit({
  name: "strawberries",
  nutrition: {
    sodium: 0.9,
    calories: 28.8,
    fiber: 1.8,
    protein: 0.6,
    sugar: 4.4,
    carbs: 6.91,
    fat: 0.27,
    saturatedFat: 0.01,
    potassium: 137.7,
    cholesterol: 0,
  },
});
//#endregion

// #region Grains
export const Rice = new Grains({
  name: "rice",
  nutrition: {
    sodium: 1.58,
    calories: 205.4,
    fiber: 0.63,
    protein: 4.25,
    sugar: 0.08,
    carbs: 44.51,
    fat: 0.44,
    saturatedFat: 0.12,
    potassium: 55.3,
    cholesterol: 0,
  },
});

export const Wheat = new Grains({
  name: "wheat",
  nutrition: {
    sodium: 3.84,
    calories: 631.68,
    fiber: 23.42,
    protein: 29.57,
    sugar: 0.79,
    carbs: 130.62,
    fat: 3.69,
    saturatedFat: 0.6,
    potassium: 652.8,
    cholesterol: 0,
  },
});

export const Barley = new Grains({
  name: "barley",
  nutrition: {
    sodium: 4.71,
    calories: 193.11,
    fiber: 5.97,
    protein: 3.55,
    sugar: 0.44,
    carbs: 44.31,
    fat: 0.69,
    saturatedFat: 0.15,
    potassium: 146.01,
    cholesterol: 0,
  },
});

export const Corn = new Grains({
  name: "corn",
  nutrition: {
    sodium: 1.03,
    calories: 98.88,
    fiber: 2.47,
    protein: 3.51,
    sugar: 4.68,
    carbs: 21.61,
    fat: 1.55,
    saturatedFat: 0.2,
    potassium: 224.54,
    cholesterol: 0,
  },
});
//#endregion

//#region Legumes
export const Penuts = new Legumes({
  name: "penuts",
  nutrition: {
    sodium: 4.1,
    calories: 5.87,
    fiber: 0.08,
    protein: 0.24,
    sugar: 0.05,
    carbs: 0.21,
    fat: 0.5,
    saturatedFat: 0.08,
    potassium: 6.34,
    cholesterol: 0,
  },
});

export const Peas = new Legumes({
  name: "peas",
  nutrition: {
    sodium: 4.8,
    calories: 134.4,
    fiber: 8.8,
    protein: 8.58,
    sugar: 9.49,
    carbs: 25.01,
    fat: 0.35,
    saturatedFat: 0.06,
    potassium: 433.6,
    cholesterol: 0,
  },
});

export const Beans = new Legumes({
  name: "beans",
  nutrition: {
    sodium: 871.22,
    calories: 238.76,
    fiber: 10.41,
    protein: 12.07,
    sugar: 20.22,
    carbs: 53.7,
    fat: 0.94,
    saturatedFat: 0.18,
    potassium: 568.96,
    cholesterol: 0,
  },
});

export const GreenBeans = new Legumes({
  name: "green beans",
  nutrition: {
    sodium: 1.25,
    calories: 43.75,
    fiber: 4,
    protein: 2.36,
    sugar: 4.54,
    carbs: 9.85,
    fat: 0.35,
    saturatedFat: 0.08,
    potassium: 182.5,
    cholesterol: 0,
  },
});
//#endregion

//#region Meats
export const Lamb = new Meat({
  name: "lamb",
  nutrition: {
    sodium: 61.2,
    calories: 249.9,
    fiber: 0,
    protein: 20.84,
    sugar: 0,
    carbs: 0,
    fat: 17.8,
    saturatedFat: 7.51,
    potassium: 263.5,
    cholesterol: 82.45,
  },
});

export const Beef = new Meat({
  name: "beef",
  nutrition: {
    sodium: 53.55,
    calories: 247.35,
    fiber: 0,
    protein: 22.46,
    sugar: 0,
    carbs: 0,
    fat: 16.75,
    saturatedFat: 6.6,
    potassium: 271.15,
    cholesterol: 73.95,
  },
});

export const Chicken = new Meat({
  name: "chicken",
  nutrition: {
    sodium: 60.35,
    calories: 187,
    fiber: 0,
    protein: 20.37,
    sugar: 0,
    carbs: 0.04,
    fat: 11.11,
    saturatedFat: 3.11,
    potassium: 173.4,
    cholesterol: 79.9,
  },
});

export const Pork = new Meat({
  name: "pork",
  nutrition: {
    sodium: 48.45,
    calories: 202.3,
    fiber: 0,
    protein: 22.41,
    sugar: 0,
    carbs: 0,
    fat: 11.81,
    saturatedFat: 4.16,
    potassium: 289.85,
    cholesterol: 74.8,
  },
});

export const Shrimp = new Meat({
  name: "shrimp",
  nutrition: {
    sodium: 47.35,
    calories: 5.95,
    fiber: 0,
    protein: 1.14,
    sugar: 0,
    carbs: 0.08,
    fat: 0.09,
    saturatedFat: 0.03,
    potassium: 8.5,
    cholesterol: 10.55,
  },
});

export const Fish = new Meat({
  name: "fish",
  nutrition: {
    sodium: 95.2,
    calories: 217.6,
    fiber: 0,
    protein: 44.46,
    sugar: 0,
    carbs: 0,
    fat: 4.51,
    saturatedFat: 1.6,
    potassium: 646,
    cholesterol: 96.9,
  },
});
//#endregion

//#region Vegetable
export const Brocolli = new Vegetable({
  name: "brocolli",
  nutrition: {
    sodium: 15.17,
    calories: 12.95,
    fiber: 1.22,
    protein: 0.88,
    sugar: 0.51,
    carbs: 2.66,
    fat: 0.15,
    saturatedFat: 0.03,
    potassium: 108.41,
    cholesterol: 0,
  },
});

export const Onion = new Vegetable({
  name: "onion",
  nutrition: {
    sodium: 2.82,
    calories: 41.36,
    fiber: 1.32,
    protein: 1.28,
    sugar: 4.45,
    carbs: 9.54,
    fat: 0.18,
    saturatedFat: 0.03,
    potassium: 156.04,
    cholesterol: 0,
  },
});

export const Carrot = new Vegetable({
  name: "carrots",
  nutrition: {
    sodium: 26.68,
    calories: 16.1,
    fiber: 1.38,
    protein: 0.35,
    sugar: 1.59,
    carbs: 3.78,
    fat: 0.08,
    saturatedFat: 0.01,
    potassium: 108.1,
    cholesterol: 0,
  },
});

export const Lettuce = new Vegetable({
  name: "lettuce",
  nutrition: {
    sodium: 7.52,
    calories: 15.98,
    fiber: 1.97,
    protein: 1.16,
    sugar: 1.12,
    carbs: 3.09,
    fat: 0.28,
    saturatedFat: 0.04,
    potassium: 232.18,
    cholesterol: 0,
  },
});
//#endregion