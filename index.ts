#! /usr/bin/env node
import inquirer from "inquirer"

const currency: any =  {
    USD: 1,//base currency
    EUR:  0.84, 
    GBP:  1.17,
    INR: 65.93,
    PKR: 203.05
}

let userAnswer: any =  await inquirer.prompt(
  [
    {
        name:"from",
        message:"Enter your currency",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR"]

    },
    {
        name:"to",
        message:"Enter to currency",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR"]

    },
    {
        name:"amount",
        message:"Enter your amount",
        type:"number"

    }
  ]
)

let fromAmount = currency[userAnswer.from]//exchange rate
let toAmount = currency[userAnswer.to]//exchange rate
let Amount = userAnswer.amount
let BaseAmount = Amount/fromAmount//usd base currency
let convertedAmount = BaseAmount *toAmount 
console.log(convertedAmount)