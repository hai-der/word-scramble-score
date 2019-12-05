module.exports = {
    /*
    Parameters: string
    Description: creates a dictionary describing number of
    occurrences of each character in a string.
    Output: object with 'character of string' as property and '# of occurrences' as value */
    countChar: function (string) {
        let dictionary = {};
        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            // if no occurrence, add the character to the dictionary
            // if encountered in dictionary, increment counter
            dictionary[char] = !dictionary[char] ? 1 : dictionary[char] + 1;
        }
        return dictionary;
    },

    /*
    Parameters: string
    Description: creates a dictionary describing index of consecutive letter pairs 
    Output: object with 'location of letterPair' as property and 'string of consecutive letters' as value 
            e.g. MAPS { 0: 'MA', 1: 'AP', 2: 'PS' } */
    consecutiveLetterIndices: function (string) {
        let dictionary = {};
        for (let i = 0; i < string.length - 1; i++) {
            let letterPair = string[i] + string[i + 1];

            dictionary[i] = letterPair;
        }
        return dictionary;
    }
};