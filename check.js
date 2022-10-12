var request = require('request');

var options = { 
  url: 'https://app.sportdataapi.com/api/v1/soccer/odds/120423?apikey=b8bce6d0-4a63-11ed-81c7-23d75c552215&type=prematch' 
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
}

request(options, callback);