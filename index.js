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

let savingsAmount = 0;

for( i = 1; i <= 30; i++){
    switch(true){
        case (i % 7 === 0):
            savingsAmount += 50;
            document.write(savingsAmount+"<br>")
            break;
        case (i % 2 === 0):
            savingsAmount += 20;
            break;
        default :
        savingsAmount += 10        
    }
}

document.write(`Total sevings ${savingsAmount}`)