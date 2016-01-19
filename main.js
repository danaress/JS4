

// var victimNum = prompt("How many disaster victims would you like to register?")

// var victimInfo = [];

// var person = function(name, number, address) {
// 	this.name = name;
// 	this.number = number;
// 	this.address = address;
// }

// for(var i = 0; i < victimNum; i++) {
// 	var v = prompt("What is their name?");
// 	var n = prompt("What is their number?");
// 	var a = prompt("What is their address?");
// 	victimInfo.push(new person(v, n, a));
// }


// var volNum = prompt("How many disaster volunteers would you like to register?")

// var volInfo = [];

// var person = function(name, number, address) {
// 	this.name = name;
// 	this.number = number;
// 	this.address = address;
// }

// for(var i = 0; i < volNum; i++) {
// 	var v = prompt("What is their name?");
// 	var n = prompt("What is their number?");
// 	var a = prompt("What is their address?");
// 	volInfo.push(new person(v, n, a));
// }


// alert("There are " + victimNum + " victims in need of disaster relief, and " + volNum + " \n volunteers who can help. The victims names are " + victimInfo.name + ". The volunteers' names \n are " + volInfo.name);








var victimInfo = [];

var person = function(name, number, address) {
	this.name = name;
	this.number = number;
	this.address = address;
}

var volInfo = [];

var person = function(name, number, address) {
	this.name = name;
	this.number = number;
	this.address = address;
}


function x() { 
	var p = confirm("Would you like to enter information on a disaster victim?");
	if (p == true) {
	var v = prompt("What is their name?");
	var n = prompt("What is their number?");
	var a = prompt("What is their address?");
	victimInfo.push(new person(v, n, a));
	x();
} else if (p !== true) {
	function g() { 
		var y = confirm("Would you like to enter volunteer information?"); }
			if (y) {
				var v = prompt("What is their name?");
				var n = prompt("What is their number?");
				var a = prompt("What is their address?");
				volInfo.push(new person(v, n, a)); }
				g();
			} else { console.log("Done.");
		}
			}
		
		x();