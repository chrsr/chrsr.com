const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 8080));

app.get('/', function(request, response) {
    response.render('public/index.html');
});

app.listen(app.get('port'), function() {
    console.log('chrsr.com up and running')
})