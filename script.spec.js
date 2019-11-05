const translate = require("./script").translate;

describe("translate", function() {
  it("changes all letters to lowercase", function() {
    let word = translate("APPLE");
    expect(word).toBe("appleway");
  });

  it("changes all letters to lowercase", function() {
    let word = translate("MOUSE");
    expect(word).toBe("ousemay");
  });

  it("adds 'way' to end of word starting with a vowell a", function() {
    let vowelWord = translate("Apple");
    expect(vowelWord).toBe("appleway");
  });

  it("adds 'way' to end of word starting with a vowell i", function() {
    let vowelWord = translate("Ion");
    expect(vowelWord).toBe("ionway");
  });

  it("removes first letter from word beginning w/ 1 consonant", function() {
    let consonantWord = translate("People");
    expect(consonantWord).toBe("eoplepay");
  });

  it("removes first 2 letters from word beginning with 2 consonants", function() {
    let consonantWord = translate("GREAT");
    expect(consonantWord).toBe("eatgray");
  });
});
