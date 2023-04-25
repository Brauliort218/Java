// JavaScript Variable Declaration
var myFirstVariable; // camelCasing

// Initialization 
var patientId; // delcaring my variable
patientId = 120024; // initilizing the variable
console.log(patientId);

var lastName; // declare
lastName = "Tucker"; // initialize
console.log(lastName);

// re-initialize (reassigning)
lastName = "slegers";
console.log(lastName);
// lastname: 0x0000000 ["Slegers"]
 
// banana: 0x0000001 ["Tucker"]

// Var and Hoisting
programmer = "Ada Lovelace"
var programmer;
console.log("programmer:", programmer);

// Let and Hoisting
let jsVersion; 
jsVersion = "es12";
console.log("Let", jsVersion)
// let has to be declared before it can be initialized 

// Const and Re-initialization
const humansBestFriend = "cat";
//  humanBestfriend = "dog"
// Cannot reinitialize a const variable as it's constant

const gratuityPercentage = .2;
let mealCost = 30;