$(document).ready(function(){

	var $nodes = $('#root').children();

	alert("Numero de nodos" + $nodes.length);

	var text = "";

	$('#root').children().each(function(){
		text+=$(this).text();
	});

	alert(text);
});