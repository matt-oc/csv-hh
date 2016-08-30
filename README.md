# csv-hh

This module exports 2 functions:

```javascript
getProvidersJSON()
getSingleProviderJSON()
```

The data is read in from a csv file and converted upon a call.
An example of how to call to the converts.js class can be found in
index.js

## CSV structure

The structure of the csv files is as below. A pipe "|" is our custom delimiter.
Example files can be found in the csv-files folder.

![CSV][]


[CSV]: csv-files/images/csv-example.png