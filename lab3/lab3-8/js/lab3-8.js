$(document).ready(function(){
	var memlist = $('#list');

	var members = ["Manuel", "Hernando", "Agustín", "Hans", "Humberto", "Adriana", "Daniel", "David", "Ricardo", "Harold", "Miguel", "Carlos", "Kevin", "Fabián", "Lilly", "Jean Pierre", "Alejandro", "Ricardo P."];

	$.each(members, function(index, value){
		memlist.append('<li>' + value + '</li>');
	});

	$('#list>li:odd').addClass('one-color');

	$('#list>li:even').css('color','blue');

	$('#list>li').css({
		'font-size' : '20px',
		'font-style' : 'italic'
	});
});