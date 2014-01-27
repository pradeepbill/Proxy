var    fs = require('fs');
var xml2js=require('xml2js');

var parser = new xml2js.Parser();



var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result['root']);
});

fs.readFile('errorMsg.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
       // console.log(result);
        console.dir(result['soapenv:Envelope']['soapenv:Header']['aca:TransactionId']);

    //    var inspect = require('eyes').inspector({maxLength: false})
    //    inspect(result);

    });
});

