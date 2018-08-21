const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/views')); // html
const server = app.listen(process.env.PORT || 5000, function () {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});