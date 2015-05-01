//AntiPattern: global variables
var myGlobal = "hello world!"
console.log(myGlobal); //hello world!
console.log(window.myGlobal); //hello world!
console.log(window['myGlobal']); //hello world!
console.log(this.myGlobal); //hello world!

window["hmmm"] = "will this print?";
console.log(hmmm); //will this print?

var myArray = ['Brad', 'Scott', 'Linh', 'Juney', 'Katlyn', 'Gene']
for(var i=0, max = myArray.length; i < max; i++){ //assigning max 
	console.log(myArray[i]);
}
 //micro-optimized. 1 less variable, plus it's faster to compare to 0
 var j = myArray.length
 while(j--) {
 	console.log(myArray[j]);
 }

//better than pareseInt
 +"08"; //8
 Number("08"); //8

 //antipattern
 var car = new Object();
 car.goes = "far";

//correct
var car = { goes: "far" }; //No scope chain resolution for looking up 'Object'

console.log(typeof [1,2,3]); //object (Booooo)
//isArray polyfill for non ECMAScript 5 browsers
if(typeof Array.isArray === null) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === "[object Array]";
	};
}

function throw1() {
	throw new Error("a crazy error was thrown!");
}
//is equivalent to
function throw2() {
	throw Error("a crazy error was thrown!");
}
//and
function throw2() {
	throw { 
		name: "Error", 
		message: "a crazy error was thrown!"
	};
}

var f = function([1,2]){
console.log(arguments);
};
