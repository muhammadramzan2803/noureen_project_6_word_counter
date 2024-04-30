#! /usr/bin/env node
// Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourfull Wellcome message 
console.log(chalk.bold.cyanBright("\n \t\tCode with Noureen - Word Counter"));
console.log("=".repeat(60));
// Promt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("\n- Sentence Words\n"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
