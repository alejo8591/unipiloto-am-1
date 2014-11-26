$(document).ready(function(){

	var members_one = ["uno", "dos", "tres", "cuatro"];

	var members_two = $.map(members_one, function(n, i){

		return (i + 1 + "." + n);

	});

	$.each(members_two, function(index, value){

		$('#list-one').append('<li>' + value + '</li>');

	});

	$('#list-one').listview('refresh');
});
