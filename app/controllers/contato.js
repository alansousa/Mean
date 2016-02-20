//var model = require('../models/contato');

var contatos =[
{_id: 1, nome:'Contato Exemplo1',email:'a1@mail.com'},
{_id: 2, nome:'Contato Exemplo2',email:'a2@mail.com'},
{_id: 3, nome:'Contato Exemplo3',email:'a3@mail.com'},
{_id: 4, nome:'Contato Exemplo4',email:'a4@mail.com'}
];

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req,res){
		res.json(contatos);
	}

controller.obtemContato = function(req,res){
	var idContato = req.params.id;
	var contato = contatos.filter(function(contato){
		return contato._id == idContato;
	})[0];

contato ? res.json(contato):
res.status(404).send('contato não encontrado');

	console.log(req.params.id);
}

	return controller;
}