var Converter = require("csvtojson").Converter;
var converter = new Converter({
  delimiter:["|"]
});

//read from file
require("fs").createReadStream("csv-files/provider-example.csv").pipe(converter);

var exports = module.exports = {};

//Returns entire csv file as JSON
exports.getProvidersJSON = function(callback) {
  converter.on("end_parsed", function (jsonArray) {
     callback(jsonArray);
  });
};

 //returns single provider based on query given
exports.getSingleProviderJSON = function(query, callback) {
  converter.on("end_parsed", function (jsonArray) {
    for(var i=0; i < jsonArray.length; i++) {
        if (jsonArray[i].Name == query) {
          callback(jsonArray[i]);
        }
    }
  });
};

