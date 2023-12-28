import type { Meal, MealOptions } from '../types/index.d.ts';

export function printMeals(meals: MealOptions, chosenMeal: Meal): void {
  function printMeal(meal: Meal): void {
    console.log(`${meal}`);
  }

  console.log('\nThe meal options you entered were:');
  meals.forEach(printMeal);
  console.log(`\nHow about trying out the ${chosenMeal}?`);
}
