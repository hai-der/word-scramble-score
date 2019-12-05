# Word Scramble Score
This is a program that scores the difficulty of any particular scrambling of a word. The scores can be not, poor, fair or hard, depending on whether or not the scramble is not scrambled, easy to solve, a reasonable difficulty to solve or hard to solve, respectively.

### Requirements

You must install Node.js to run this program.

## Getting Started

After forking the repo to a folder, navigate to the project directory and type the following in your bash terminal to install the Jest dependency.

```
npm install jest
```

Once this dependency is installed, you may run the tests using the following command.

```
npm test
```

## Deployment

Modify the "input.txt" file with the following formatting to allow the program to resolve the scramble's score. 

```
scrambledWord originalWord
scrambledWord originalWord
scrambledWord originalWord
...
```

Next run the following command to see the score for those words in your terminal.

```
node app.js
```