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
//myFunction(); // calling function


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                        Memory
   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Stack(Primitive datatypes),  Heap(Non-Primitive datatypes/Reference datatypes)

let name="Akshay kumar";
let anotherName=name; //anotherName gets a copy of name's value

anotherName="Alia";

console.log(name);// Akshay kumar
console.log(anotherName);// Alia

// Primitive types (like number, string, boolean, null, undefined, symbol, and bigint)
//are stored in stack memory and are copied by value.

//++++++++++++++ Heap Memory +++++++++++++++++

let userOne={
    email:"akshay@gmail.com",
    upi:"ak@sbi",
}

let userTwo=userOne;

userTwo.email="alia@google.com";
console.log(userOne);//{ email: 'alia@google.com', upi: 'ak@sbi' }

console.log(userTwo);//{ email: 'alia@google.com', upi: 'ak@sbi' }

//Reference types (like objects, arrays, functions)
//are stored in heap memory, and variables hold references (pointers) to them.
