$(document).ready(function(){
	var members = ["Manuel", "Hernando", "Agustín", "Hans", "Humberto", "Adriana", "Daniel", "David", "Ricardo * 2", "Harold", "Miguel", "Carlos", "Kevin", "Fabián", "Lilly", "Jean Pierre", "Alejandro"];

	$('p').html(members.join('<br />'));
});