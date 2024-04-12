#! /usr/bin/env node
import inquirer from "inquirer";

const currencies = {
"PKR" : {
    "PKR" : 1,
    "UAE" : 0.013,
    "USD" : 0.0036,
},

"USD" : {
    "USD" : 1,
    "PKR" : 277.95,
    "UAE" : 3.67,
},

"UAE" : {
    "UAE" : 1,
    "PKR" : 75.69,
    "USD" : 0.27,
},
};
  
const answer : {
    from : "PKR" | "USD" | "UAE",
    to : "PKR" | "USD" | "UAE",
    amount : number,
} = await inquirer.prompt([
    {
        name : "amount",
        message : "How much do you want to convert?",
        type : "number",
    },
    {
        name : "from",
        message : "What currency do you want to convert from?",
        type : "list",
        choices : Object.keys(currencies),
    },
    {
        name : "to",
        message : "What currency do you want to convert to?",
        type : "list",
        choices : Object.keys(currencies),
    },
]);

let {from , to , amount}= answer
if (from && to && amount){
    let result = currencies[from][to]*amount;
    console.log(` Your amount from ${from} to ${to} is ${result}`);
}
else{
    console.log("Please enter valid input");
}

  