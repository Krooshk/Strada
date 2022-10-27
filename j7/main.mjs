import data from './data.json' assert { type: 'json' };

console.log(typeof data);

console.log(typeof JSON.stringify(data));

let members = data["users"];
members.forEach(exper => {
	console.log( `${exper.firstName}, born at ${exper.dateOfBirth} and ${exper.knowsAs}`);
});
