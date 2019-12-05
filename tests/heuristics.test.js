const { isScrambled, isOrdered, isReal } = require("../modules/heuristics");

test("isScrambled should identify if the word is scrambled", () => {
    expect(isScrambled("MAPS", "SPAM")).toBe(true);
    expect(isScrambled("HAPPY", "HAPPY")).toBe(false);
    expect(isScrambled("FWO", "WOOF")).toBe(false);
    expect(isScrambled("WOOM", "MEOW")).toBe(false);
});

test("isOrdered should identify if word is ordered", () => {
    expect(isOrdered("OEREDRD", "ORDERED")).toBe(true);
    expect(isOrdered("RODREED", "ORDERED")).toBe(true);
    expect(isOrdered("MAPS", "SPAM")).toBe(false);
    expect(isOrdered("RIONY", "IRONY")).toBe(true);
    expect(isOrdered("ONYRI", "IRONY")).toBe(false);
    expect(isOrdered("IRONY", "IRONY")).toBe(true);
    expect(isOrdered("INOYR", "IRONY")).toBe(true);
    expect(isOrdered("IOYRN", "IRONY")).toBe(true);
});

test("isReal() should identify if word is real", () => {
    expect(isReal("SWARE")).toBe(true);
    expect(isReal("SWARE")).toBe(true);
    expect(isReal("SWR")).toBe(false);
    expect(isReal("ATWAES")).toBe(false);
    expect(isReal("MAPS")).toBe(false);
    expect(isReal("RIONY")).toBe(true);
    expect(isReal("ONYRI")).toBe(true);
    expect(isReal("IRONY")).toBe(true);
    expect(isReal("INOYR")).toBe(true);
    expect(isReal("IOYRN")).toBe(false);
});