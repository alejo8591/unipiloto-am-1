$(document).on('pagecreate', '#list', function(){

	// Utilizando el metodo especifico `$.get()`
	$.get('data.xml', function(xml){

		$(xml).find('person').each(function(){

			$('#user-list-xml').append('<li>' + $(this).find('name').text() + '</li>');

		});

		$('#user-list-xml').listview('refresh');

	}).fail(function(){

		$('#user-list-xml').append('<li>Algo salio MAL!</li>');

	});
});
