//Using the readline module
//readline interface is an instance of the event emitter class

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
}); //process is a global node variable

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let ans = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`,
 (userInput) => {
     if (userInput.trim() == ans) {
         rl.close();
     } else {
         rl.setPrompt('Incorrect response, please try again\n');
         rl.prompt();
         rl.on('line', (userInput) => {
             if(userInput.trim() == ans)
                rl.close();
             else {
                 rl.setPrompt(`Your answer of ${userInput} is incorrect\n`);
                 rl.prompt();
             }
         });
     }
 });

 //line event continues indefinitely

 rl.on('close', () => {
     console.log('Correct!');
 })