$(document).ready(function(){
	var members = ['Un usuario', 'Dos usuarios', 'Tres usuarios', 'cuatro usuarios'];

	$.each(members, function(index, value){
		$('#list-one').append('<li>' + value + '</li>');

		// $('#list-one').listview('refresh');
	});
});