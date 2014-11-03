sessionStorage.removeItem('sessionId');

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

		userid = $('#userid').val();

		password = $('#password').val();

		if (userid.length > 0 && password.length > 0 && userid !== "" && password !== ""){

			$.ajax({

				url: '/login',
				type: 'POST',
				dataType: "JSON",
				data: {"userid": userid, "password" : password}
			}).done(function(data){

				if (data.name !== undefined || data.email !== undefined || data.cookie || data.uid) {

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
	});
});




