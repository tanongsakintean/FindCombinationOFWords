function findWords(words, chars) {
  let newWord = [];
  words.forEach((word) => {
    if (word.split("").every((w) => chars.some((char) => char.includes(w)))) {
      //check every char in word have some char in chars
      newWord.push({
        word: word,
        sumAsciis: word.split("").reduce((a, b) => a + b.charCodeAt(0), 0),
      });
    }
  });
  return newWord
    .sort((a, b) => b.sumAsciis - a.sumAsciis)
    .map((item) => item.word);
}

const words = ["cherry", "date", "honeydew", "orange", "papaya"];
const characters = ["o", "r", "a", "n", "g", "e", "h", "y", "d", "w", "t"];

const result = findWords(words, characters);
console.log(result);
