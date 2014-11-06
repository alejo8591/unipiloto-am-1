sessionStorage.removeItem('sessionId');


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
		// Expresiones regulares propuestas por diferentes participantes
		// var pattern = new RegExp(/^[a-zA-Z]+[ a-zA-Z-_]*$/);
		// var pattern = new RegExp(/^[a-zA-Z-\s]+$/);
		// var pattern = new RegExp(/^[a-zA-Z _]+$/);
		// var pattern = new RegExp(/^[a-zA-Z|a-z\sA-Z]+$/);
		// var pattern = new RegExp(/^[a-zA-Z|a-z\sA-Z]+$/);

		// Expresión regular para validar caracteres latinos
		var pattern = new RegExp(/^[ÀÈÌÒÙ àèìòù ÁÉÍÓÚ Ý áéíóúý ÂÊÎÔÛ âêîôû ÃÑÕ ãñõ ÄËÏÖÜŸ äëïöüŸ ¡¿çÇŒœ ßØøÅå ÆæÞþÐð ""\w\d\s-'.,&#@:?!()$\/]+$/);
		return pattern.test(na);
	},

	password : function(passwd){
		var pattern = new RegExp(/^[A-Za-z0-9]+$/);
		return pattern.test(passwd);
	}
};


$(document).on('pagecreate', '#home', function(){

	if ('sessionStorage' in window && window['sessionStorage'].length === 0){

		$.mobile.changePage('#login');

	} else {

		if (sessionStorage.getItem('sessionId')){

			$.mobile.changePage('#home');

		} else {

			$.mobile.changePage('#register');
		}
	}
});


$(document).on('pagecreate', '#login', function(){

	$('#login-user').bind('click', function(event){

		console.log('Evento delegado para `#login`');

		var userid = $('#userid').val();

		var password = $('#password').val();

		var validate = new Validate();

		console.log(validate.email(userid), validate.password(password));

		if (validate.email(userid) && validate.password(password)){

			$.ajax({
				url: '/login',
				type: 'POST',
				dataType: "JSON",
				data: { "userid": userid, "password" : password }

			}).done(function(data){

				if (data.name !== undefined || data.email !== undefined || data.cookie !== undefined || data.uid !== undefined) {

					console.log(data.name, data.email, data.cookie, data.uid);

					$.mobile.changePage('#home');

				} else {

					$('#login-form').trigger('reset');

					$.mobile.changePage('#register');
				}

			}).fail(function(xhr, status, error){

				console.log(xhr, status, error);
			});

		} else {
			$.mobile.changePage('#register');
			event.preventDefault();
		}

		event.preventDefault();
	});
});


$(document).on('pagecreate', '#register', function(){

	console.log('Evento delegado para `#register`');

	$('#register-button').bind('click', function(event){

		var name = $('#name').val();

		var email = $('#email').val();

		var uid = $('#uid').val();

		var password = $('#register-password').val();

		var validate = new Validate();

		console.log(validate.name(name), validate.email(email), validate.uid(uid), validate.password(password));

		if (validate.name(name) && validate.email(email) && validate.uid(uid) && validate.password(password)){

			$.ajax({
				url: '/register',
				type: 'POST',
				dataType: "JSON",
				data: {  "name": name, "email": email ,"uid": uid, "password" : password }

			}).done(function(data){

				if (data.name !== undefined || data.email !== undefined || data.cookie !== undefined || data.uid !== undefined) {

					console.log(data.name, data.email, data.cookie, data.uid);

					$.mobile.changePage('#home');

				} else {

					$('#login-form').trigger('reset');

					$.mobile.changePage('#register');
				}

			}).fail(function(xhr, status, error){

				console.log(xhr, status, error);
			});

		} else {
			$.mobile.changePage('#register');
		}

		event.preventDefault();
	});
});
