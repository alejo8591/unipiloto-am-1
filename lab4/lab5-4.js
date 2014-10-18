$(document).on('pagecreate', '#home', function(){

	$('.error').hide();
	$('#myAge').on('click', function(event){
		var values = {
			name : "test",
			code : "Codigo de completitud de prueba",
			statusCode : "200 Ok"
		}

		var myAge = $('#age').val();
		var len = myAge.length;

		for(var i =0; i < len; i++){
			c = myAge.charAt(i).charCodeAt(0);//AS
			if(c < 48 || c > 57){
				$('.error').show();
				event.preventDefault();//funciona como el return=false para el formulario
			}else{
				$('.error').hide();
				localStorage.setItem('age', myAge);//API Js
				event.preventDefault();
			}
		}

		if(len === 0){
			console.log('La logitud debe ser mayor a 0');
			event.preventDefault();
		}else{
			$.ajax({
				url : "/message",
				type : "POST",
				dataType : "JSON",
				data : values,
				success : function(data){
					$('#myInfoAge').empty();
					$('#myInfoAge').append('<ul data-role="listview" id="my-info-details"></ul>');

					$.each(data, function(key, value){
						$('#my-info-details').append('<li>'+key+':'+value+'</li>');
					});

                    $('#my-info-details').listview('refresh');
				},
				error : function(err){
					console.log(err);
				}
			});
		}

		event.preventDefault();
	});
});


$(document).on('pagecreate', '#user-list', function(){
	$.ajax({
		url : "/data",
		type : "GET",
		dataType : "json"
	}).done(function(json){

		for(data in json){

			$('#user-list-json').append('<li>' + json[data].name + '</li>');
		}

		$('#user-list-json').listview('refresh');

	}).fail(function(err){

		console.log(err);
	});

});
