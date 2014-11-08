$(document).on('pagecreate', '#list', function(){
	$.get('/data', function(json){

		for(data in json){

			$('#user-list-json').append('<li>' + json[data].name + '</li>');

		}

		$('#user-list-json').listview('refresh');

	}).fail(function(){

		$('#user-list-json').append('<li>Algo salio mal</li>');
	});
});

/* Evento delegado para el documento HTML5 con id `form-info` */
$(document).on('pagecreate', '#form-info', function(){

	$('#my-age').click(function(event){

		var data = $('#age').val();

		// Asegurando que el elemento sea un valor entero
		var age = parseInt(data);

		if(age < 18 || age > 70){
		
			console.log('La edad no corresponde al rango');
			event.preventDefault();
		
		} else {
			
			console.log('La edad ' + age + ' es Correcta:');

			localStorage.setItem('age', age);

			$(document).on('pagecreate', "#dialog", function () {
				$('#with-age').append('<span>' + localStorage.getItem('age') + '</span>');

			});

			setTimeout(function() {
   						$.mobile.changePage('#dialog', { transition: "pop",role: "dialog" });
   			}, 100);

			event.preventDefault();

		} 
	});
});

