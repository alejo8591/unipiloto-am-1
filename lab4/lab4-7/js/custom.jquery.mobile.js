$(document).bind("mobileinit", function(){
	// definiendo elemento de transición de paginas por defecto
	$.mobile.defaultPageTransition = 'flip';

	// Indicando el mensaje de carga
	$.mobile.loadingMessage = 'Por favor espere un momento';

	// Definiendo el mensaje de error
	$.mobile.pageLoadErrorMessage = '¡Algo salio mal!';

});