define(function(require){

	var Leaf = require('./leaf');

	for(var i=0; i<8; i++){
		// var left = Math.random();
		var leaf = new Leaf();
		leaf.render();
	}

});