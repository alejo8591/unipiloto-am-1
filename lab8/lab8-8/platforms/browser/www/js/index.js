var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        console.log(id);

        var watchID;

        var options = {frequency:250};

        watchID = navigator.compass.watchHeading(app.onHeadingSuccess, app.onHeadingError, options);
    },

    onHeadingSuccess: function(heading){
        
        var hi = document.getElementById('heading-info');

        console.log('onHeadingSuccess OK');

        var data = Math.round(heading.magneticHeading);

        hi.innerHTML = '<b>Heading:</br> ' + data + '<span>Grados</span>';

        $('#compass').rotate(-data);
    },

    onHeadingError: function(compassError){
        console.log('onHeadingError OK :(');

        navigator.compass.clearWatch(watchID);

        hi.innerHTML = '';
        if (compassError.code == CompassError.COMPASS_NOT_SUPPORTED) {

            data_node.innerHTML = '<b>Bruluja no disponible</b>';
            alert('<b>Bruluja no disponible</b>');
    
        } else if (compassError.code == CompassError.COMPASS_INTERNAL_ERR) {

            data_node.innerHTML = '<b>Compass Internal Error</b>';
            alert('<b>Compass Internal Error</b>');
    
        } else {

            data_node.innerHTML = '<b>Error indeterminado o no reconocido por el API</b>';
            alert('<b>Error indeterminado o no reconocido por el API</b>');
        }
    }
};

app.initialize();