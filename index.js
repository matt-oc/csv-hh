var converter = require('./converts.js');
var query = "EDF Energy"

converter.getProvidersJSON(function(cb) {
  console.log("\n" + cb + "\n");
})

converter.getSingleProviderJSON(query, function(cb) {
  console.log("\n" + cb + "\n");
})

//Example file showing how to access the get all and get
//single provider methods in converts.js
// just pass the query (name of provider as a string)
