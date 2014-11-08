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