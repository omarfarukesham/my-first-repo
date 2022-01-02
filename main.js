/* var date = new Date()

var today = date.getDay()

switch(today){
    case 0:
    console.log('Today is Sunday')
    break;

    case 1:
    console.log('Today is Monday')
     break;
     case 2:
    console.log('Today is Tuseday')
    break;

    case 3:
    console.log('Today is Wednesday')
    break;

    case 4:
    console.log('Today is Thursday')
    break;

    case 5:
    console.log('Today is Friday')
    break;

    case 6:
    console.log('Today is Saturday')
    break;
} */

// loops while syntex and usages

// let myArray = ['Home', 'student', 'study','teacher', 'Mother']
// let Array_length = myArray.length;

// for(let i = Array_length - 1; i>=0; i--){
//     console.log(myArray[i])
// }

//  let i = Array_length;

// while(i <= Array_length){
//     console.log(myArray[i])
//     i--
// }

// var myPrompt = Number(prompt("Enter a number:"));

// while(myPrompt < 10){
//     alert('Please make sure a larger Number');
//     myPrompt = Number(myPrompt("Enter a number:"));
// }
// if(myPrompt >= 10){
//     alert('Congratulations')
// }


// for(var i = 0 i>100 ; i++){
//     console.log(i);
// }

// for(var i = 0; i<=100; i++){

//     if( i%2 == 1 ){
//         console.log(i)
//     }
// }

// let arr = [ "fred", "tom", "bob" ]

// for(let i of arr){
//     console.log(i)

// }

// for(let i = 0; i<10; i++){
//     console.log( i + ' Omar faruk' )
// }

// let i = 0;
// while(i<10){
//     console.log( i + 'this is while loop')

//     i 
// }

// const a = [1,2,3];
// const b = [4,5,5];

// // const c = a.concat(b);
// // console.log(c);
//  const c = [...a, ...b];
//  console.log(c)

// const n = 4.4558
// //console.log(Math.round(n))
// const rnd = Math.round(Math.random()*4+1)

// console.log(rnd)

// const n = 1234567

// var result = n%2 == 0 ? 'Even':'odd'

// console.log(result)

// let myPrompt =  Number(prompt("Enter a Number: "))
 
// if (myPrompt === parseInt(myPrompt, 10)){

// while(myPrompt<10){

//     alert("please enter Bigger number")

//     myPrompt = Number(prompt("enter a number VALID Num"))

// }
// if(myPrompt >= 10)
//     alert('congratulations, Go ahead!')
// }
// else{ 
//     alert("data is not an integer")
// }
   

// pyrimid print nested loop

// var n = 12

// for(var i = 1; i<= n; i++){

//     var result = ' '

//     for(var j = 1; j <= i; j++){
//         result += j + ' '
//     }

//     console.log(result)
// }

// var n = 15;

// for(var i = 1; i <= n; i++){

//     var result = ''
//     for(var j = 1; j<=n; j++){
//         result += '* '
//     }
//     console.log(result)

// }

// for(var i = 0;  i<10; i++){

//     if(i == 3 || i == 7){
//         continue
//     }else{
//         console.log(i)
//     }
// }
 
// var n = 10;
// var str = 10 + ' '
// console.log(str)

// var a = 'omar'
// var b =  'Faruk is working with JavaScript project'
// var c = a.concat(' ', b)



//console.log(c.toUpperCase())
//console.log(c.toLowerCase())
//console.log('   omar is working with a js projects   ')
//console.log(c.split(' '))

// let button = document.querySelector('#button');
// let msg = document.querySelector('#message');

// button.addEventListener('click', ()=>{
//   msg.classList.toggle('reveal');
// })

// addEverntListener code
// let button = document.querySelector('#button')
// let msg = document.querySelector('#message')

// button.addEventListener('click', ()=>{msg.classList.toggle('reveal')

// })

// let arr = [1,3,4,6,7,89,10,23,44]

// find out the odd/even/sum  number from this array
// var sum = 0;
// for(var i = 0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         //console.log(arr[i])
//        sum += arr[i]


//     }
// }
// console.log(sum);v  

// var find = 10
// var isFound = false

// for( var i = 0; i<arr.length; i++){
//     if(arr[i]== find){
//         console.log('Data has found at the index ' + i)

//         isFound = true
//         break;
//     }
// }
// if(!isFound){
//     console.log('Data has not found')
// }


//object introduction and literal object

// var point = {
//     x: 20,
//     y:34,
//     z:44
// }

//  point.m = 444
//console.log(point.z + point.y) // this is called dot notation


// console.log(point.z + point.m)


// object introduction and constructor method

// var obj1 = Object()
// obj1.a = 20

// var obj2 = new Object()

// obj2.m = 444;
// console.log(obj2)

//object comparision

// var obj1 = {a:2, b:3, c: 5}
// var obj2 = {a:2, b:3}

//console.log(obj1 === obj2) out put is false because it is different memmory location

// if(obj1.a == obj2.a && obj1.b == obj2.b){
//     console.log(true)
// }else{
//     console.log(false)
// }

//console.log(JSON.stringify(obj1) == JSON.stringify(obj2))


// object iterate is a powerful element for objec traverse
//console.log('c' in obj2)

// function add(a,b){
   
//     if(a == b){
//         console.log('allow')
//     }else{
//         console.log('Your value is not equal')
//     }
   
// }

// add(30,40)


// const addTwo = (num) => {return num + 2;};

// //example 2
// const addTwo1 = (num) => num + 4;

// const addTwo2 = (num) => num + 10;
// console.log(addTwo1(4))

// const addNum = (num1, num2, num3) => num1 * num2 + num3
//  if(addNum/2 == 0){
//      console.log('you are allow to go next')
//  }
//  else{
//      console.log('sorry you are not allow')
//  }
// console.log(addNum(2,2,2))

// sum of even number from 100 

// var sum = 0

// for(var i = 0; i<100; i++){
//     if(i%2 == 0){
//         sum += i
//     }
// }

// console.log(' Even numbers sum is = ' + sum)

// var isRunning = true

// while(isRunning){
//     var rand = Math.floor(Math.random()*10 + 1)

//     if(rand == 9){
//         console.log('Winner')
//         isRunning = false
//     }else{
//         console.log('You got the number is = ' + rand)
//     }

// }

// let arr_1 = [3,5,22,5,7,2,45,75,89,21,2]
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 

// const sum1 = arr_1.reduce((a, b) => a + b, 0)
// const sum2 = arr_2.reduce((a, b) => a + b, 0)
// const sum  = sum1 + sum2

// console.log(sum)

// let n = 22

// for(var i = 1; i < n; i++){
//     if(i%2 == 0){
//         console.log(i + )
//     }
// }


// var n =  15

// for(var i = 1; i <= n; i++){

//     var result = ''

//     for(var j = 1; j <= i; j++){
        
//         result += j + ' '
//     }

//     console.log(result)
// }

// var n = 4 

// for(var i = 1; i <= n; i++){

//     var result = ''
//     for(var j = 1; j <= n; j++){

//         result += ' * ' 

//     }

//     console.log(result)
// }

// var arr = [1, 2, 4, 44, 54, 5, 7, 8]

// var find = 100

// var isFound = false

// for(var i = 0; i < arr.length; i++){

//     if(arr[i] == find){
//         console.log('Data found at the index of ' + i )
//         isFound = true
//         break;
//     }
   
// }

// if(!isFound){
//     console.log('Data is not found ')
// }

// var arr = [

//     [12,34,55,66],
//     [44,76,88,99],
//     [32,12,22,11]

// ]

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//         console.log('Element ' + i + ':' + arr[i][j])
//     }
// }


// traverse object by for loop in

// var obj = {
//     x: 20,
//     y: 30,
//     z: 60
// }

// console.log(Object.entries(obj))



// // var obj2 = Object.assign({},obj)
// // obj2.x = 100

// console.log(obj)
// console.log(obj2)



// arguments object, array behaviour this a powerful key word which can help us in many ways

// function addAll(){
//     var sum = 0
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }

//     console.log(sum)
// }

// addAll(12,12,14)

// addAll(1,2,3,4,6,7,8,9)

// function something(greet, name){

//     function getFirstname(){
//         if(name){
//             return name.split(' ')[1]
//         }else{
//             return ' '
//         }
//     }

//     var msg = greet + ' ' + getFirstname()
//     console.log(msg)

// }

// something('good morning', 'omar faruk')


//var a = 'abc'

// function x(){
//     //var a = 20 

//     function y(){
//         var a = 10

//         console.log(a)
//     }
//     y()
//     console.log(a)
   
// }

// x()

// function a(){
//     var x = 10 

//     return function b(){
//         console.log(x)
//     }
   
// }

// var abc = a()

// console.dir(abc)

// function a(x, y, cb){

//     return x + y
// }

// var add = a(10,20,function(){

// })
// console.log(add)



// var find = 100

// var isFound = false

// for(var i = 0; i < arr.length; i++){

//     if(arr[i] == find){
//         console.log('Data has found at the index of ' + i)
//         isFound = true
//         break;
//     }
// }

// if(!isFound){
//     console.log('Data is not found on the Array')
// }

//var arr = [22,33,44,55,66,77]

//  var arrFiltered = arr.filter(function(value){
//     return value > 25
// })

// console.log(arrFiltered)

//  var sum = 0

//   var arraySuma = arr.forEach(function(value){
//       return sum += value
//  })

//  console.log(sum)

// var sum = arr.reduce(function(prev, curr){
//     return prev + curr
// })

// var max =  arr.reduce(function(prev, curr){

//     return Math.max(prev, curr)
// },0)

// console.log(sum)
// console.log(max)

// function base(b){

//     function power(n){
//         var result = 1
//         for(var i = 0; i < b; i++){
//             result *= n
//     }
    
//     return result
  
//     }
//     return power
// }

// var base10 =  base(10)

// console.log(base10(2))

// var numGenerator = Math.round(Math.random()*50 +1)

// console.log(numGenerator)

// var n = 11 
// var result  = n%2 == 0 ? 'Even':'Odd'
// console.log(result)

// let myPromt  =  Number(prompt('Enter a valid great number than 10 '))

// if( myPromt === parseInt(myPromt, 10)){

//     while(myPromt < 10){
//         alert('Please Make Sure Larger Num -- ')
//         if(myPromt >= 10){
//             alert('Congratulation ! you enrolled with our system')
//         }
//         let myPromt  =  Number(prompt('Enter a valid great number than 10 '))
      
//     }

//     if(myPromt >= 10){

//         alert('Congratulation ! you enrolled with our system')
//     }

// }else{
//     alert('Your data should be a number')
    
// }


// var n = 2
// for(var i = 0; i < n; i++){
//     var result = ''

//     for(var j = 1; j <= i; j++){
//         result += j + ' '
//     }
//     console.log(result)
// }


// function addAll(){
//     var sum = 0
//     for(var i = 0; i < arguments.length; i++){
//         sum = arguments[i] * arguments[i]
//     }
//     console.log(sum)
// }

// addAll(2,4,4)


//1. Write a JavaScript program that accept two integers and display the larger.
// var n = 30 
// var m = 10 
// if(n > m){
//     console.log(n + ' is greater than ' + m)
// }else if(n = m){
//     console.log( n + ' is equal to ' + m)
// }
// else{
//     console.log( m + ' is greater than ' + n) }





// function multiplyNum(a, b, c){
//     return a*b*c 
// }

// var result = multiplyNum(3,-7,2)
// console.log(result)

// var  x = -3
// var  y = 7
// var  z = -2

// if(x>0 && y > 0 && z > 0){
//     console.log('the sign is +')
// } else if( x < 0 && y < 0 && z < 0){
//     console.log('The sign is -')
// }else if(x < 0 && y >0 && z < 0){
//     console.log('The sign is -')
// }else if( x >0 && y >0 && z < 0){
//     console.log('The sign is -')    
// }else if( x < 0 && y < 0 && z > 0){
//     console.log('The sign is +')    
// }
// else{
//     console.log('the sign is -')
// }

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

// var arr =  [-5, -2, -6, 0, -1]

// var max = arr.reduce(function(a,b){
//     return Math.max(a,b)
// })

// var max = arr.reduce(function(a,b){
//     return Math.max(a,b)
// },0)

// console.log(alert(max))

// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//  for(var i = 0; i < arr.length; i++){
//      if(arr[i]%2 == 0){
//          console.log('Even num is : ' + i)
//      }else if(arr[i]%2 == 1){
//          console.log('Odd num is : ' + i)
//      }
//  }

// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var sum = 0
// for(var i = 0; i < students.length; i++){
//      sum += students[i][1]     
// }

// var expr = sum/students.length
// console.log('Average Mark of Students is : ' + expr)

// if(expr >= 90){
//     console.log('Congratulations!  You got A+')
// }else if(expr >= 80 ){
//     console.log('Congratulations! You got A')
// }else if(expr >= 70 ){
//     console.log('Congratulations! You got A-')
// }else if(expr >= 60 ){
//     console.log('Congratulations! You got B')
// }else if(expr >= 40 ){
//     console.log('Congratulations! You got c')
// }else{
//     console.log('Sorry !, Your result is Failed')
// }

// for(var i = 1; i < 100; i++){

//     if( i%3 === 0 && i%5 === 0){
//         console.log(i + ' FizzBuzz')
//     }else if(i%3 == 0){
//         console.log(i + ' Fizz')
//     }else if(i%5 === 0){
//         console.log(i + ' Buzz')
//     }else{
//         console.log(i)
//     }
 
// }
// n = 6
// for(var i = 0; i < n; i++){
//     var result = ' '
//     for(var j = 0; j < i; j++){
//       result +=  '* '
//     }
//     console.log(result)
// }

// var arr = [1, 2, 3]

// var sqrArr = arr.map(function(value){
//   return value*value
// })

// console.log(sqrArr)

// var arr1 = [2,3,4,5,6,7,8]

// var filterArr = arr1.filter(function(value){
//   return value%2 == 0
// })
// console.log(filterArr)

// var sum = 0
// sqrArr.forEach(function(value){
//   sum += value
// })
// console.log(sum)

// var sum1 = arr1.reduce(function(pre, curr){
//   return pre + curr
// },100)
// console.log(sum1)

// function test(){

//   var msg = 'Hi this clouser and lexical scope study'

//   return function(){
//     console.log(msg)
//   }
    

// }

// var sayMsg = test()

// sayMsg()

//  class Shape{
//    constructor(width, height){
//       this.width = width
//       this.height = height
//    }

//    get area(){
//      return this.calcArea()
//    }
//    calcArea(){
//      return this.width * this.width

//    }

//  }

//  const sqr  = new Shape(12,12)
//  console.log(sqr.area)

// test()

// function test(){
//   console.log('I am test function ')
// }

// var test2 = function test2(){
//   console.log('I am test2 Expression')
// }

// test2()

// function sum(n){
//   if(n == 1){
//     return 1
//   }

//  return n + sum(n-1)
 
// }

// console.log(sum(500))




// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} roars.`);
//   }
// }

// let l = new Lion('Fuzzy');
// l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

// var add = (a,b) => a + b

// console.log(add(12,12))

// Object introduction 

// class Rect {
//     constructor(width,height){
//         this.width =  width,
//         this.height =  height
//     }

//     calArea(){
//         return this.width * this.height
//     }
//     calRang(){
//         return 2*(this.width + this.height)
//     }
// }

// var rect = new Rect(20,20)
// var rect1 = new Rect(40,40)

// console.log(rect.calArea())
// console.log(rect1.calRang())

// let arr = {
//     a: 10,
//     b: 20,
//     point: function(){
//         c: 'This is an object'
//     }
// }
// function* generatorFun(collection){

//     for(let i = 0; i < collection.length; i++){
//       yield collection[i]
//     }

// }

// let arrAy = generatorFun(arr)

// console.log(arrAy.next())
// console.log(arrAy.next())
// console.log(arrAy.next())
// console.log(arrAy.next())

// console.log(arr[Symbol.iterator])

// this keyword  

// var obj = {
//     name: 'Omar',
//     dob: 1986,

//     age: function(curr, msg){
//             console.log(msg + this.name + ' is now ' + (curr - this.dob) + ' Years Old')
//         }
   
// }
//  var faruk ={
//      name: 'FARUK',
//      dob: 1988
//  }

// obj.age.apply(faruk, [2021, 'Hello world '])

// var objTime = {
//     name: 'Omar',
//     age: 35,

//     Timer: function(){
//         setTimeout(function(){
//             console.log(this.name + ' is now ' + this.age + ' Years old')
//     }.bind(objTime), 2000)
    

// }}

// objTime.Timer()

// var arr  = [2,3,4,5]

// arr.push(6)


// console.log(arr)

// function sayHi(){
//     console.log(name)
//     console.log(age)

//     var name = 'js'
//     var age = 21
// }

// sayHi()

//Write a JavaScript function that reverse a number

// var x = 1234
// var arr = Array.from(String(x), Number);

// var arrConvert = arr.reverse()

// console.log(arrConvert)

