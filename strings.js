console.log("hello world!");
//challenge 1
var numOfSandwiches = 4*2;
console.log("numOfSandwiches", numOfSandwiches);
// should print 8

//challenge 2
var name = "Zoe"
var string = "Hello, " + name + "." + " How are you today?";
console.log("string:", string);

//challenge 3

// var g = "guanine";
// var c = "cytosine";
// var a = "adenine";
// var t = "thymine";

// var dna = g + c + a + t;

var dna = "gcat";
var rna = dna.replace('t', 'u');
console.log(rna);

// challenge 4
var animal = "alligator";
var animal = "Alligator";
var animal = "bird";
var animal = "dog";
var animal = "alliGATor";
var animal = "DOG";

if (animal.toLowerCase() === "goat") {
    console.log("wide");
} else if (animal.toLowerCase() === "alligator") {
} else {
    console.log("wide");
}
    // console.log("small");
// } else if (animal.toUpperCase() === "DOG") {
//     console.log("yah");
// }

//challenge 5
var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";
var myDiv = document.getElementById("yarn-holder");
myDiv.innerHTML = domString;

//challenge 6
var str = "IBMWLOVEbmcatsbmw"; 
var cats = str.replace(/[BMWbmw]/g, '');
console.log("cats", cats);
// build the <h1> now
var catsStr = "<h1>" + cats + "</h1>";
var locatePlaceInDom = document.getElementById("kitty-love");
locatePlaceInDom.innerHTML = catsStr;
    
//ATTEMPTS
// display ILOVEcats on the screen
//var lowerCaseStr = str.toLowerCase();
//console.log(lowerCaseStr);
// var catLove = str.ignoreCase.slice("b","m", "b");
// console.log(catLove);
// var myNewDiv = document.getElementById("kitty-love");
// myNewDiv.innerHTML = catLove;


//practice
var bestInstructor = "Lauren Rouse";
var lamren = bestInstructor.replace("u", m);
console.log(lamren);
var lamrenromse = bestInstructor.replace(/u/g, m);
console.log(lamrenrouse);