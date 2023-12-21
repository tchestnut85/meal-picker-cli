import { WELCOME } from './constants.ts';
import { createPrompt } from './lib/createPrompt.ts';

async function start(): Promise<void> {
  console.clear();
  console.log(WELCOME);

  const prompt = createPrompt();

  try {
    // TODO - loop through the questions, and save the answers to a Set so they're unique
  } catch (err) {
    if (err instanceof Error) {
      console.error(`There was an error: ${err.message}. Please try again.`);
    }
  }
}

start();
