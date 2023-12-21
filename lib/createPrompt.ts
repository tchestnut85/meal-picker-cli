import { createInterface, Interface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export function createPrompt(): Interface {
  const rl = createInterface({ input, output });
  return rl;
}
