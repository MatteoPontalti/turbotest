// Testing of the server:
// Install Jest --> $ npm install --save-dev jest
// Running  -->  $ npm test  

var http = require('http');
var assert = require('assert');
const request = require('request');
var mod = require('./app.js');


test('should be Listening on port 5000!', async () => {
	beforeAll(function(done) {
		mod.applic.listen(5000);
	});

	// The function passed to after() is called after running the test cases.
	afterAll(function() {
        mod.serv.close();
		mod.applic.close();
    });

	let options = {
	    hostname: 'localhost',
	    port: 5000,
	    path: '/',
	    method: 'GET',
	    headers: {
	        'Content-Type': 'application/x-www-form-urlencoded'
	    },
	    gzip:true
	};

	var response = await http.request(options);
	//assert.equal(response.statusCode, 200);
	body = "";
	response.on('data', function(bod) {
		body += bod
	})
	response.on('end', () => {
        assert(body, 'Listening on port 5000!');
        done();
    });
});