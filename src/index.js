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
    const match = parenteSisMatch.exec(p1);
    const property = match[1];
    const valueProperty = match[2];
    return variables[property][valueProperty];
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
