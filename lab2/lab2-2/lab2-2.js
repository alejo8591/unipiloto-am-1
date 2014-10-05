/* Arrays en JavaScript */

var my_array = new Array();

var otherArray = [];

my_array = [1,233,4,4,5,5,3,23,22,12];

console.log(my_array);
console.log(my_array[2]);

otherArray = ["a", 'b', "c", 'D', "AAAAA", "1234", 5656];

console.log(otherArray);

otherArray.push(10);

console.log("El nuevo valor agregado a `otherArray`:" + otherArray);

otherArray.push("Otro elemento agregado al Array");

console.log(otherArray);

// Pop elimina el ultimo elemento del Array
my_array.pop();

console.log(my_array);

// reverse invierte el orden de Array
my_array.reverse();

console.log(my_array);

// shift elimina el primer elemento del array

my_array.shift();

console.log(my_array);

// Sort organiza el array en forma ascedente

my_array.sort();

console.log(my_array);

// otra manera de declarar variables

var mySecondArray = ["Hola" ,"mundo"];

console.log(mySecondArray.sort());

// splice

var tasks = ["comer", "dormir", "caminar", "leer", "trabajar"];

console.log(tasks);


tasks.splice(1,3, "Estudiar", "saltar", "correr");

console.log(tasks);


