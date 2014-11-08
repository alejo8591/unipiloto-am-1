// http://www.generatedata.com/
(function loadXMLDoc(){
    try{

        var fs = require('fs');

        var file_data = fs.readFileSync("data.json", 'utf-8');

        convert_data = JSON.parse(file_data);

        console.log(convert_data);

    } catch(err) {
        console.log(err);
    }
})();
