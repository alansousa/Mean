var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'),function(){
	console.log('Express server escutando na porta'+
		app.get('port'));
});

//http.createServer(function(req,res){
//res.writeHead(200, {'Content-Type':'text/plain'});
//res.end('Sou um servidor criado pelo node');
//}).listen(3002,'127.0.0.1');