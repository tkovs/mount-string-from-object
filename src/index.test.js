/* eslint-disable no-undef */
import { stringFormat } from "./index";

describe("something", () => {
  it("should return the same string", () => {
    const mockString = "Hello, Antonio";

    const response = stringFormat(mockString);
    expect(response).toEqual(mockString);
  });

  it("should insert a simple property", () => {
    const phrase = "Hello, {name}";
    const variables = {
      name: "Antonio"
    };
    const expectedPhrase = "Hello, Antonio";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });

  it("should ignore null values", () => {
    const phrase = "Hello, {name} {surname}";
    const variables = {
      name: "Antonio",
      surname: null
    };
    const expectedPhrase = "Hello, Antonio ";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });

  it("should ignore undefined values", () => {
    const phrase = "Hello, {name} {surname}";
    const variables = {
      name: "Antonio"
    };
    const expectedPhrase = "Hello, Antonio ";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });

  it("should insert multiple values", () => {
    const phrase = "Hello, {name} {surname}";
    const variables = {
      name: "Antonio",
      surname: "Vitor"
    };
    const expectedPhrase = "Hello, Antonio Vitor";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });

  it("should insert number", () => {
    const phrase = "Hello, {name} {surname}. I am {age} years old.";
    const variables = {
      name: "Antonio",
      surname: "Vitor",
      age: 21
    };
    const expectedPhrase = "Hello, Antonio Vitor. I am 21 years old.";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });

  it("should insert nested properties", () => {
    const phrase =
      "Hello, {name} {surname}. I am {age} years old. I like to {verbs.guitar} guitar.";
    const variables = {
      name: "Antonio",
      surname: "Vitor",
      age: 21,
      verbs: {
        guitar: "play"
      }
    };
    const expectedPhrase =
      "Hello, Antonio Vitor. I am 21 years old. I like to play guitar.";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });

  it("should insert array elements", () => {
    const phrase =
      "Hello, {name} {surname}. I am {age} years old. I like to {verbs.guitar} guitar. I like to eat {food[0]} and {food[2]}.";
    const variables = {
      name: "Antonio",
      surname: "Vitor",
      age: 21,
      verbs: {
        guitar: "play"
      },
      food: ["apple", "banana", "orange"]
    };
    const expectedPhrase =
      "Hello, Antonio Vitor. I am 21 years old. I like to play guitar. I like to eat apple and orange.";

    const response = stringFormat(phrase, variables);
    expect(response).toEqual(expectedPhrase);
  });
});
