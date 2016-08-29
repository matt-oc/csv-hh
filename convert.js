var Converter = require("csvtojson").Converter;
var converter = new Converter({
  delimiter:["|"]
});
var jsonQuery = require('json-query');
var JSON;
//read from file
require("fs").createReadStream("csv-files/provider-example.csv").pipe(converter);

var exports = module.exports = {};
converter.on("end_parsed", function (jsonArray) {
   JSON = jsonArray;
//   console.log(JSON);
});

//Returns entire csv file as JSON
exports.getProvidersJSON = function() {
  converter.on("end_parsed", function (jsonArray) {
     return(jsonArray);
  });
  return (jsonArray)
};

exports.getSingleProviderJSON = function(name) {
  converter.on("end_parsed", function (jsonArray, name) {
    filter(jsonArray, name);
  });
};

console.log(JSON);

function filter(array, name) {

    for(var i=0, len = array.length; i < len; i++) {
        if (array[i].Name == name) {
          return array[i];
        }
    }
    return (null);
}
