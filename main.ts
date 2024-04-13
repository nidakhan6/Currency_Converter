//inquirer install
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to 'CodewithNida'- Currency Converter\n"));

//Define the list of currencies and their exchange rates 
//currency converter

let exchange_rate: any = {
  "USD": 1,         //Base currency
  "EUR": 0.9,         //European currency
  "JYP": 113,         // japanese currency
  "CAD": 1.3,         //canadian Dollar
  "AUD": 1.65,       //Australian Dollar
  "PKR": 277.70,         //pakistan rupes
  //ADD more curreecies and their exchange rates here
}

// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
  {
    name: "from_currency",
    type: "list",
    message: "Select the currency to convert from:",
    choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
  },
    {
      name: "to_currency",
      type: "list",
      message: "Select the currency to convert into:",
      choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
{
  name: "amount",
  type: "input",
  message: "Enter the amount to convert:",
}
  
]);
  // perform currency conversation by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversation
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);

