// console.log(2>1); //true
// console.log(2>=1); //true
// console.log(2<1); //false
// console.log(2==1); //false
// console.log(2!=1); //true

// console.log("2">1); //true
// console.log("02">1); //true 

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

/* The Reason is that an equality check == and comparisons >, <, >=, <= 
 work differently.

comparisons convert null to a Number, treating it as 0.

That's way(3) null >= 0 is true and (1) null > 0 is false. */




