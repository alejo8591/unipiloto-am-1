(function loadXMLDoc(){
    try{

        var fs = require('fs');

        var path = require('path');

        fs.readFile(path.join(__dirname, "data.xml"), "utf-8", function(err, result){

            console.log(result);
        });

    } catch(err) {
        console.log(err);
    }
})();
