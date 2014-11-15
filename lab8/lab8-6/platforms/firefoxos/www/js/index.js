
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
        console.log('onDeviceReady ok');
        app.isOnLine();
    },

    isOnLine: function(){
        console.log('isOnLine ok');

        $('#network-info').prepend('Se conecta con (' + app.getConnectionType() + ')<br />');
    },

    getConnectionType: function(){
        console.log('getConnectionType()');

        var states = {};

        states[Connection.UNKNOWN] = 'Unknow';
        states[Connection.ETHERNET] = 'ETHERNET';
        states[Connection.WIFI] = 'WI-FI';
        states[Connection.CELL_2G] = 'CELL 2G';
        states[Connection.CELL_3G] = 'CELL 3G';
        states[Connection.CELL_4G] = 'CELL 4G';
        states[Connection.NONE] = 'NONE';

        // obteniendo el estado de la red
        var network_state = navigator.connection.type;

        return states[network_state];

    }
};

app.initialize();