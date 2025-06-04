// Primitive

/* 7 Types of primitive datatypes : String, Number, Boolean, null, undefined,
Symbol, BigInt  */


const score=100; //int types
const scoreValue=100.50; //float types

const isLoggedIn=false; //boolean types
const outSideTemp=null; //null types
let userMail; // undefined types

const id=Symbol('123'); //Symbol return value different types(e.g., String, Number and etc)
const anotherId=Symbol('123'); //Symbol return value different types(e.g., String, Number and etc)

//console.log(id===anotherId); // false

//console.log(id); //id is now a constant holding this unique symbol like (Symbol(123))
//console.log(anotherId);//anotherId is now a constant holding this unique symbol lick (Symbol(123))

//Both  Symbol creates a new unique symbol.
//Even if two symbols have the same description, they are stored as different entries in memory.

const bigNumber=13762838923729902n; // store for large Number 
//console.log(bigNumber);

//Reference (Non Primitive)

/* Array, Objects, Functions */

const heros=["Shaktiman","naagraj","doga"];  //This is Array

// console.log(heros);

const details={
    name:"Akshay",
    age:23,
    height:5.10,
    add:'new Delhi',
}; // This is Object

//console.log( typeof userMail);

// If check Datatypes of any variable  please visit this link.
//https://262.ecma-international.org/5.1/#sec-11.4.3


const myFunction=function(){
    console.log("My name Akshay Kumar");
    
}
myFunction(); // calling function
