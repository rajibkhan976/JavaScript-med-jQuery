//1
var car = {};
console.log(car);
//2
//We can create an object in two different ways.
//object constructor
//object literal
//3
//We use the following two ways of creating objects generally
var obj1 = new Object();
var obj2 = {};
//4
var man = {name:'Monjur',age:28};
console.log(man);
//5
var objMetod = {metod: function () {console.log("Hello!");}};
objMetod.metod();
//6
var objMetod2 = {metod: function (param1) {console.log(alert(param1));}};
objMetod2.metod('pelle');
//7
var pass = {};
pass["password1"] = 1;
pass["password2"] = 2;
pass["password3"] = 3;
console.log(pass);
//8
var objFunc = {speed: 0, height: 0, init: function () { speed2 (); height2 ();}};
function speed2 () {objFunc['speed'] += 2; console.log(objFunc['speed']);}
function height2 () {objFunc['height'] += 1; console.log(objFunc['height']);}
objFunc.init();objFunc.init();objFunc.init();
//9
var objFunc3 = {name: 'Farhad', age: 29};
function ova7 (param2) {
  console.log(param2.name);
  console.log(param2.age);
}
ova7 (objFunc3);
//10
var sourav = {};
sourav.name = "Monjur";
sourav.age = 28;
sourav.workpermit = true;
console.log(sourav);
//11
var tanzeem = {};
tanzeem["name"] = 'Tanzeem';
tanzeem["age"] = 26;
tanzeem["workpermit"] = true;
console.log(tanzeem);
//12
var description = {haircolor: 'black', eyecolor: 'blue', complexion: 'fair'};
function physicalDesc (param3) {
  var haircolor = param3.haircolor;
  var eyecolor = param3.eyecolor;
  var complexion = param3.complexion;
  console.log("Haircolor is " + haircolor + ", eyecolor is " + eyecolor + " and complexion is " + complexion);
}
physicalDesc (description);
//13
var description = {haircolor: 'black', eyecolor: 'blue', complexion: 'fair'};
console.log(Object.keys(description));
//14
var description = {haircolor: 'black', eyecolor: 'blue', complexion: 'fair'};
console.log(Object.keys(description).length);
//15
var cards = ["2","3","4","5","6","7","8","9","10",
              "2","3","4","5","6","7","8","9","10",
              "2","3","4","5","6","7","8","9","10",
              "2","3","4","5","6","7","8","9","10",
              "Ace", "Jack","Queen","King",
              "Ace", "Jack","Queen","King",
              "Ace", "Jack","Queen","King",
              "Ace", "Jack","Queen","King"];
var cardsObj = {}, player1 = [], player2 = [], player3 = [], player4 = [];
for (var cardDeck = 0; cardDeck < cards.length; cardDeck++) {
  cardsObj[cardDeck] = cards[cardDeck];
}
console.log(cardsObj);
console.log(Object.keys(cardsObj).length);
for (var distribute1p = 0; distribute1p < 13; distribute1p++) {
  var randDist1 = Math.floor(Math.random() * Object.keys(cardsObj).length);
  console.log(randDist1);
  console.log(cardsObj[randDist1]);
  player1.push(cardsObj[randDist1]);
  var randDist2 = Math.floor(Math.random() * Object.keys(cardsObj).length);
  console.log(randDist2);
  console.log(cardsObj[randDist2]);
  player2.push(cardsObj[randDist2]);
  var randDist3 = Math.floor(Math.random() * Object.keys(cardsObj).length);
  console.log(randDist3);
  console.log(cardsObj[randDist3]);
  player3.push(cardsObj[randDist3]);
  var randDist4 = Math.floor(Math.random() * Object.keys(cardsObj).length);
  console.log(randDist4);
  console.log(cardsObj[randDist4]);
  player4.push(cardsObj[randDist4]);
}
for (var remove = 0; remove < 52; remove++) {
  delete cardsObj[remove];
}
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(cardsObj);
//16
var uni = {uni: 'LNU',city: 'Vaxjo'};
var stu = {name: 'Sourav', country: 'Bangladesh'};
var edu = Object.assign(uni,stu);
console.log(edu);
//17
var use = {username: 'rajibkhan976', password: '123456'};
Object.freeze(use);
use.username = 'rk222id';
console.log(use);
//18
var cardGame = {card0: 'Red', card1: 'Black'};
var userGuess = "";
for (var card = 0; userGuess != pickCard; ) {
  userGuess = window.prompt("Guess whether the card is Red or Black");
  var pickRand = Math.floor(Math.random() * Object.keys(cardGame).length);
  console.log(pickRand);
  console.log('card' + pickRand);
  var pickCard = cardGame['card' + pickRand];
  console.log(pickCard);
  if (userGuess == pickCard) {
    console.log(pickCard + ": you won!");
  }
}
