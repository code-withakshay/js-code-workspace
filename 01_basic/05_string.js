const name="Akshay";
const repoCount=50;

console.log(`My name is ${name} my repo count is ${repoCount}`); //recommended to use this types of output statement.

const gameName=new String('JavaScript'); // String decleration 
// console.log(gameName[0]);//P
// console.log(gameName.__proto__);//{} Not Empty Object

// console.log(gameName[0]);// J

//+++++++++++++++++++++++++ toUpperCase() Method ++++++++++++++++++++++++++++++++++++++++++++++

// console.log(gameName.toUpperCase());// JAVASCRIPT  It will return String in UpperCase letter. 
// console.log(gameName.length);// 10   It will return length of String.

//++++++++++++++++++++++++++ charAt() & indexOf() Method +++++++++++++++++++++++++++++++++++++++

// console.log(gameName.charAt(2));// V   It will return character of index which is present of string 
//  console.log(gameName.indexOf('a'));// 1  It will return index of character which is present of string

//+++++++++++++++++++++++++++ substring() Method ++++++++++++++++++++++++++++++++++++++++++++++++

//const newString=gameName.substring(0,4); //Not allowed (treats negative as 0) 
// console.log(newString);//Java

//++++++++++++++++++++++++++++ slice() Method +++++++++++++++++++++++++++++++++++++++++++++++++++

//const anotherString=gameName.slice(0,4); //Allowed (counts from end)
// console.log(anotherString); //Java

//const anotherString1=gameName.slice(-6); //Allowed (counts from end)
// console.log(anotherString1); //Script

//+++++++++++++++++++++++++++ trim() Method ++++++++++++++++++++++++++++++++++++++++++++++++++++

//const newStringOne="  Akshay  ";
// console.log(newStringOne);//   Akshay
// console.log(newStringOne.trim());//Akshay (It will Remove all extera space in String "start & end")

//+++++++++++++++++++++++++ replace() Method +++++++++++++++++++++++++++++++++++++++++++++++++++++

//const url="https://localhost:9090/akshay%29kumar";

//const newUrl=url.replace('%29','-'); // It is used to replace character which is present in String. like('%29' replace with '-')
// console.log(newUrl); //https://localhost:9090/akshay-kumar
// console.log(newUrl.includes("akshay"));// true (if value exist in String than return true)
// console.log(newUrl.includes("alia"));// false (if value not exist in String than return false)

// const a = "a";
// const b = "b";
// if (a < b) {
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

//+++++++++++++++++++++++++++++ at() Method  +++++++++++++++++++++++++++++++++++++++++++++++++

// const sentence='JavaScript is browser based language';

// let index=12;
// console.log(`An index of ${index} return of character ${sentence.at(index)}`);//An index of 12 return of character s

// let newIndex=-10
// console.log(`An index of ${index} return of character ${sentence.at(newIndex)}`);//An index of 12 return of character d

// //This method allows for positive and negative integers. Negative integers count back from the last string character.

//++++++++++++++++++++++++++++ charCodeAt() Method +++++++++++++++++++++++++++++++++++++++++++++++++++

// const sentence='JavaScript is lossly type chicking language';

// console.log(sentence.charCodeAt(1)); //97  It will return Unicode of character (for ex: 'a' Unicode = 97)
// console.log(sentence.charCodeAt(88)); //NaN Because, if index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.

// let index=11;

// console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);//Character code 105 is equal to i

//+++++++++++++++++++++++++++++ concat() Method +++++++++++++++++++++++++++++++++++++

// const str1="Akshay";
// const str2=" Kumar";

// console.log(str1.concat(str2)); //Akshay Kumar  It is used to concat two String 
//                                                 It will return new String

//++++++++++++++++++++++++++++ includes() Method ++++++++++++++++++++++++++++++++++++++ 

// const sentence='Ram is good guys.';
// const newSentence=sentence.includes('good'); // It returns true if the search string is found anywhere within the given string; otherwise, it returns false.
// console.log(newSentence); //true  

// const newSentenceOne=sentence.includes('bad');
// console.log(newSentenceOne);//false 

// const newSentenceTwo=sentence.includes('Good');//Because, The includes() method is case sensitive.
// console.log(newSentenceTwo);//false  

// const sentence='The quick brown fox jumps over the lazy dog.';

// let word='fox';
// console.log(`The word ${word} ${sentence.includes(word)?"is":"is not"} in the sentence.`);//The word fox is in the sentence.

// word='box';
// console.log(`The word ${word} ${sentence.includes(word)?"is":"is not"} in the sentence.`);//The word box is not in the sentence.

//+++++++++++++++++++++++++++ 


