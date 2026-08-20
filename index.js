


let numbers = [2, 3, 4, 5];

let products = 1;

for ( i = 0 ; i < numbers.length; i ++){
    products *= numbers[i];
}

// console.log(products)


let original = [10, 20, 30, 40, 50];

let reverceArry = [];

for (let i = original.length -1 ; i >= 0 ; i --){
    reverceArry.push(original[i]) 
}
// console.log(reverceArry)


// 1d arry with func

let input = [1, 2, 3, 4, 5, 6];
function processNumnber(input){

    let evven =[];

    for(let i = 0; i < input.length; i ++){
       if( input[i] % 2 === 0){
        let duble = input[i] * 2;

        evven.push(duble)
       }
    }

    return evven;
}


let ans = processNumnber(input)

// console.log(ans)  
///nested looop 2 d arry

let grid =[
    [2, 4, 6],
    [1, 3, 5],
    [10, 20, 30]
];


sum = 0;

for (let x = 0; x < grid.length ; x ++){
    for( let i = 0; i < grid[x].length; i ++){
        // console.log(grid[x][i])

        sum = sum + grid[x][i]
    }

}

// console.log(sum)

// student result in  3 subject

let studentMarks = [
    [80, 85, 90], // ছাত্র ১-এর নম্বর (গণিত, ইংরেজি, বিজ্ঞান)
    [70, 75, 65,43,656,2,45,64545,], // ছাত্র ২-এর নম্বর
    [90, 95, 92]  // ছাত্র ৩-এর নম্বর
];



for (let s = 0; s < studentMarks.length ; s ++){
    
let totalMark = 0;
    for(let i = 0; i < studentMarks[s].length; i ++){
       totalMark += studentMarks[s][i]
    }
    console.log(` Student ${s + 1}'s Total number : ${totalMark}`)
}

