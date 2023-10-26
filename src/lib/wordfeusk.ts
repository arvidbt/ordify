import { wordlib } from "@/lib/word-service";

const LETTERS: { [key: string]: string[] } = {
  ONE_POINT: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
  TWO_POINTS: ["d", "g"],
  THREE_POINTS: ["b", "c", "m", "p"],
  FOUR_POINTS: ["f", "h", "v", "w", "y"],
  SEVEN_POINTS: ["k"],
  EIGHT_POINTS: ["j", "x"],
};

const LETTER_POINTS: { [key: string]: number } = {
  ONE_POINT: 1,
  TWO_POINTS: 2,
  THREE_POINTS: 3,
  FOUR_POINTS: 4,
  SEVEN_POINTS: 7,
  EIGHT_POINTS: 8,
};

const MIN_ALLOWED_CHARACTERS = 2;

export type WordObject = {
  length: number;
  words: string[];
};

export type FilteredWords = { [length: number]: string[] };

let time = 0;

export function calculatePoints(
  word: string,
  payloadWord: string,
  startsWith: string,
  endsWith: string
): number {
  let wordWorth = 0;
  for (let letter of word) {
    if (payloadWord && !payloadWord.includes(letter)) {
      continue;
    }

    for (const category in LETTERS) {
      if (LETTERS[category].includes(letter)) {
        wordWorth += LETTER_POINTS[category];
        break;
      }
    }
  }

  if (
    word.length -
      payloadWord.split("?").length -
      1 -
      startsWith.length -
      endsWith.length >
    6
  ) {
    wordWorth += 40;
  }

  return wordWorth;
}

export function countWords(words: WordObject[]): number {
  let totalWords = 0;
  for (const items of words) {
    totalWords += items.words.length;
  }
  return totalWords;
}

export function filterWords(
  words: string[],
  startsWith: string,
  endsWith: string
): FilteredWords {
  const sortedWords: FilteredWords = {};
  words.forEach((word) => {
    const length = word.length;
    if (length < MIN_ALLOWED_CHARACTERS) {
      return;
    }
    if (word.includes(":")) {
      return;
    }
    if (startsWith && startsWith !== "" && !word.startsWith(startsWith)) {
      return;
    }
    if (endsWith && endsWith !== "" && !word.endsWith(endsWith)) {
      return;
    }

    if (word.length <= endsWith.length + startsWith.length) {
      return;
    }
    if (!sortedWords[length]) {
      sortedWords[length] = [];
    }
    sortedWords[length].push(word);
  });
  return sortedWords;
}

export function fetchWords(payload: string): string[] {
  const start = performance.now();
  const words = wordlib.getWildcardWords(payload.toLowerCase());
  const end = performance.now();
  time = end - start;

  return words;
}

export function getTime() {
  return time;
}
