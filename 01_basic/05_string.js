const name="Akshay";
const repoCount=50;

console.log(`My name is ${name} my repo count is ${repoCount}`); //recommended to use this types of output statement.

const gameName=new String('JavaScript'); // String decleration 
// console.log(gameName[0]);//P
// console.log(gameName.__proto__);//{} Not Empty Object

// console.log(gameName[0]);// J
// console.log(gameName.toUpperCase());// JAVASCRIPT
// console.log(gameName.length);// 10
// console.log(gameName.charAt(2));// V
 console.log(gameName.indexOf('a'));// 1

const newString=gameName.substring(0,4); //Not allowed (treats negative as 0) 
console.log(newString);//Java

const anotherString=gameName.slice(0,4); //Allowed (counts from end)
console.log(anotherString); //Java

const anotherString1=gameName.slice(-6); //Allowed (counts from end)
console.log(anotherString1); //Script

const newStringOne="  Akshay  ";
console.log(newStringOne);//   Akshay
console.log(newStringOne.trim());//Akshay (Remove all extera space in String "start & end")

const url="https://localhost:9090/akshay%29kumar";

const newUrl=url.replace('%29','-');
console.log(newUrl); //https://localhost:9090/akshay-kumar
console.log(newUrl.includes("akshay"));// true (if value exist in String than return true)
console.log(newUrl.includes("alia"));// false (if value not exist in String than return false)