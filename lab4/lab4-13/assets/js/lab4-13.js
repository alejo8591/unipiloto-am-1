$(document).on('pagecreate', '#list', function(){

	$.ajax({
		url : "data.json",
		dataType : "json",
		type: "GET"
	}).done(function(json){

		var next_id = 1;

		for(data in json){
			
			next_id++;

			var content =  "<div data-role='collapsible' id='set" + next_id + "'><h3>Section " + json[data].name + 
			"</h3><p>Age: " + json[data].age + "</p>" +
			"<p>Age: " + json[data].email + "</p>" +
			"<p>City: " + json[data].city + "</p>" +
			"<p>Country: " + json[data].country + "</p>" +
			"</div>";

			$('#set').append(content).collapsibleset('refresh');
			//$('#user-list-json').append('<li>' + json[data].name + '</li>');
		}


		//$('#user-list-json').listview('refresh');

	}).fail(function(){

			$('#user-list-json').append('<li>¡Algo salio Mal!</li>');

	});
});