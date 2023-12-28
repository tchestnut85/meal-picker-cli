export function capitalizeWords(word: string): string {
  const words = word.split(' ');
  const newString = words
    .map(
      (currentWord) => `${currentWord[0].toUpperCase()}${currentWord.slice(1)}`,
    )
    .join(' ');

  return newString;
}
