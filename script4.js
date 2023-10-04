//       !!!!!!!!!!!! assigment 26-30 !!!!!!!!!!!!  


// ?Q1 answer

let text;
let text1= prompt("enter a positive number");

if ( text1 >= 0 ){
document.writeln("floor value : " + Math.floor(text1)+"<br>")
document.writeln("ceil value : " +Math.ceil(text1)+"<br>")
document.writeln("Round off value : " + Math.round(text1)+"<br>")
document.writeln("value : " +(text1)+"<br>") }

else if (text1 < 0 )
document.writeln("wrong value");

// ?Q2 answer

let text;
let text1= prompt("enter a positive number");

if ( text1 <= 0 ){
document.writeln("floor value : " + Math.floor(text1)+"<br>")
document.writeln("ceil value : " +Math.ceil(text1)+"<br>")
document.writeln("Round off value : " + Math.round(text1)+"<br>")
document.writeln("value : " +(text1)+"<br>") }

else if (text1 > 0 )
document.writeln("wrong value");

// ?Q3 answer

console.log(Math.abs(-4));
console.log(Math.abs(5));


// ?Q4 answer


var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

console.log("Dice value is : "+numberOfStars)



// ?Q5 answer

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);

console.log(numberOfStars)
if( numberOfStars > 1 ){

      console.log("the fliped coin is tails")}

else if (numberOfStars = 1) 
      console.log("the fliped coin is heads")


// ?Q6 answer

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);

console.log("Random number from 100 to 1 : "+numberOfStars)

// ?Q7 answer


function parseWeight() {
      var userInput = prompt("Please enter your weight:");

      var regex = /^(\d+(\.\d+)?)(kgs?|kilograms?)?$/i;

      var match = userInput.match(regex);

      if (match) {
          var weight = parseFloat(match[1]);
          var unit = match[3] || "kgs";
          alert("Your weight is: " + weight.toFixed(2) + " " + unit);
      }
       else {
          alert("Invalid input. Please enter a valid weight.");
      }
}

// ?Q8 answer

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var numberOfStars = Math.floor(improvedNum);
let text4 = prompt("enter a number between 1 to 10")

console.log(numberOfStars)
if( numberOfStars == text4 ){
      console.log("congragulation your answer is correct")}
else if (numberOfStars != text4) 
      console.log("try again your answer is wrong");


//       !!!!!!!!!!!! assigment 31-34 !!!!!!!!!!!!  

// ?Q1 answer

var today = new Date(); 
console.log(today)

// ?Q2 answer

var month =["janurary","feburary","march","april","may","june","july","august","september","october","november","december"]
var d = new Date();
var currentMonth = d.getMonth();
let monthname = month[currentMonth]

 console.log("Current month is : "+monthname)

// ?Q3 answer

var day =["sun","mon","tue","wed","fri","sat"]
var d = new Date();
var currentday = d.getDate();
let datename = day[currentday]

 console.log("Current day is : "+datename)


// ?Q4 answer

let text5 = prompt("enter a day")

if (text5 != "saturday"&&"sunday") 
console.log("Its a working day")
else if(text5 == "saturday","sunday")
console.log("Its a fun day");

// ??OR

var day =["sun","mon","tue","wed","fri","sat"]
var d = new Date();
var currentday = d.getDate();
let datename = day[currentday]

 console.log("Current day is : "+datename)
 if (currentday != [1],[2],[3],[4])
 console.log("Its a working day")
else if(currentday =[0],[5])
console.log("Its a fun day")


//  ?Q5 answer    


 var todayDate = new Date();
 var Todaymilli = todayDate.getTime();
 var todayMin = todayDate.getMinutes();
 var diff = Todaymilli - todayMin;
 var diffMin = diff/(1000*60*60);
 var accurateMin = Math.floor(diffMin);
 
  
 document.write("Current Date: " + todayDate);
 document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
 document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

//  ?Q6 answer
 
 
 var d = new Date();
 var Hrs = d.getHours();

 console.log(Hrs)
 if (Hrs >= 0 && Hrs <=12)
          console.log(" Its AM ");
        else if (Hrs > 12 && Hrs <= 24)
          console.log(" Its PM ");


//  ?Q7 answer


 let dateobj =
 new Date('October 13, 1996 05:35:32');
dateobj.setDate(15);
let B = dateobj.getDate();
console.log(B);


//  ?Q8 answer

var laterDate = new Date(2020, 11, 31);


// ?Q9 answer

var ramadanStartDate = new Date(2015, 5, 18); 
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassed + " days");

// ?Q10 answer

var referenceDate = new Date('2000-01-01');
var startDate = new Date('2015-01-01');
var timeDifference = startDate - referenceDate;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds");

// ?Q11 answer

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Current Date and Time: " + currentDate);


//  ?Q12 answer

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
var formattedDate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
alert("100 years ago, the date was: " + formattedDate);

// ?Q13 answer

 var d = new Date().getFullYear();
 let text6 =  prompt("enter your birth yeaar")
console.log("your birth year is: "+text6)
 console.log( "your age is : "+  Math.abs(text6 - d));


// ?Q14 answer

document.write("K.Electric bill <br>")
document.write("Coustumer name : Mr Hello <br>")
var month =["janurary","feburary","march","april","may","june","july","august","september","october","november","december"]
var d = new Date();
var currentMonth = d.getMonth();
let monthname = month[currentMonth]

 document.write("Month Bill  : "+monthname+"<br>")
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 1000) + 1;
var numberOfStars = Math.floor(improvedNum);

document.write("Used Units : "+numberOfStars+"<br>")

var price = 16
document.write("Per Unit price : "+ price + "<br>")

document.write("Net Amount Payable Bill(with in due date) : "+ price*numberOfStars +"<br>")

var late = 350
document.write("Late Amont Charge : "+ late + "<br>")

document.write("Net Amount Payable Bill(with Late Charges) : "+ ((price*numberOfStars)+late) +"<br>")


