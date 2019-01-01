//1
function namedFunc () {
  console.log("Hej!");
}
namedFunc();
//2
var anonymFunc = function () {
  console.log("God morgon!");
}
anonymFunc();
//3
var autocallFunc = (function (a, b) {
  if(a > b) {
    console.log("a is greater than b");
  }
  else {
    console.log("a is either equal to or less than b");
  }
})(3,4);
console.log(autocallFunc);
//4
var a = function () {
  alert("Hej!");
}
a();
//5
var funcFem = function () {
  console.log("Hello");
}
funcFem();
//6
var anonymSex = function () {
  alert("När jag blir stor vill jag vara en självkörande bil");
}
anonymSex();
//7
function funcSju () {
  console.log("7. Jag är en namngiven funktion");
}
funcSju();
//8
function bar (a, b) {
  console.log(a+b);
}
bar(1, 2);
//1 respektive 2 kallas parameters
//9
function funcStringConcat (a, b) {
  console.log(a + b);
}
funcStringConcat ("Detta är uppgift 9. hej", "då");
//10
var addFunc = (function (a, b) {
  console.log(a + b);
})(1, 2);
addFunc;
//11
function getRandNum (c, d) {
  c = Math.ceil(c);
  d = Math.floor(d);
  var randNum = Math.floor(Math.random() * (d - c)) + c;
  console.log(randNum);
}
getRandNum (1, 10);
//12
function getRandNumTolv (a, b, c, d) {
  a = Math.floor(a);
  b = Math.floor(b);
  c = Math.floor(c);
  d = Math.floor(d);
  var randNumOne = Math.floor(Math.random() * (b - a)) + a;
  var randNumTwo = Math.floor(Math.random() * (d - c)) + c;
  var randNumThree = Math.floor(Math.random() * (randNumTwo - randNumOne)) + randNumOne;
  console.log(randNumThree);
}
getRandNumTolv (1, 5, 10, 20);
//13
function evenDecider (a) {
  var b = a % 2;
  if (b == 0) {
    console.log(a + " is a even number.");
  } else {
    console.log(a + " is a odd number.");
  }
}
evenDecider(3);
//14
var name = window.prompt("Skriv ditt namn");
var arrNamn = ["von bollibongbong den tredje!","Karl Gustavson Sjunde","Alexander femte"];
var arrLength = arrNamn.length;
var condition =  (function (a) {
  return Math.floor(Math.random() * Math.floor(a));
})(arrLength);
console.log(condition);
function addNamn (a) {
  for (var c = 0; c <= condition; c++) {
    var extension = arrNamn[c];
  }
  console.log(a + " " + extension);
}
addNamn (name);
//15
console.log(a(2));
console.log(c (3));

var a = function(b) {
    return b + 1;
};
console.log(a(2));
function c (b) {
	return b + 1;
}
//The named function works but the anonymous function does not work because it does not have a name
//16
var quesBank = ["Name two of the largest cities in Sweden?","Name two of the biggest political parties in Sweden?"];
var quesLength = quesBank.length;
var condition =  (function (a) {
  return Math.floor(Math.random() * Math.floor(a));
})(quesLength);
console.log(quesLength);
console.log(condition);
for (var d = 0; d <= condition; d++) {
  if(quesBank[d]) {
    var ques = window.prompt(quesBank[d]);
    break;
  }
}
var answer1 = ['Stockholm','Gothenburg'];
var answer2 = ['Social Demorcat','New Moderates'];
function game (answer) {
  if (ques == answer1[0] || ques == answer1[1] || ques == answer2[0] || ques == answer2[1]) {
    console.log("You won and you will get 1 million");
  } else {
    console.log("You lost, good luck next time");
  }
}
game (ques);
//17
var cards = ["2","3","4","5","6","7","8","9","10", "Ace", "Jack","Queen","King"];
function cardMixer (cardSet) {
  var randomNumber = Math.floor(Math.random() * cards.length);
  if (randomNumber <= cardSet) {
    alert("You will get " + cards[randomNumber]);
  }
}
//call 1
cardMixer (13);
//call 2
cardMixer (13);
//call 3
cardMixer (13);
//call 4
cardMixer (13);
//call 5
cardMixer (13);
//call 6
cardMixer (13);
//call 7
cardMixer (13);
//call 8
cardMixer (13);
//call 9
cardMixer (13);
//call 10
cardMixer (13);
//call 11
cardMixer (13);
//call 12
cardMixer (13);
//call 13
cardMixer (13);

//18
var userAction, dragonLife = 10, userLife = 10;
var dragon = ['block', 'not block'];

for (var lifeCount = 0; lifeCount <= dragonLife || lifeCount <= userLife; ) {
  var userAction = window.prompt("You have came across a dragon & we need to know what to do. If u write 1 we attack the dragon, but if u write 2 we hide");
  checkUserAction (userAction);
  if ( dragonLife === 0 || userLife === 0 ) {
    break;
  }
}

function checkUserAction (userParam1) {
  if (userParam1 === 1) {
    var userStrike = "Attack the dragon";
    checkDragon (userStrike);
  }
  else {
    userStrike = "Hide";
    checkDragon (userStrike);
  }
}

function checkDragon (userParam) {
  var randomNumber = Math.floor(Math.random() * dragon.length);
  var dragonDefence = dragon[randomNumber];
  console.log(userParam);
  console.log(dragonDefence);
  if(userParam === "Attack the dragon" && dragonDefence === dragon[1]) {
    dragonLife--;
    console.log("Dargon has " + dragonLife + " lifes left.");
    dragonStatus = "Drgaon has a damage";
    console.log(dragonStatus);
  } else if (userParam === "Hide") {
    var dragonReact = Math.floor(Math.random() * 2);
    console.log(dragonReact);
    if (dragonReact === 1) {
      userLife -= 2;
      console.log("Dragon met the user and made 2 damages");
      console.log("User has " + userLife + " more life");
  } else {
    dragonLife -= 2;
    console.log("Dragon slips and hits itself that cause 2 damages");
    console.log("Dargon has " + dragonLife + " lifes left.");
  }
} else {
    var dragonStatus = "Not hurt";
    console.log(dragonStatus);
  }

  if (dragonStatus === "Not hurt" || dragonStatus === "Drgaon has a damage") {
    var dragonHit = Math.floor(Math.random() * 2);
    console.log(dragonStatus);
    console.log(dragonHit);
    if (dragonHit == 0) {
    console.log("Dragon did not meet the user");
      }
  else {
    userLife--;
    console.log("Dragon met the user and made a damage");
    console.log("User has " + userLife + " more life");
  }
 }

}
