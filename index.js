// // switch 
// // let grade = prompt("Enter your Grade : like A, B, C,F")

// switch (grade.toUpperCase()) {
//   case "A":
//       document.write("exclent");
//       break;
//   case "B":
//    document.write("Good");
//       break;f
//   case "i":
//    document.write("Verry nice");
//       break;
  

    
//   default:
//     document.write(`Your Grade:${grade} is very bad , say to sorry you are fall.`);
// }

// // আউটপুট: e is a Vowel.


// //

// let num = 10;
// let num2 = 23;
// let operaters = prompt("Enter yout calculation operators :");

// switch(operaters){
//    case "num + num2":
//       document.write("ddd:")
// }


// for loop 

//  for (i = 5; i <= 50; i = i+ 5){
//     document.write( i)
//  }


//  for (i = 1; i <=10 ; i++){
//     document.write(`5 *${i} =${5 * i}<br>`)
//  }

// let text = "javascript"; // আমাদের মূল শব্দ
// let reversedText = ""; // এখানে উল্টো করা অক্ষরগুলো একটা একটা করে জমা হবে

// // লুপটি শেষের দিক থেকে শুরু হয়ে প্রথম দিকে আসবে
// for (let i = text.length - 1; i >= 0; i--) {
//     reversedText = reversedText + text[i];
// }

// document.write(`Reversed String: ${reversedText}`);


// vioul count


// let text = " hello bangladesh";
// let count = 0;
// for ( let i =0; i< text.length; i++){
//     switch(text[i]){
//         case "a":
//             count ++;
//             break;
//         case "e":
//             count++;
//             break;
//         case "i":
//             count ++;
//             break;
//         case "o":
//             count ++;
//             break;
//         case "u":
//             count++; 
//             break;
            
//         default :"it is not vououl"
            
//     }
// }

// document.write(`Total vowels : ${count}`);



///


// let sum =0;

// for(let i = 1 ;i<=50; sum = sum + i){
//    document.write(sum)
// }




// let sum = 0;

// for( let i = 0; i <=50; i++){
//     sum = sum + i
// }

// document.write(`count${sum}`)


// 1to n50 odd number 

// for(let i =2; i<=50; i= i+2){
//     document.write(`" " ${i}`)
// }
// let sum = 0; // যোগফল জমা রাখার জন্য

// for (let i = 2; i <= 50; i = i + 2) {
//    sum = sum + i; // প্রতিটি জোড় সংখ্যা sum-এর সাথে যোগ হয়ে যাচ্ছে
// }

// // লুপ শেষ হওয়ার পর একেবারে শেষে ফাইনাল রেজাল্ট প্রিন্ট
// document.write(`২ থেকে ৫০ পর্যন্ত জোড় সংখ্যার যোগফল: ${sum}`);


// let count = 0;

// for (let i = 1; i<=20 ; i++){
//     if( i % 3 === 0){
//         document.write("Coffee"+ " <br/>")
//     }else{
//         document.write( i+ " <br/>")
//     }
// }

// for(let i = 0; i<=50; i++){
//     if( i % 3 === 0){
//         document.write("Fizz"+"<br/>");
//     }else if( i % 5===0){
//         document.write("Buzz"+"<br/>")
//     }else if( i % 3 === 0  &&  i % 5===0 ){
//         document.write('FuzZ BuzZ'+"<br/>")
//     }else{
//         document.write(i+"<br/>")
//     }
// }

// let savingsAmount = 0;

// for( i = 1; i <= 30; i++){
//     switch(true){
//         case (i % 7 === 0):
//             savingsAmount += 50;
//             document.write(savingsAmount+"<br>")
//             break;
//         case (i % 2 === 0):
//             savingsAmount += 20;
//             break;
//         default :
//         savingsAmount += 10        
//     }
// }

// document.write(`Total sevings ${savingsAmount}`)

// let number = 29
// let isprime = true ;

// for ( i = 2; i < number; i ++){
//     switch(true){
//         case (number % i ===0) :
//             isprime = false ;
//             break;

//     }
// }
// hsldia
// if (isprime) {
//     document.write(`${number} হলো একটি মৌলিক সংখ্যা (Prime Number)।`);
// } else {
//     document.write(`${number} মৌলিক সংখ্যা নয়।`);
// }


// let i = 10;

// while(i >= 1){
//     i--
//     document.write(i)
// }



// let i = 2; // জোড় সংখ্যা ২ থেকে শুরু করা ভালো

// while(i <= 20){
//   document.write(i + "<br>"); // প্রতিবার প্রিন্ট হবে
//   i = i + 2; // মান ২ করে বাড়বে
// }

// let userName =  prompt("Enter Your name");

// let totalIncome = parseFloat( prompt("Enter your total income :"))

// const numberOfExpences = parseInt(prompt('How many expences do you have ?:'))

// if( isNaN(totalIncome) || isNaN(numberOfExpences) ||    totalIncome <=0|| numberOfExpences <= 0 ){
//     console.log("invalid inpute")
// }else{
//     let totalExpence = 0;

//     for (let    = 0;    < array.length;   ++) {
//         const element = array[  ];
        
//     }
// }



// user name
let userName = prompt("Enter your user Name :");
// income
let income = parseInt(prompt("Enter your total income :"));
// expense count input
const numberOfExpence = parseInt(prompt('How many expenses do you have?'));

// income and expense validation
if (isNaN(income) || isNaN(numberOfExpence) || income <= 0 || numberOfExpence <= 0) {
    console.log("Invalid Input");
} else {
    let totalExpense = 0;

    // Loop to collect each expense
    for (let i = 1; i <= numberOfExpence; i++) {
        let expenseAmount = parseFloat(prompt(`Enter amount for expense ${i}:`));
        
        // Validate individual expense input
        if (isNaN(expenseAmount) || expenseAmount < 0) {
            console.log(`Invalid amount entered for expense ${i}. Skipping.`);
             expenseAmount =0;
        } else {
            totalExpense += expenseAmount;
        }
    }

    // Calculate savings/remaining balance
    let remainingBalance = income - totalExpense;

    // Display the summary
   
     document.write(`--- Expense Report for ${userName} ---`);
    document.write(`Total Income: $${income}`);
  document.write(`Total Expenses: $${totalExpense}`);
  document.write(`Remaining Balance: $${remainingBalance}`);
}