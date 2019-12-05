const heuristics = require("./heuristics");

module.exports = {

    printScore: function (scramble, word, score) {
        switch (score) {
            case 0:
                console.log(`${scramble} is not a scramble of ${word}`);
                break;
            case 1:
                console.log(`${scramble} is a poor scramble of ${word}`);
                break;
            case 2:
                console.log(`${scramble} is a fair scramble of ${word}`);
                break;
            case 3:
                console.log(`${scramble} is a hard scramble of ${word}`);
                break;
        }
    },

    /* Parameters: string, string
    Description: employs heuristics to determine classification of scramble
    Output: integer corresponding to score */
    score: function (scramble, word) {
        if (!heuristics.isScrambled(scramble, word)) return 0; // not scrambled
        else {
            if (!heuristics.isOrdered(scramble, word) && heuristics.isReal(scramble)) return 3; // hard scramble
            else if (heuristics.isOrdered(scramble, word) && !heuristics.isReal(scramble)) return 1; // poor scramble
            else return 2; // otherwise fair scramble
        }
    }
};