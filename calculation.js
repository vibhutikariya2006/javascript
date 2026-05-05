 // Question-1 Write a program to find the product of two number using arrow function
 console.log("Question-1");

 let arrow = () =>{
console.log("Multiplication of 3 and 10 = ", 3*10);
}
arrow();

console.log("Question-2");

// Question-2 Write a program to find the number is odd or even
 let num = 11
 if(num%2 == 0){
    console.log("Number is even");
    
 }

 else{
    console.log("Number is odd");
    
 }

// Question-3 Write a program to find the sum of all elements in an array 
 console.log("Question-3");
 const sumarray = [1,2,5,6,8,10]

 let tempsum = 0;

 for(let i=0; i < sumarray.length; i++){
    tempsum += sumarray[i];
 }

 console.log(tempsum);

 // Question-4 Write a program to find the factorial  
 console.log("Question-4");
  function repeat(n){
    if(n === 1) return 1;
    return n * repeat(n-1);
}
const fact = repeat(4);
console.log(fact);

 // Question-5 Write a program to find the vowels from a array of string  
 console.log("Question-5");
const wordarray = "JAVASCRIPT"
let count = 0
for(let i=0; i<wordarray.length; i++){
if(wordarray[i] == 'A' || wordarray[i] == 'I' || wordarray[i] == 'E' || wordarray[i] == 'O' || wordarray[i] == 'U'){
count++
}

}
console.log(count);



 // Question-6 Write a program to find the sum of two numbers using function  
 console.log("Question-6");
 function sumoftwo(a,b){
 console.log(a+b);
}
sumoftwo(10,20);

 // Question-7 Write a program to find the number less than 100 
 console.log("Question-7");
const number = [100,60,20,45,69, 105, 200, 2, 78, 185]
const filterfun = number.filter((number)=> number < 100);
console.log(filterfun);


// Question-8 Write a program to find longest country name from the array of string
console.log("Question-8");
const country = ["India", "America", "Japan", "UAE", "Iran"]
let temp = "";
for (let i = 0; i < country.length; i++) {
  if(country[i].length > temp.length){
     temp = country[i]
  };
}

console.log("Longest Country name in the array:",temp);

 // Question 9- Write a program using IIFE function to print your name
 console.log("Question-9");
 (function(name){
console.log("My Name is ", name);

})("Vibhuti");

 // Question 10- Write a program using function to only print instruction
 console.log("Question-10");
function instruction(){
 console.log("1. Do not use phone during class");
 console.log("2. Stay Focused");
}
instruction();

 // Question 11- Write a program using function to print the given number
 console.log("Question-11");
function value(){
 return 30;
}
console.log("Given number is ", value());

 // Question 12- Write a program using map function to print the given names
 console.log("Question-12");
let namearray = ["Vibhuti", "Hemangi", "Reena"]
const map = namearray.map((num)=> console.log(num));

 // Question 13- Write a program using function to find largest number
 console.log("Question-13");
 function largest(a, b) {
  if(a>b){
   console.log(a, "is greater than" ,b);
  }
 else{
      console.log(b, "is greater than" ,a);
  }
}
largest(10,20);

 // Question 14- Write a program using function to greet someone
 console.log("Question-14");
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Vibhuti"));

 // Question 15- Write a program using function to find square of the given number
 console.log("Question-15");

 function square(number) {
  return number*number;
}

console.log(square(11));

 // Question 16- Write a program to swap two numbers
 console.log("Question-16");
let a = 100;
let b = 200;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);


 // Question 17- Write a program to find the minimum number
 console.log("Question-17");

 function Minnum(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
console.log(Minnum([15, 25, 19, 50])); 

 // Question 18- Write a program to join two array
 console.log("Question-18");

 const arr2 = [10,40,50,80,90,100];
console.log("Original Arr : ",arr2);
const num1 = [200,300,400]
const joins = arr2.concat(num1);

 // Question 19- Write a program to print email in * form
 console.log("Question-19");
 const str = "test10@gmail.com";
 const test = str.substring(0,4) + "**********" + str.substring(13,16);
 console.log(test);

  // Question 20- Write a program to replace @ in email with % sign
 console.log("Question-20");
 const test1 = str.replace("@", "%");
  console.log(test1);
