var self = module.exports = {
    isVowel: function (char) {
        return VOWELS.hasOwnProperty(char);
    },
    isConsonant: function (char) {
        return CONSONANTS.hasOwnProperty(char);
    },
    isCombination: function (combination) {
        return WHITELIST.hasOwnProperty(combination);
    },
    isDoubleConsonants: function (charA, charB) {
        return charA === charB && CONSONANTS.hasOwnProperty(charA);
    },
    isAlternating: function (first, second) {
        return (self.isVowel(first) && self.isConsonant(second) || self.isConsonant(first) && self.isVowel(second));
    }
};

const VOWELS = {
    "A": true,
    "E": true,
    "I": true,
    "O": true,
    "U": true,
    "Y": true
};
const WHITELIST = {
    "AI": true,
    "AY": true,
    "EA": true,
    "EE": true,
    "EO": true,
    "IO": true,
    "OA": true,
    "OO": true,
    "OY": true,
    "YA": true,
    "YO": true,
    "YU": true,
    "BL": true,
    "BR": true,
    "CH": true,
    "CK": true,
    "CL": true,
    "CR": true,
    "DR": true,
    "FL": true,
    "FR": true,
    "GH": true,
    "GL": true,
    "GR": true,
    "KL": true,
    "KR": true,
    "KW": true,
    "PF": true,
    "PL": true,
    "PR": true,
    "SC": true,
    "SCH": true,
    "SCR": true,
    "SH": true,
    "SHR": true,
    "SK": true,
    "SL": true,
    "SM": true,
    "SN": true,
    "SP": true,
    "SQ": true,
    "ST": true,
    "SW": true,
    "TH": true,
    "THR": true,
    "TR": true,
    "TW": true,
    "WH": true,
    "WR": true
};

CONSONANTS = {
    "B": true,
    "C": true,
    "D": true,
    "F": true,
    "G": true,
    "H": true,
    "J": true,
    "K": true,
    "L": true,
    "M": true,
    "N": true,
    "P": true,
    "Q": true,
    "R": true,
    "S": true,
    "T": true,
    "V": true,
    "W": true,
    "X": true,
    "Z": true
};