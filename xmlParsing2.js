
var    fs = require('fs');
var DOMParser = require('xmldom').DOMParser;

//var doc = new DOMParser().parseFromString(
//    '<xml xmlns="a" xmlns:c="./lite">\n'+
//        '\t<child>test</child>\n'+
//        '\t<child1>123</child1>\n'+
//        '\t<child/>\n'+
//        '</xml>'
//    ,'text/xml');
//doc.documentElement.setAttribute('x','y');
//var n=doc.getElementsByTagName('child1')[0];
//n.childNodes[0].nodeValue='456';

fs.readFile('errorMsg.xml', function(err, data){

    console.log(data.toString());
    var doc1=new DOMParser().parseFromString(data.toString());
    var n=doc1.getElementsByTagName('ns1:IdentificationID')[0];

        console.log(n.childNodes[0].nodeValue);

  }
);



  //  console.log('******* :'+n.childNodes[0].nodeValue  );

//doc.documentElement.setAttributeNS('./lite','c:x','y2');
//var nsAttr = doc.documentElement.getAttributeNS('./lite','x')
//console.info(nsAttr)
//console.info(doc);