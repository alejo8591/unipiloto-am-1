$(document).on('pagecreate', '#audio', function(){

	console.log('`#audio` OK');

	$('#button-audio').bind('click', function(event){

		$('#capture-audio-results').html('<span>Capturando Audio...</span>');

		var num_items = $('#num-items-audio').val();

		var duration = $('#duration-audio').val();

		var options = {
			limit: num_items,
			duration: duration
		};
		navigator.device.capture.captureAudio(onCaptureAudioSuccess, onCaptureError, duration);

	});
});

var onCaptureAudioSuccess = function(file_list){

	var i, len;

	len = file_list.length;

	if (len > 0) {
		$('#capture-audio-results').html('<h5>Resultados</h5>');

		$('#capture-audio-results').append('<ul data-role="listview" id="capture-audio-results-list"></ul>');

		for(i = 0; i < len; i++) {
			
			$('#capture-audio-results-list').append(

				'<li>' + file_list[i].fullPath + '</li>' +
				'<li>' + file_list[i].name + '</li>'

			);
		}
	}
};

$(document).on('pagecreate', '#camera', function(){

	console.log('`#camera` OK');

	$('#button-camera').bind('click', function(event){

		console.log('take - camera');

		$('#capture-camera-results').html('<span>Capturando Imagen</span>');

		var num_items = $('#num-items-camera').val();

		navigator.device.capture.captureImage(onCaptureImageSuccess, onCaptureError, {limit: num_items});


	});
});

var onCaptureImageSuccess = function(file_list){

	var i, len;

	len = file_list.length;

	if (len > 0) {

		$('#capture-camera-results').html('<h4>Resultados</h4>');

		$('#capture-camera-results').append('<ul data-role="listview" id="capture-camera-results-list"></ul>');

		for(i = 0; i < len; i++){

			$('#capture-camera-results-list').append(

				'<li>' + file_list[i].fullPath + '</li>' +
				'<li>' + file_list[i].name + '</li>' +
				'<li>' + file_list[i].size + '</li>' +
				'<li>' + file_list[i].type + '</li>'
			);
		}
	}
};

$(document).on('pagecreate', '#video', function(){

	console.log('`#video` OK');

	$('#button-video').bind('click', function(event){

		console.log('take - video');

		$('#capture-video-results').html('<span>Capturando Video</span>');

		var num_items = $('#num-items-video').val();

		var duration = $('#duration-video').val();

		navigator.device.capture.captureVideo(onCaptureVideoSuccess, onCaptureError, {duration: duration, limit: num_items});
	});
});


var onCaptureVideoSuccess = function(file_list){

	var i, len;

	len = file_list.length;

	if (len > 0) {

		$('#capture-video-results').html('<h4>Resultados:</h4>');

		$('#capture-video-results').append('<ul data-role="listview" id="capture-video-results-list"></ul>');

		for(i = 0; i < len; i++){

			$('#capture-video-results-list').append(

				'<li>' + file_list[i].fullPath + '</li>' +
				'<li>' + file_list[i].name + '</li>' +
				'<li>' + file_list[i].size + '</li>' +
				'<li>' + file_list[i].type + '</li>'
			);
		}
	}
};

var onCaptureError = function(error){

	var message_text;

	switch(error.code){
		case CaptureError.CAPTURE_INTERNAL_ERR:
			message_text = 'Error Interno';
			break;
		case CaptureError.CAPTURE_APPLICATION_BUSY:
			message_text = 'Alguno de los elementos se encuentra ocupado por otra App';
			break;
		case CaptureError.INVALID_ARGUMENT:
			message_text = 'Algún parametro enviado no es correcto';
			break;
		case CaptureError.CAPTURE_NO_MEDIA_FILES:
			message_text = 'El usuario cancelo la captura';
			break;
		case CaptureError.CAPTURE_NOT_SUPPORTED:
			message_text = 'La operación no la soporta el dispositivo';
			break;
		default:
			message_text = 'Error desconocido: ' + error.code;
	}

	navigator.notification.alert(message_text, null, "Error en Captura");
};