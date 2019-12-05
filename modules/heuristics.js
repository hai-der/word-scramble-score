var helper = require("./helper");
var alphabet = require("./alphabet");

module.exports = {
    /* 
    Parameters: string, string
    Description: determines if scramble is an actual scrambling by
    checking for exact match, ensuring lengths are equal,
    and ensuring number of letter occurrences are equal.
    Output: boolean */
    isScrambled: function (scramble, word) {
        if (scramble === word || scramble.length !== word.length || scramble.length < 3) return false;

        let scrambleOccurrences = helper.countChar(scramble);
        let wordOccurrences = helper.countChar(word);

        // check if # of character occurrences differ
        for (character in scrambleOccurrences) {
            if (scrambleOccurrences[character] !== wordOccurrences[character]) return false;
        }

        return true;
    },

    /*
    Parameters: string, string
    Description: determines if a scramble is ordered by
    checking if first letter matches or if any two
    consecutive letters are at the correct index.
    Output: boolean */
    isOrdered: function (scramble, word) {
        // is the first letter in the correct place?
        if (scramble.startsWith(word.charAt(0))) return true;

        let scrambleDict = helper.consecutiveLetterIndices(scramble);

        for (let i = 0; i < word.length - 1; i++) {
            // check to see if index of consecutive letters match
            if (scrambleDict[i] === word[i] + word[i + 1]) return true;
        }
        return false;
    },

    /* Parameters: string
    Description: determines if a scramble is real by
    checking if letters are alternating or combination is in whitelist
    Output: boolean */
    isReal: function (scramble) {
        var combination = "";

        for (let i = 0, j = 1; i < scramble.length - 1; i++ , j++) {

            // if pair of letters is not alternating, add to previous combination OR initialize combination
            if (!alphabet.isAlternating(scramble[i], scramble[j])) {
                combination = (combination.length > 0) ? combination += scramble[j] : scramble[i] + scramble[j];

                // otherwise check combination against whitelist
            } else if (combination.length) {
                if (!alphabet.isCombination(combination)) {
                    return false;
                }

                // combination is in the whitelist, proceed to evaluate rest of string
                combination = "";
            }
        }

        // check if it ended with a combination
        if (combination.length > 0 && !alphabet.isCombination(combination)) return false;
        return true;
    }
};