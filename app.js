const   fs = require("fs"),
        classify = require("./modules/classify");
    
fs.readFile("input.txt", (err, data) => {
    if (err) throw err;

    // parse text file by line
    var input = data.toString().toUpperCase().split("\n");

    input.forEach((pair) => {
        // parse words by whitespace
        var words = pair.split(" ");
        var scramble = words[0];
        var original = words[1];
        classify.printScore(scramble, original, classify.score(scramble, original));
    });
});