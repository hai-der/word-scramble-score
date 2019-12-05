const { isVowel, isConsonant, isCombination, isDoubleConsonants, isAlternating } = require("../modules/alphabet");

test("isVowel() should look up character in list of vowels", () => {
    expect(isVowel("A")).toBe(true);
    expect(isVowel("E")).toBe(true);
    expect(isVowel("I")).toBe(true);
    expect(isVowel("O")).toBe(true);
    expect(isVowel("U")).toBe(true);
    expect(isVowel("Y")).toBe(true);
    expect(isVowel("B")).toBe(false);
    expect(isVowel("D")).toBe(false);
    expect(isVowel("Z")).toBe(false);
});

test("isConsonant() should look up character in list of consonants", () => {
    expect(isConsonant("O")).toBe(false);
    expect(isConsonant("U")).toBe(false);
    expect(isConsonant("Y")).toBe(false);
    expect(isConsonant("W")).toBe(true);
    expect(isConsonant("X")).toBe(true);
    expect(isConsonant("Z")).toBe(true);
});

test("isCombination() should look up combination in whitelist", () => {
    expect(isCombination("SW")).toBe(true);
    expect(isCombination("WR")).toBe(true);
    expect(isCombination("SWR")).toBe(false);
});

test("isDoubleConsonant() should identify repeating consonants", () => {
    expect(isDoubleConsonants("A", "A")).toBe(false);
    expect(isDoubleConsonants("B", "B")).toBe(true);
    expect(isDoubleConsonants("B", "E")).toBe(false);
    expect(isDoubleConsonants("E", "B")).toBe(false);
});

test("isAlternating() should identify alternating vowels and consonants", () => {
    expect(isAlternating("A", "B")).toBe(true);
    expect(isAlternating("B", "A")).toBe(true);
    expect(isAlternating("E", "E")).toBe(false);
    expect(isAlternating("D", "D")).toBe(false);
});