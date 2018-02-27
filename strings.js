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
    console.log("small");
} else if (animal.toUpperCase() === "DOG") {
    console.log("yah");
}