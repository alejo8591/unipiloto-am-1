$(document).on('pagecreate', '#home', function(){

	console.log('Evento delegado para `#home` OK');

	$('#device').bind('click', function(event){

		console.log(device.model);

		$('#device-info').append(

			'<li>' + device.model + '</li>' +
			'<li>' + device.cordova + '</li>' +
			'<li>' + device.platform + '</li>' +
			'<li>' + device.uuid + '</li>' +
			'<li>' + device.version + '</li>'
		);

		$('#device-info').listview('refresh');

		event.preventDefault();
	});
});