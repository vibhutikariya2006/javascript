 // Question-1 Write a program to find longest country name from the array of string
console.log("Question-1");
const country = ["India", "America", "Japan", "UAE", "Iran"]
let temp = "";
for (let i = 0; i < country.length; i++) {
  if(country[i].length > temp.length){
     temp = country[i]
  };
}

console.log("Longest Country name in the array:",temp);
 
 // Question-2 Write a program to find the vowels from a array of string  
 console.log("Question-2");
const wordarray = "JAVASCRIPT"
let count = 0
for(let i=0; i<wordarray.length; i++){
if(wordarray[i] == 'A' || wordarray[i] == 'I' || wordarray[i] == 'E' || wordarray[i] == 'O' || wordarray[i] == 'U'){
count++
}}
console.log("Number of vowels in the word:",count);

 // Question-3 Write a program to Reverse the given string 
 console.log("Question-3");
const word = "Hello World"
let reverseword = ""
for(let i = word.length-1; i>=0; i--){
    reverseword += word[i]
}
console.log(reverseword);

 // Question-4 Write a program to print first 10 number of fibonacci series
 console.log("Question-4");
console.log(" first 10 number of fibonacci series:");

let num1 = 0
let num2 = 1

for(let i=0; i<=10; i++){
    console.log(num1);
    let nextnum = num1 + num2
    num1 = num2
    num2 = nextnum
    
}

 // Question-5 Write a program to find prime number
 console.log("Question-5");
let number = 10;
let Primenum = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    Primenum = false;
    break;
  }
}
if(!Primenum){
    console.log("Given number is not prime");  
}
else{
        console.log("Given number is prime");  

}


 // Question-6 Write a program to find number of digit in a number
 console.log("Question-6");
let digit = 12345;
let countdigit = 0;

while (digit > 0) {
  countdigit++;
  let finaldigit = digit % 10;
  digit = (digit - finaldigit) / 10; // FIXED

//   console.log(digit);
}

console.log("Number of digits:", countdigit);

 // Question-7 Write a program to find largest  number 
 console.log("Question-7");
let arr1 = [10, 45, 25, 90, 75];
let maxnum = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > maxnum) {
    maxnum = arr1[i];
  }
}

console.log("Largest number in the array:", maxnum);


 // Question-8 Write a program to find sum of first 10 number 
 console.log("Question-8");
 let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum of first 10 number:", sum);

 // Question-9 Write a program to find odd numbers between 1 to 10
 console.log("Question-9");
  console.log("Odd Numbers: ");
  
 for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

 // Question-10 Write a program to find even numbers between 1 to 10
 console.log("Question-10");
   console.log("Even Numbers: ");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}