//1
for (var c = 0; c < 2; c++) {
  console.log("Hello World!");
}
//2
var courses = ['HTML & CSS', 'UX Design', 'JavaScript & jQuery'];
for (var i in courses) {
  console.log(courses[i]);
}
//3
var a = 0, b = 0;
while (a < 3) {
  a++;
  b += a;
}
console.log(b);
//4
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
//5
var chance = Math.floor(Math.random() * 1001);
console.log(chance);
while (chance < 1000) {
  chance++;
  console.log(chance);
}
//6
var arr1 = ['a','b','d','f','h','k','i','l','c','v'];
for (var z = 0; z < arr1.length; z++) {
  console.log(arr1[z]);
}
//7
var arr2 = [10,6,3,2,6,8,4,9,7,1], sum = 0;
for (var y = 0; y < arr2.length; y++) {
  sum += arr2[y];
}
console.log(sum);
//8
var arr = ['Nils','person','Jan','Svensson','Karl','Karlsson','Per','Pettersson','Sam','Nodesson','Tim','berners-lee'];
var afterName = [];
for (var name = 0; name < arr.length; name++) {
  if (name % 2 == 0) {
    continue;
  } else {
    afterName.push(arr[name]);
  }

}
console.log(afterName);
//9
var stars = ['*','**','***','****','*****'];

for (var pyramid = 0; pyramid < stars.length; pyramid++ ) {
  console.log(stars[pyramid]);
}
stars.reverse();
for (var reversepyramid = 0; reversepyramid < stars.length; reversepyramid++ ) {
  console.log(stars[reversepyramid]);
}
//10
for (var multiply = 0; multiply < 11; multiply++) {
  console.log(multiply * 5);
}
//11
var namesarr = ["Santa", "Inger", "", "Andreas", "Ricky", "", "Greger", "Robin", "Yngva", "Mohsen", "Martin", "Adrian"];
for (var namfirst = 0; namfirst < namesarr.length; namfirst++) {
  console.log(namesarr[namfirst].substr(0, 1));
}
//12
var fivearr = ['a',5,'e',11,'d'];
for (var ind in fivearr) {
  console.log(fivearr[ind]);
}
//13
var firstPerson = ['bullet',1,2,3,4,5], secondPerson = [0,1,2,'bullet',4,5];
for (var trigger = 0; trigger < 6; trigger++) {
  var firstpersonShot = firstPerson[Math.floor(Math.random() * firstPerson.length)];
  console.log(firstpersonShot);
  var secondpersonShot = secondPerson[Math.floor(Math.random() * secondPerson.length)];
  console.log(secondpersonShot);
  if (firstpersonShot === 'bullet') {
    console.log("First person wins!");
  } else if (secondpersonShot === 'bullet') {
    console.log("Second person wins!");
  } else {
    console.log("Nobody wins!");
  }
}
//14
var arrayHats = ["bluehat", "greenhat", "redhat", "bluehat", "bluehat"];
var hatCol1 = "blue", hatCol2 = "green"; hatCol3 = "blue", search = "hat", ArrayGreenHats = [], ArrayBlueHat = [], ArrayRedHat = [];
function hatSorter (hats) {
  for (var checkColor = 0; checkColor < arrayHats.length; checkColor++) {
    var colorIndex = arrayHats[checkColor].lastIndexOf(search);
    console.log(colorIndex);
    var color = arrayHats[checkColor].substr(0, colorIndex);
    console.log(color);
    if (color === hatCol1) {
      ArrayGreenHats.push(arrayHats[checkColor]);
    } else if (color === hatCol2) {
      ArrayBlueHat.push(arrayHats[checkColor]);
    } else {
      ArrayRedHat.push(arrayHats[checkColor]);
    }
  }
}
hatSorter (arrayHats);
console.log(ArrayGreenHats);
console.log(ArrayBlueHat);
console.log(ArrayRedHat);
