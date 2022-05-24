// function myString(mystring){
//     for (var i = 0; i < mystring.length; i++) {
//         console.log(mystring[i]);
//     }       
//     }
// myString("Netanel Yaso is the KING");

// function changeString(strfromparam){
//     var newString = "";
//     for(var i=0 ;i<strfromparam.length ; i++){
//           newString+= strfromparam[i]+i;
//         }
//         return newString;
//     }
// console.log(changeString("hello world"));

// function evevnString(text){
//     var newstring= "";
//     for(var i=0;i<text.length;i++){
//         if(i%2==0){
//             newstring += "2";
//         } 
//         else{
//         newstring += text[i];
//         } 
//     }
//     return newstring;
// }
// console.log(evevnString('hello'));

// function printName(){
//     var i = 0;
//     var name = prompt;
//     if()
// }
// function NameString(){
// var name=prompt('enter your name');
// if(name[0]== "A") {
//     console.log("hello");
// }
// else{
//     console.log("bye");
// }
// }
// NameString();

// function lastNamestring(){
//     var lastname= prompt();
//     if(lastname[lastname.length-1]== "E"){
//         console.log("yes");
//     }
//     else{
//         console.log("no");
//     }
// }
// lastNamestring();

// function newString(x){
//  return x.toUpperCase();
// }
// newString("hello");

//  function getNewstring(myString){     //תתקן את הקוד הזה
//      sum ="";
//      for(i=0;i<myString.length; i++){
//          sum+=i + "." + myString[i];
//      }
//      return sum;
//  }

//  function getBiggerLength(str){    // תשאל את יעקב על השאלה הזאת
//      var maxLength = "";
//      var strValue = "";
//      for(var i=0; i<str.length; i++){
//          if(str[i]==":"){
//              startIndex=i+1;
//          }
//          if(str[i]==","){
//              endIndex=i+1;
//              strValue = str.substring(startIndex, endIndex);
//          }
//          if(str.length==i+1){
//              endIndex=i+1;
//              strValue = str.substring(startIndex, endIndex);
//          }
//          if(strValue.length > maxLength.length){
//              maxLength = strValue;
//          }
//      return maxLength;
//  }
//  }



//שאלות ראשונות צריכות להיות פה


// function longerThanfive(myString){
//     for(var i=0; i<myString.length; i++){
//         if(myString.length >5){
//             return "long";
//         }
//     }
//     return "short";
// }

// function ifAfound(Astring){
//     for(var i =0; i<Astring.length; i++){
//         if(Astring[i]=="a"){
//           return Astring.indexOf("a");
//         }
//     }
//     return "not found";
// }

// function trueOrfalse(mystring){
//     for(var i= 0; i<mystring.length; i++){
//         if(mystring[i]== "r"){
//             return true;
//         }
//     }
//     return false;

// }

// function stringAndletter(str,letter){
//     for(var i =0;i<str.length;i++ ){
//         if(str[i]==letter){
//            return true ;
//         }  
//     }
//     return false;
// }

// function letterInString(str,letter){   //תשאל את יעקב על השאלה הזאת
//     var indexletter = 0
//     indexletter = str.lastIndexOf(letter)
//     if(indexletter != -1){
//         console.log(indexletter)
//     }
//     else{
//         console.log('אין את התו בסטרינג')
//     } 
//     }
//   function returnletters(x){   
//     return x.substr(0,3); 
//  } 
//     console.log(returnletters('sayonara'));

//  function returnFromY(word){
//     for(var i=0; i<word.length; i++){
//         if(word[i]=='y'){
//              return word.substr(i,4); 
//         }  
//     }   
//  }
//  console.log(returnFromY('sayonara'));

// function returnAllletters(x){
//     for(var i = 0; i<x.length; i++){
//         if(x[i]=='o'){
//             return x.substr(i);
//         }
//     }
// }
// console.log(returnAllletters('sayonara'));

// function someFunc(str,index){       
//         if(index>str.length){
//             return "האינדקס גדול מידי"
//        }
//         return str.substr(index,3)
//     }
      

// function printTwoNum(str,num1,num2){     //תחזור לזה  
//    if(num1<num2){
//        str.substring(num1,num2) 
//    }
    
// }
// printTwoNum("netanel yaso",2,5)    

// function printThreechars(word){ 
//   return word.substring(0,3)     
// }    

// 

// function printFromO(word){
//     for(var i =0; i<word.length; i++){  
//    if(word[i] == "o") {
//        return word.substring(i)
//     }
//   }
// }

// function fistAndLastName(){
//     var fullname = prompt()
//     var firstname = ""
//     var secondname = ""
//     console.log(fullname.length)
//     for(var i =0; i< fullname.length; i++){
//         if(fullname[i]==" "){
//             console.log(true);
//           firstname =  fullname.substring(fullname[0],fullname.indexOf(" "))
//           secondname = fullname.substring(fullname.indexOf(" ")) 
//         }
//         else{
//             console.log(false);
//             firstname =  fullname.substring(fullname[0],fullname.indexOf(" "))
//             secondname = fullname.substring(fullname.indexOf(" ")) 
//         }
//     }
//     console.log(firstname,secondname)

// }

// function sameStrings(string1,string2){   
    
//     if(string1.toLowerCase()==string2.toLowerCase()){
//         console.log('they are equal')
//     }
// }
// sameStrings("netanel","Netanel")

// function theSameStrings(string1,string2) {
//     if(string1.toUpperCase()==string2.toUpperCase()){
//         console.log('they are equal')
//     }
// }
// theSameStrings('yaso','YASO')

// function printLongestName(){
//     var firstname = prompt()
//     var lastname = prompt()
//     if(firstname.length>lastname.length){
//         console.log(firstname);
//     }
//     else{
//         console.log(lastname);
//     }
// }
// printLongestName()

// function printName(){
//     var fname = prompt('enter first name')
//     var lname = prompt('enter last name')
//     for(var i=0; i<fname.length; i++){
//         if(fname[i]=='a'){
//             console.log('the letter a is in the name');
//         }
//         if(lname.includes('api')){
//         console.log(true + 'the string api is in')
//         }
//     }
// }
// printName()

// function longString(myString){
//     if(myString.length > 5){
//         return 'long'
//     }
//     return 'short'
// }
// longString('netanel')

// function contryName(name1){
//     if(name1.length<3){
//         return 'yes'
//     }
//     return 'no'
// }

// function stringAndchar(myString,char){
//     if(myString.length >6){
//         return myString
//     }
//     return myString.indexOf(char)
// }

// function fullNameString(firstname,lastname) {
//     return firstname[0]+ '.'+' '+ lastname.toUpperCase()
// }

// function lastName(lastname1,lastname2) {
//     if(lastname1.length>lastname2.length){
//        console.log(lastname2.toLowerCase())
//         return lastname1
//     }
// }




// function nameAndchar(name1,char1) {
//     for(var i=0; i<name1.length; i++){
//         if(name1[i]==char1){
//             return name1
//         }
//     }
//     return "the char is not in"
// }

// function namesString(fullName){
//     var spaceCounter = 0;
//     for(var i =0; i< fullName.length; i++){
//         if(fullName[i]==" "){
//             spaceCounter++;
//         }
//     }
//     if(spaceCounter==0){
//         return "one word";
//     }
//     else if(spaceCounter==1){
//         return "two word";
//     }
//     else if(spaceCounter>=2){
//         if(spaceCounter>2){
//             return "three word";
//         }
//     }
// }



