const { countChar, consecutiveLetterIndices } = require("../modules/helper");

test("countChar() should identify # of occurrences of a specific character", () => {
    const numberOccurences = countChar("ABBC");
    expect(numberOccurences["B"]).toBe(2);
});

test("consecutiveLetterIndices() should define indices and their respective consecutiveLetter pair", () => {
    const characterIndices = consecutiveLetterIndices("ABCD");
    expect(characterIndices[0]).toBe("AB");
    expect(characterIndices[1]).toBe("BC");
    expect(characterIndices[2]).toBe("CD");
});