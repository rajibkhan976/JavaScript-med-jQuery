//1
var arr = new Array("Rajib","Hossain","Khan","EC","Utbildning");
console.log(arr);
//2
var num = [4,5,6];
console.log(num[0]);
//3
var num1 = new Array();
for (var i = 0; i < 5; i++) {
  console.log(num1.push(Math.random()));
}
console.log(num1[4]);
console.log(num1);
//4
var employeeGrupp1 = ['Rajib','Martin','Simon','Jonas', 'Mitchell'];
var employeeGrupp2 = ['Andreas','Daniel','Henry','Stefan','Henrik'];
console.log(employeeGrupp1.concat(employeeGrupp2));
//5
var djur = ['tiger','lion','cat','dog','snake','crocodile','bear','jaguar','zebra','rhino'];
window.alert("Animals list " + djur);
var changeDjur = window.prompt("Which animal do you want to change");
var bytaDjur = djur.find(function (element) {return element == changeDjur;});
console.log(djur.splice(djur.indexOf(bytaDjur),1));
console.log(djur);
//6
/*for (var y = 0; y < djur.length; y++) {
  var guessDjur = window.prompt("Guess an animal name");
  var userGuess = djur.find(function (element) {return element == guessDjur;});
  if(userGuess) {
    console.log("You are right");
  } else {
    console.log("You are wrong");
  }
}*/
//7
var text = ['t', 't', 'ä', 'l', ' ', 'r', 'a', 'v', ' ', 'a', 't', 't', 'e', 'D'];
console.log(text.reverse());
//8
var buyItems = [];
for (var w = 0; w < 5; w++){
  buyItems.push(window.prompt("Enter five items that you want to buy"));
}
console.log("You are going to buy the following things " + buyItems);
for (var s = 0; s < 5; s++){
  var itemsBought = window.prompt("Enter five items that you have bought");
  var bytaItems = buyItems.find(function (element) {return element == itemsBought;});
  buyItems.splice(buyItems.indexOf(bytaItems),1);
}
console.log("You have bought all the listed products");
//9
var race = ['Mercedes','Volvo','Volkswagon','Saab','Toyota'];
for (var q = 0; q < race.length; q++) {
  var index = Math.floor(Math.random() * race.length);
  race.splice(index,1);
}
console.log(race);
//10
//Spread operator for arrays in javascript helps to use an array values as the parameters of a function if it requires multiple parameters
function sum (x, y, z) {
  return x + y + z;
}
var num = [2, 4, 3];
console.log(sum.apply(null, num));
//11
var ar = [1,2,3,4,5,123,4,5,3,4,5,6,7,3,4,5,6,7];
console.log(ar.length);
var ar = [1,'a',3,4,5,123,4,5,3,4,5,6,7,3,4,5,'6',7];
console.log(ar.length);
//the length of the array does not change if any value is replace by string
//12
var nummer = [9,7,5,8,2,6,10,1,3];
console.log(nummer.sort());
//13
var expecSalary = window.prompt("What is your expected salary");
var avgSalary = [18000, 22000, 25000, 28000, 30000];
for (var u = 0; u < avgSalary.length; u++) {
  if (expecSalary > avgSalary[u]){
    console.log("The average salary is " + avgSalary[u] + " and your expected salary is " + (expecSalary - avgSalary[u]) + " above than the average salary.");
  } else if (expecSalary < avgSalary[u]) {
    console.log("The average salary is " + avgSalary[u] + " and your expected salary is " + (avgSalary[u] - expecSalary) + " below than the average salary.");
  }
  else {
    console.log("The average salary is " + avgSalary[u] + " and your expected salary is " + " equal to the average salary.");
  }
}
//14
var q1ans = ['California','New York','New Jersey'];
var q2ans = ['Stockholm','Halmstad','Karlskrona'];
var q3ans = ['Dhaka','Chittagong','Sylhet'];
var correctAnswer = [];
var point = 0;

  var q1 = window.prompt("Name some of the cities of USA?");
  for (var f = 0; f < q1ans.length; f++) {
  if (q1 == q1ans[f]) {
    correctAnswer.push(q1ans[f]);
    point += 2;
  }
}

var q2 = window.prompt("Name some of the cities of Sweden?");
for (var g = 0; g < q2ans.length; g++) {
  if (q2 == q2ans[g]) {
    correctAnswer.push(q2ans[g]);
    point += 2;
  }
}

var q3 = window.prompt("Name some of the cities of Bangladesh?");
for (var h = 0; h < q3ans.length; h++) {
  if (q3 == q3ans[h]) {
    correctAnswer.push(q3ans[h]);
    point += 2;
}
}
//console.log(correctAnswer);
//console.log(point);
//15
var returncurrency = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var determinedCurrency = [];
var note, sum = 0;

var amountPurchased = parseInt(window.prompt("Show the amount purchased by the customer"));

var amountPaid = parseInt(window.prompt("Show the amount paid by the customer"));

if (amountPaid > amountPurchased) {
  amountReturn = amountPaid - amountPurchased;
  console.log("We must return " + amountReturn);
  for (var l = 0; l < returncurrency.length; l++) {
    if (amountReturn < returncurrency[l]) {
      continue;
    }
    determinedCurrency.push(returncurrency[l]);
  }
}

for (var k = 0; sum < amountReturn; ) {
  var randomNote = Math.floor(Math.random() * determinedCurrency.length);
  note = determinedCurrency[randomNote];
  var amountReturnLeft = amountReturn - sum;
  if (determinedCurrency[randomNote] > amountReturnLeft) {
    continue;
  } else {
    console.log("Return " + note + " to customer.");
    sum += determinedCurrency[randomNote];
    console.log("We returned " + sum + " to customer");
  }
  if (sum >= amountReturn) {
    break;
  }
}
console.log(determinedCurrency);
