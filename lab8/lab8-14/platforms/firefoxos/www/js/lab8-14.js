$(document).on('pagecreate', '#home', function(){

	console.log('Evento delegado `#home` OK');

	$('#take-picture').bind('click', function(event){

		navigator.camera.getPicture(onCameraSuccess, onCameraError);
	});
});

function onCameraSuccess(imageURI){
	console.log(imageURI);

	$('#url-picture').append('<span>' + imageURI + '</span>');

	console.log('onCameraSuccess imageURI: ' + imageURI);
}

function onCameraError(cameraError){
	$('#url-picture').append('<span>' + cameraError + '</span>');

	console.log('onCameraError: ' + cameraError);
}