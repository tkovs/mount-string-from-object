import { challenge } from "./index";

describe("something", () => {
  it("should return the same string", () => {
    const mockString = "Hello, Antonio";

    const response = challenge(mockString);
    expect(response).toEqual(mockString);
  });

  it("should insert a simple property", () => {
    const phrase = "Hello, {name}";
    const variables = {
      name: "Antonio"
    };
    expectedPhrase = "Hello, Antonio";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });

  it("should ignore null values", () => {
    const phrase = "Hello, {name} {surname}";
    const variables = {
      name: "Antonio",
      surname: null
    };
    expectedPhrase = "Hello, Antonio ";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });

  it("should ignore undefined values", () => {
    const phrase = "Hello, {name} {surname}";
    const variables = {
      name: "Antonio",
      surname: undefined
    };
    expectedPhrase = "Hello, Antonio ";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });

  it("should insert multiple values", () => {
    const phrase = "Hello, {name} {surname}";
    const variables = {
      name: "Antonio",
      surname: "Vitor"
    };
    expectedPhrase = "Hello, Antonio Vitor";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });

  it("should insert number", () => {
    const phrase = "Hello, {name} {surname}. I am {age} years old.";
    const variables = {
      name: "Antonio",
      surname: "Vitor",
      age: 21
    };
    expectedPhrase = "Hello, Antonio Vitor. I am 21 years old.";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });

  it("should insert nested properties", () => {
    const phrase =
      "Hello, {name} {surname}. I am {age} years old. I like to {verbs.guitar} guitar.";
    const variables = {
      name: "Antonio",
      surname: "Vitor",
      age: 21 ,
      verbs: {
        guitar: "play"
      }
    };
    expectedPhrase = "Hello, Antonio Vitor. I am 21 years old. I like to play guitar.";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });

  it("should insert array elements", () => {
    const phrase =
      "Hello, {name} {surname}. I am {age} years old. I like to {verbs.guitar} guitar. I like to eat {food[0]} and {food[2]}.";
    const variables = {
      name: "Antonio",
      surname: "Vitor",
      age: 21 ,
      verbs: {
        guitar: "play"
      },
      food: [
        'apple',
        'banana',
        'orange',
      ]
    };
    expectedPhrase = "Hello, Antonio Vitor. I am 21 years old. I like to play guitar. I like to eat apple and orange.";

    const response = challenge(phrase, variables);
    expect(response).toEqual(phrase);
  });
});
