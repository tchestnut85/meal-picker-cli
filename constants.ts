import type { Questions } from './types/index.js';

export const WELCOME =
  "👋 Welcome to Meal Picker. \nCan't decide what to eat? 🍔 🍝 🤔 \nLet us help!\n";

export const FIRST_MEAL_ID = 'first_meal';

export const QUESTIONS: Questions = [
  {
    id: FIRST_MEAL_ID,
    question: "What is the first meal you're thinking of eating?",
  },
  {
    id: 'second_meal',
    question: 'What other meal are you thinking of eating?',
  },
  {
    id: 'additional_meal',
    question:
      "What other meal are you thinking of eating?\nEnter none if you're done listing meal options.",
  },
];

export const NONE = 'none';
