export const stringFormat = (phrase, variables) => {
  const propertyPatternRegex = /{(.*?)}/g;
  if (variables) {
    const phraseReplaced = phrase.replace(propertyPatternRegex, (_, p1) =>
      replacer(p1, variables)
    );
    return phraseReplaced;
  }
  return phrase;
};
const replacer = (p1, variables) => {

  const parenteSisMatch = /(\w*)*\[(\d*)\]/;
  if (p1.match(parenteSisMatch)) {
    return variables[p1.match(parenteSisMatch)[1]][p1.match(parenteSisMatch)[2]];
  }

  if (p1.includes(".")) {
    const stringSplit = p1.split(".");
    let previousObject = variables;

    for (let i = 0; i < stringSplit.length; i++) {
      previousObject = previousObject[stringSplit[i]];
    }
    return previousObject;
  }

  if (!variables[p1]) return "";
  return variables[p1];
};
