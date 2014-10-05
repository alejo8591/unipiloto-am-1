/* utilizando el elemento prototype */

function Person(firstName, lastName, profession, genre, age, city, studies){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession = profession;
	this.genre = genre;
	this.age = age;
	this.city = city;
	this.studies = studies;
}

// Heredando con prototype

Person.prototype = {
	constructor : Person,

	getFirstName: function(){
		alert("El nombre es: " + this.firstName);
	},

	getLastName: function(){
		alert("El apellido es: " + this.lastName);
	},

	getProfession: function(){
		alert("La profesión de la persona es: " + this.profession);
	},

	getGenre: function(){
		alert("El genero de la persona es: " + this.genre);
	},

	getAge: function(){
		alert("La edad de la persona es: " + this.age);
	}, 

	getCity: function(){
		alert("La ciudad de la persona es: " + this.city);
	},

	getStudies: function(){
		for(var i = 0; i < this.studies.length; i++){
			alert("Tiene estudios en: " + this.studies[i]);
		}

		// otra variante del ciclo for
		var i = 0;
		for(i in this.studies){
			alert("Con la variante del ciclo for,repetimos los estudios en:" + this.studies[i]);
		}
	}
};

// utilizando el objeto Person

var person = new Person("Alejandro", "Romero", "Ingeniero", "Masculino", "2", "Bogotá", ["ingenieria", "diplomado", "maestria", "otras cosas"]);


person.getLastName();
person.getFirstName();
person.getProfession();
person.getGenre();
person.getAge();
person.getCity();
person.getStudies();