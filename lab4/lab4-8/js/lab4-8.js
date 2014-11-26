$(document).on('pagecreate', '#home', function(){

	// almacenando informacion en local Storage
	localStorage.setItem('firstName', 'Alejandro');

	localStorage.setItem('lastName', 'Romero');

	localStorage.setItem('city', 'Bogotá');

});


$(document).on('pagecreate', '#about-us', function(){

	$('#list-one').append('<li>Primer nombre: <b>' + localStorage.getItem('firstName') + '</b></li>');

	$('#list-one').append('<li>Segundo nombre: <b>' + localStorage.getItem('lastName') + '</b></li>');

	$('#list-one').append('<li>Ciudad: <b>' + localStorage.getItem('city') + '</b></li>');


});
