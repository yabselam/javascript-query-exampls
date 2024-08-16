// console.log("Hello world");
// console.log(10+5);
// let x=10;
// let y=3;
// let sum;
// sum= x + y;
// console.log(sum);
// let mod;
// mod= x / y;
// console.log(mod);
// x++;
// console.log(x);
// x= x + y;
// console.log(x);
// x = y;
// console.log(x);
// var a='Hello';
// var b='world';
// var c= a + " "+ b;
// console.log(c);
// console.log(typeof );
// console.log(4!="5")
// var c = "abebe";
// var d=9;
// console.log(d = c);
// var a="2";
// var b="12";
// let x=1;
// let y=(x!==2);
// console.log(y)
// console.log(2+true);
//  alert("your js file is connected");

//Algorithm practice

//Write a function that adds two numbers and return its result but if the given input is not a number it returns error

// function add(a,b){
//      if(isNaN(a) || isNaN(b)){
//        return "please enter a number."
//      }
//      return (a) +(b);
//  }

//    console.log(add(7,5));
//     console.log(add(7.5, 5));

//Write algorith that take height and base of a triangle and returns area of a triangle

//area= height * base / 2

// function area(base,height){
//       if(isNaN(base) || isNaN(height)){
//         return "the base height you enter are not number  please enter a numbers to be calculated"
//       }
//else if (base <=0 || height<=0){
//         return "Error input"
//       }

//     return base * height / 2;

// }
// console.log(area(2,5.5));

//create a function that takes the number of wins, draws and losses and calculate the number of points a football team has obtained so far.
// win get 3 points
// draw get 1 points
//losses get 0 points
// function teampoints(w,d,s){
//     //cheack if given point is number
//     if (isNaN(w) || isNaN(d) || isNaN(s)){
//          return "please enter a number.";
//     }
//     //if the given point is number if works this :
//     else if (w <= 0 || d <= 0 || s <= 0) {
//       return "Error input";
//     }
//    let win= 3 * w;
//     let draw= 1 * d;
//     let loss= 0 * s;
//     return sum= win + draw + loss ;

// }
// console.log(teampoints(11,4,6));

//write a function that takes an intiger minutes and converts it to seconds.

// function convert(min){
//     if(Number.isInteger(min)){
//         return sec = min * 60;
//     }
//     else{
//         return "Input is not integer"
//     }
// }
// console.log(convert(5));

//create a function that takes a number as an argument.Add u all the numbers from 1 until the  number you passed to the function.For example, if the input is 4 then your function should return 10 because 1 + 2 + 3+4+10.
//use for loop for one

// function add(n){

//     let sum=0;
//     for(i=1; i<=n; i++){
//         sum =sum+ i;
//     }
//      console.log(sum);
// }
// add(13);
// Write a function that prints the first 10 integers on the console starting from the number 1 using
//the JavaScript for loop.

// function list(){
//     for(i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// list();

//Write a function that takes a single number as an argument and prints the next 5 numbers in the
//console. Note: each output should be displayed on a new line.
//○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// function dis(n){
//     for(i=n+1; i<=n+5; i++){
//          console.log(i);
//     }
// }
// dis(7);

//Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// function dis(n){
//     var sum=0;
//      for(i=n+1; i<=n+10; i++){
//          console.log(i);
//          sum= sum+i;
//     }
//      console.log(sum);
//  }
// dis(7);
//Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

// function arr(display){
//     for(i=0; i<display.length;i++){
//         console.log(display[i]);
//     }

// }
//   arr([1, "Hello", 8, 44]);

// Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

// function arr(display) {
//   for (i = 0; i < display.length; i++) {

//   }
//   console.log(i);
// }
// arr([1, "Hello"]);

//● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0

//  function arr(display){
//     var sum=0;
//     for(i=0; i<display.length;i++){
//        sum= sum + display[i];
//      }
//      console.log(sum);
//  }
//   arr([5,6,99,8,76,4,68,44]);
//   arr([3,0]);

//on 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// function arr(display){
//      var evsum=0;
//      var oddsum=0;
//      for(i=0; i<display.length;i++){
//         if (display[i]%2==0){
//             // var even;
//               evsum = evsum + display[i];

//         } else{
//             // var odd;
//             oddsum = oddsum + display[i];

//         }
//         // sum = sum + display[i];
//      }
//        console.log("sum of even numbers:" + evsum);
//         console.log("sum of odd numbers:" + oddsum);
//           var diff;
//           diff = evsum - oddsum;
//      console.log(diff);
//  }
//   arr([5,6,99,8,76,4,68,44]);
//   arr([3,0]);

// Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

//  function arr(display){
//     for(i=0; i<display.length;i++){
//         if (i%2==0)
//             console.log(display[i]);
//     }

// }
//   arr([5, 6, 99, 8, 76, 4, 68, 44]);
//   arr([11, "Sam", 3, 7, "car"]);

// var a =[1,"a",9];
// console.log(a);
// console.log(a[0]);
// //Object in Java script
// //litral notion syntax
// var o ={
//  meleya1: 1,
//  //key:value,
// };
// console.log(o);
// console.log(o["meleya1"]);
// var Abebe ={
//  firstName:"abebe",
//  lastName:"kebede",
//  //key:value,
//    start:function(){
//    return "start my" +this.firstName;
//    },
// };
// console.log(Abebe);
// console.log(Abebe["firstName"]);
// console.log(Abebe.lastName)
// console.log(Abebe.start());
// Abebe.grandfathername="geme";
// console.log(Abebe.grandfathername)

// //constructor function
// function Student(fn,ln){
//     this.firstname=fn;
//     this.lastname=ln;
//     this.fullname= function(){
//         return  this.firstname + " " +this.lastname;
//     }
// }
//   var challa= new Student("challa","Abebe");
//   console.log(challa);
//    console.log(challa.fullname());
//  console.log(challa.firstname);

// var student=new String("abebe");
// console.log(student);

// var Abebe="Abebe";
// var Abebe2="Abebe";
// console.log(Abebe2.length)
// // 5
// console.log(Abebe.charAt(3))
// // b
// // console.log(Abebe.tolowercase);

// console.log(Abebe.lastIndexOf("e"));
// // 4
// console.log(Abebe2.toUpperCase());
// // ABEBE
// console.log(Abebe2.slice(1,4));
// //beb

// console.log(Abebe2.split(""));
// //(5)[' A', 'b'....]

//push and pop
// var somearray=["abebe,kebede,almaz"]
// console.log(somearray);
// somearray.push("challa");
// console.log(somearray);
// somearray.pop();
// console.log(somearray);
// somearray.pop();
// console.log(somearray);

//Exercise
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method.

//10)  ●Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
// const sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// sampleArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(sampleArray);
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: [
// {
// name: "Abebe",
// age: 34,
// sex: "M"
// },
// {
// name: "Kebede",
// age: 44,
// sex: "M"
// },
// {
// name: "Almaz",
// age: 27,
// sex: "F"
// },
// {
// name: "Challa",
// age: 22,
// sex: "M"
// },
// {
// name: "Chaltu",
// age: 19,
// sex: "F"
// }
// ]
// }
// console.log(evangadiClass);
// //● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// //console
// //○ // Use the dot notation "." to call the property you want to change.
// evangadiClass.lengthOfCourse=5;
// console.log(evangadiClass);

// // ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// // console
// // ○ // Use an array method
// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass);

// // Write a function that takes the "evangadiClass" object as an argument and calculates the average
// // age of the class. Print the result on the console
// evangadiClass.reduce(age(acc,cur) => acc + cur /5);
// console.log(evangadiClass);
//how to identify only the lowercase words

//  function identifyer(a){
//     hiddenword=""
// ;
//       for(i=0; i<a.length; i++  ){
//     var lowercase= a.charAt(i);
//      if(lowercase !== lowercase.toUpperCase()){
//         hiddenword= hiddenword + lowercase;
//      }
//       }
//        return hiddenword;

// }
//  var hiddenword = identifyer("UcTNGTRaHHRDGtJ31G");
//  console.log(hiddenword);

//    function compatison(x){
//     var FirstArray=[];
//     for(i=0; i<a.length; i++){
//         for(j=0; j<a.length; j++){
//     if()
//         }
//     }
//    }
// function nestedarray([x],[y]){
//     arr1=[x];
//     arr2=[y];
//     arr1.sort();
//     arr2.sort();
//     if(arr1[0] > arr2[0] && arr1[arr1.length -1] < arr2[arr2.lenth - 1]){
//         return true;

//     }else {
//         return false;
//     }
// }
// nestedarray([9, 0, 8, 7, 655, 0], [6, 8, 95, 8, 888]);
// // nestedarray(y);
// // console.log(nestedarray);
// console.log(nestedarray);
//  function carNest(arr1,arr2){
//     if(!(Array.isArray(arr1) && Array.isArray(arr2))){
//         return "Both needs to be array"
//     }
//     let arr1sorted=arr1.sort((a,b) => a - b);
//         let arr2sorted = arr2.sort((a, b) => a - b);
//        let arr1min=arr1sorted[0];
//             let    arr2min = arr2sorted[0];
//       let arr1max=arr1sorted[arr1.length - 1];
//       let arr2max=arr2sorted[arr2.length - 1];
//       if(arr1min>=arr2min || arr1max<=arr2max){
//         return true;
//       }else{
//         return false;
//       }

//  }
//  console.log(carNest([1,22,3,4],[0,66]));

//how to write magic array

//1.first cheak if the given numbers are prime or not and creat variable to store the sum of the prime numbers
//2. then if there is any prime numbers then their sum must be equal to the first array element if there is no prime number in the array the first element of the array must be 0

// function isMagicArray(arr) {
//   var sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     if (num == 2) {
//       sum = sum + num;
//     }
//     var isPrime = true;
//     if (num > 2) {
//       for (j = 2; j < num / 2 + 1; j++) {
//         if (num % j == 0) {
//           // sum = sum + num;
//           isPrime = false;
//         }
//       }
//       if (isPrime) {
//         sum = sum + num;
//       }
//     }
//   }
//   if (arr[0] == sum) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(isMagicArray([8, 5, 5, -5, -2, 3]));

// function isPrime(num){
//     if(num < 2){
//         return false;
//     }else{
//         for( let i=2; i<=Math.sqrt(num);i++){
//               if(num % i ==0){
//                 return false;
//               }
//         }
//         return true;
//     }
// }

// function isMagicArray(arr){
//     let SumOfPrime =0;
//     for( let i = 0; i < arr.length; i++){
//         if(isPrime(arr[i])){
//   SumOfPrime = SumOfPrime + arr[i];
//         }
//     }
//     if (SumOfPrime === arr[0]) {
//       return 1;
//     } else {
//       return 0;
//     }
// }
// console.log(isMagicArray([8, 5, 5, -5, -2, 3]));
 
// function Sort(a){
//    let  numbers = a;
//    let checker=true;
//    while(checker){
//     checker=false;
   
//      for(let i=0; i<numbers.length -1; i++ ){
//        if(numbers[i]>numbers[i+1]){
//         checker = true;
//         let temp = numbers[i];
//         numbers[i]=numbers[i+1];
//         numbers[i+1]=numbers[i]
//         numbers[i+1]= temp
// ;       }
//      }
//     }
//       return numbers;
// }
// let a=[12,9,33,5,89]
// let test=Sort(a)
// console.log(test);








