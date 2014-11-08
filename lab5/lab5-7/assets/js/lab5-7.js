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

$(document).on('pagecreate', '#register', function(){

	function Validate(){}

	Validate.prototype = {
		email : function(email){

			var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
			return pattern.test(email);
		},
		uid : function(uid){
			var pattern = new RegExp(/^[0-9]+$/);
			return pattern.test(uid);
		},

		name : function(na){
			// var pattern = new RegExp(/^[a-zA-Z]+[ a-zA-Z-_]*$/);
			// var pattern = new RegExp(/^[a-zA-Z-\s]+$/);
			// var pattern = new RegExp(/^[a-zA-Z _]+$/);
			var pattern = new RegExp(/^[a-zA-Z|a-z\sA-Z]+$/);
			return pattern.test(na);
		},

		password : function(passwd){
			var pattern = new RegExp(/^[A-Za-z0-9]+$/);
			return pattern.test(passwd);
		}
	};

	$('#register-button').bind('click', function(event){

		var validate = new Validate();

		var name = $('#name').val();

		var email = $('#email').val();

		var uid = $('#uid').val();

		var password = $('#password').val();

		console.log(validate.name(name), validate.email(email), validate.uid(uid), validate.password(password));

		if (validate.name(name) && validate.email(email) && validate.uid(uid) && validate.password(password)){

			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
			localStorage.setItem('uid', uid);
			localStorage.setItem('password', password);

			var values = {
				"name": name,
				"email": email,
				"uid": uid,
				"password": password
			};

			$.ajax({
				url: "/message",
				type: "POST",
				dataType: "JSON",
				data: values
			}).done(function(data){

				console.log(data);
			
			}).fail(function(err){

				console.log(err);
			});
		
		} else {

			console.log('Datos incorrectos');
			event.preventDefault();
		}

		event.preventDefault();
	});

});
