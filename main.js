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

// function getNewstring(myString){     //תתקן את הקוד הזה
//     sum ="";
//     for(i=0;i<myString.length; i++){
//         sum+=i + "," + myString[i];
//     }
//     return sum;
// }

// function getBiggerLength(str){    תשאל את יעקב על השאלה הזאת
//     var maxLength = "";
//     var strValue = "";
//     for(var i=0; i<str.length; i++){
//         if(str[i]==":"){
//             startIndex=i+1;
//         }
//         if(str[i]==","){
//             endIndex=i+1;
//             strValue = str.substring(startIndex, endIndex)
//         }
//         if(str.length==i+1){
//             endIndex=i+1;
//             strValue = str.substring(startIndex, endIndex)
//         }
//         if(strValue.length > maxLength.length){
//             maxLength = strValue;
//         }
//     return maxLength;
// }
// }


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
//           return Astring.indexOf("a")
//         }
//     }
//     return "not found"
// }

// function trueOrfalse(mystring){
//     for(var i= 0; i<mystring.length; i++){
//         if(mystring[i]== "r"){
//             return true
//         }
//     }
//     return false

// }

// function stringAndletter(str,letter){
//     for(var i =0;i<str.length;i++ ){
//         if(str[i]==letter){
//            return true 
//         }  
//     }
//     return false
// }

function someFunc(str,letter){
    for(var i =0; i<str.length; i++){
        if(str[i]==letter){
            console.log(str.indexOf(letter))
        }
    }
        return str.lastIndex(console.log("letter is not in the string"))
}



//שאלה לפני אחרונה


// שאלה אחרונה
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



