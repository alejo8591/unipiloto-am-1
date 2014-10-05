/* objetos y funciones */

var my_object_one = new Object();

var my_object_two = {};

// Los array también son considerados objetos en JavaScript
var lotter = [3,4,5,2,1,"11010"];

var profile = {
	firstName : "Alejandro",
	lastName : "Romero",
	phone : "1223344"
};

// dos formas de acceder a lo guardado en un objeto

console.log(profile.firstName);

console.log(profile["lastName"]);

// Iterando o recorriendo un objeto
var key;

for(key in profile){
	console.log(profile[key]);
}

/* funciones */

function test(){
	console.log("resultado de la funcion test");
}

// llamado de la función
test();

// uso de la función anonima para declarar variables

var chao = function(){
	console.log("¡chao!");
};

chao();

