export function findMatchingWords(
  possibleWords: string[],
  includedLetters: string,
  excludedLetters: string
) {
  const words: string[] = [];
  possibleWords.forEach((word) => {
    if (word.includes(":")) {
      return;
    }

    if (includedLetters !== "") {
      const included = [...includedLetters.toLowerCase()];
      if (!included.every((c) => word.includes(c))) {
        return;
      }
    }

    if (excludedLetters !== "") {
      const excluded = [...excludedLetters.toLowerCase()];
      if (excluded.some((c) => word.includes(c))) {
        return;
      }
    }

    words.push(word);
  });
  return words;
}
