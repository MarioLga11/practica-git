const numbers = [1,2,3,4,5,6,7];
const names = ["Mario", "Yalu","Jerry"];

//Iterations
for(let i=0; i< numbers.length; i++){
	console.log(i);
	console.log(numbers[i]);

}	


//0 == '0' //true
//0 ==='0' //false


//FUNCTION VARIABLE DEFINITION//////////////////
const myFunction = function(name){
	console.log('oliiii' + name);
}


//UTILIZAR FOREACH//////////////////////////
function logItems(itemActual, index){
	console.log(`Name ${itemActual} at index: ${index} `)
}

names.forEach(logItems);

//ARROY FUNCTION/////////////////////////
const sum = (a,b) =>{
	return a+b;
}

const resta = (a,b)  =>{
	return a-b;
}

const resta = (a,b)  => a - b;

//ARROY FUNCTION IMPLICIT RETURN///////////////////////////////////////
names.forEach(logItems => console.log(item));


//////////////////////////////
const fullNames = [];
const output = name.forEach(item => fullNames.push(item + 'Rodriguez'));

const output2 = names.map(item => item + 'Rodriguez')
console.log(output2);

////////////////////////////////////////////////////////

const dudes = [...names, ...numbers];


/////////////////////////////////////////////////

const mutant = {
	name: 'Xavier',
	power: 'Telep'
}

mutant.name = 'Mario';

const mutant2 = mutant;
//y luego cambio algo en el mutant2, se cambia en el 1

const mutant3 = {...mutant, name: 'Javier'}
//y así se hace magia y se crea uno nuevo que puedes modificar sin modificar al otro



