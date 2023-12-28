import { createPrompt } from './lib/createPrompt.ts';
import { chooseMeal } from './lib/chooseMeal.ts';
import { printMeals } from './lib/printMeals.ts';
import { FIRST_MEAL_ID, NONE, QUESTIONS, WELCOME } from './constants.ts';
import type { MealOptions } from './types/index.js';

function printWelcome(message: string): void {
  console.clear();
  console.log(message);
}

async function askQuestions(): Promise<void> {
  const prompt = createPrompt();
  const mealOptions: MealOptions = new Set();

  printWelcome(WELCOME);

  try {
    let isDone = false;
    let questionIndex = 0;

    while (!isDone) {
      const { id, question } = QUESTIONS[questionIndex > 2 ? 2 : questionIndex];
      const isFirstMeal = id === FIRST_MEAL_ID;
      const formattedQuestion = (isFirstMeal ? '' : '\n') + question + '\n';

      const answer = await prompt.question(formattedQuestion);

      if (answer.toLowerCase() === NONE) {
        isDone = true;
      } else {
        mealOptions.add(answer);
      }

      questionIndex++;
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(`There was an error: ${err.message}. Please try again.`);
    }
  }

  const chosenMeal = chooseMeal(mealOptions);

  printMeals(mealOptions, chosenMeal);

  prompt.close();
}

try {
  await askQuestions();
} catch (err) {
  console.error(err);
}
