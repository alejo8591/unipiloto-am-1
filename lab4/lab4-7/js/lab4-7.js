$(document).on('pageinit', '#other-page', function(){
		var members_one = ["uno", "dos", "tres", "cuatro", "Ricardo", "Fabián", "Jean Pierre"];

	$.each(members_one, function(index, value){
		$('#list-one').append('<li>' + value + '</li>');
	});

	$('#list-one').listview('refresh');

	var members_two = $.grep(members_one, function(v){
		return v.length  > 4;
	});

	$.each(members_two, function(index, value){
		$('#list-two').append('<li>' + value + '</li>');
	});

	$('#list-two').listview('refresh');

});