//1
window.alert("hej, välkommen till min sida");
//2
window.confirm("kan denna webbplats samla in data för att kundanpassa innehållet till er? tryck avbryt om ni inte vill det.");
//3
//Om Ok, Tack! Välkommen till vår websida.
//Om avbryt, Tack! Vi respekterar dig.
//4
window.prompt("Vad vill du att din karaktär ska heta?");
//5
function test() { return (134 * 7); }
console.log(test());
//document.write(test());
//The previous code returns the product of 134 * 7 and that is 938
//6
var myName = "Kalle";
console.log("Jag heter", myName);
document.write("Jag heter ", myName);
//7
var userChoice = window.prompt("Vad vill du att din karaktär ska heta?");
window.alert(userChoice);
//8
var userAnswer = window.confirm("kan denna webbplats samla in data för att kundanpassa innehållet till er? tryck avbryt om ni inte vill det.");
if(userAnswer) {window.alert("Good");} else {console.log("användaren accepterade inte alternativet");}
//9
//by using console.clear();
//10
//console.error(); Outputs an error message to the Web Console.
//11
//console.warn(); Outputs a warning message to the Web Console.
//1
var antalKortlek = "52 kort", extraKort = "3 jokrar";
console.log("Denna kortleken innehåller " + antalKortlek + " och " + extraKort + ".");
//2
/* Boolean
Null
Undefined
Number
String
Symbol*/
//3
var walletOne = 200, walletTwo = 33443, walletThree = 9834, walletFour = 35, sum = walletOne + walletTwo + walletThree + walletFour;
console.log(sum);
//4
var currentAge = 28, ageBy = 2050;
console.log((ageBy - 2018) + currentAge);
//5
var C = 30, F = (9 * C + 160)/5;
console.log("Om celcius är " + C + "C kommer farenheit vara " + F + "F");
//6
var a = 1, b = "1", add = a + b;
console.log(add);
//7
var R = window.prompt("What is the radius?"); var circlePerimeter = 2 * 3.14 * R;
console.log(alert("Circle Perimeter is " + circlePerimeter));
