import type { Meal, MealOptions } from '../types/index.js';
import { capitalizeWords } from '../utils/capitalizeWords.ts';

export function chooseMeal(mealOptions: MealOptions): Meal {
  const numItems = mealOptions.size;
  const number = Math.floor(Math.random() * numItems);

  const chosenMeal: Meal = capitalizeWords(Array.from(mealOptions)[number]);
  return chosenMeal;
}
