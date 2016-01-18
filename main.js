var victimNum = prompt("How many disaster victims would you like to register?")

var victimNames = [];
var victimNumbers = [];
var victimStreets = [];

for(var i = 0; i < victimNum; i++) {
	victimNames.push(prompt("What is their name?"));
	victimNumbers.push(prompt("What is their phone number?"));
	victimStreets.push(prompt("What is their address?"));
}

console.log(victimNames);
console.log(victimNumbers);
console.log(victimStreets);



var volunteerNum = prompt("How many disaster volunteers would you like to register?")

var volunteerNames = [];
var volunteerNumbers = [];
var volunteerStreets = [];

for(var i = 0; i < volunteerNum; i++) {
	volunteerNames.push(prompt("What is their name?"));
	volunteerNumbers.push(prompt("What is their phone number?"));
	volunteerStreets.push(prompt("What is their address?"));
}

console.log(volunteerNames);
console.log(volunteerNumbers);
console.log(volunteerStreets);

alert("There are " + victimNum + " victims in need of disaster relief, and " + volunteerNum + " \n volunteers who can help. The victims names are " + victimNames.sort() + ". The volunteers' names \n are " + volunteerNames.sort());