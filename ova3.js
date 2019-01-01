//1
var a = 10, b = 20;
if(a == b){
  console.log("siffrorna är detsamma, grattis!");
}
else {
  console.log("oh nej… siffrorna är olika");
}
//2
if(a != b){
  console.log("Siffrorna är inte det samma !");
}
else {
  console.log("Siffrorna är detsamma");
}
//3
var language = window.prompt("Choose a language");
if(language == "English" || language == "Swedish" || language == "Bangla" || language == "Mandarin" || language == "Hindi"){
  console.log("Välkommen " + language);
}
else {
  console.log("Denna person verkar kunna ett språk vi inte behärskar");
}
//4
var result = [10,20,30,40,50];
var i;
for(i = 0; i < result.length; i++){
  if(result[i] > 15 &&  result[i] <= 30) {
    console.log("One person got " + result[i] + " and ar Godkänt ");
  }
  else if (result[i] >= 40) {
    console.log("Another person got " + result[i] + " and ar Väl godkänt ");
  }
  else {
    console.log("Another person got " + result[i] + " and ar Underkänt ");
  }
}
//5
var leftLeg = ['nere','böjt','highkick'], rightLeg = ['nere','böjt','highkick'], body = ['Ligga','sitta','stå'], c;
for (c = 0; c < leftLeg.length || c < rightLeg.length || c < body.length; c++){
  if(body[c] == "sitta" || leftLeg[c] == "böjt" || rightLeg[i] == "highkick"){
    console.log("Roboten " + body[c] + " ner,  har vänster ben " + leftLeg[c] + " och höger ben " + rightLeg[i] + " och är påväg att göra en piroett.");
  }
  else {
    console.log("Roboten står upp, har vänster ben böjt och höger ben böjt och laddar upp för något riktigt speciellt");
  }
}
//6
for (c = 0; c < leftLeg.length && c < rightLeg.length && c < body.length; c++){
  if(body[c] == "sitta" && leftLeg[c] == "böjt" && rightLeg[i] == "highkick"){
    console.log("Roboten " + body[c] + " ner,  har vänster ben " + leftLeg[c] + " och höger ben " + rightLeg[i] + " och är påväg att göra en piroett.");
  }
  else {
    console.log("Roboten står upp, har vänster ben böjt och höger ben böjt och laddar upp för något riktigt speciellt");
  }
}
//7
var password = window.prompt("Write your password"), repeatPassword = window.prompt("Repeat your password");
if(password === repeatPassword){
  window.alert("Thanks, your password are exactly yhe same");
}
else {
  window.alert("Obs, your password are not same");
}
//8
console.log(Math.random());
//The function returns a floating-point, random number in the range 0–1. It cannot be chosen or reset by the user.
//9
var n = Math.random();
if(n < 0.5){
  console.log(n);
}
else {
  console.log("Hemlig");
}
//10
var money = 550, kattbruk = Math.floor(65.99), numKattbruk = money/kattbruk;
if(kattbruk > money){
  console.log("Jag måste gå hem och hämta pengar");
}
else {
  console.log("Jag kan köpa " + Math.floor(numKattbruk) + " kattburkar.");
}
//11
var singer = window.prompt("Write a singer name");
if(singer == "michael jackson"){
  var answer1 = window.prompt("When did he born?");
  console.log(answer1);
  var answer2 = window.prompt("When did he die?");
  console.log(answer2);
  var answer3 = window.prompt("Where did he born?");
  console.log(answer3);
  var answer4 = window.prompt("Where did he die?");
  console.log(answer4);
  var answer5 = window.prompt("What was his cause of death?");
  console.log(answer5);
}
else {
  var answer6 = window.prompt("When did he born?");
  console.log(answer6);
  var answer7 = window.prompt("When did he die?");
  console.log(answer7);
  var answer8 = window.prompt("Where did he born?");
  console.log(answer8);
  var answer9 = window.prompt("Where did he die?");
  console.log(answer9);
  var answer10 = window.prompt("What was his cause of death?");
  console.log(answer10);
}
//12
var amount = window.prompt(" Hur mycket vill du spara?"), rate = window.prompt("Vad har du för ränta på besparingen?"), profit = (amount * rate) * 5, bank = (amount * 0.2) * 5, difference = profit - bank;
if (profit > bank){
  console.log("Du fick på din besparing på " + amount + " kronor med årsränta av " + rate + " procent ihopa resultatet " + profit + " alltså hade du tjänat mer på att satt in det på banken.");
  console.log("Du gick alltså plus " + difference + " kronor.");
}
//13
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

for (var z = 0; z < 5; z++) {
  var result = getRandomInt(1, 100);
  var guess = window.prompt("Guess 1: 100");
if(guess > result){
  console.log("Higher");
}
else if (guess == result) {
  console.log(guess + " var rätt svar! Bra jobbat! Du fixade det på fjärde försöket.");
} else {
  console.log("Lower");
}
}
console.log("Good try, you can try maximum 5 times");
//14
var g = 5, h = 4;
function bigNumber () {
  g > h ? console.log(g + " is bigger") : console.log(h + " is bigger");
}
console.log(bigNumber());
