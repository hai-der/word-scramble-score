const { score } = require("../modules/classify");

// 0 (not), 1 (poor), 2 (fair), 3 (hard) scramble
test("score should return classifcation of scramble", () => {
    expect(score("MAPS", "SPAM")).toBe(2);
    expect(score("RIONY", "IRONY")).toBe(2);
    expect(score("ONYRI", "IRONY")).toBe(3);
    expect(score("IRONY", "IRONY")).toBe(0);
    expect(score("INOYR", "IRONY")).toBe(2);
    expect(score("IOYRN", "IRONY")).toBe(1);
});