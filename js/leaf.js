define(function(require){

	var $ = require('jquery');
	

	function Leaf(){
		this.img = null;
		this.pos = {
			left: parseInt(Math.random() * $(window).width()),
			top: 0
		};

		this.size = {
			width: parseInt(50 + Math.random() * 100)
		};

		this.bg = (1 + parseInt(Math.random() * 4)) + ".png";

		this.render = function(){
			var _this = this;
			var html = '<img src="img/'+this.bg+'" width="'+this.size.width+'"/>';
			this.img = $(html).css({
				position: 'absolute',
				left: this.pos.left,
				top: this.pos.top
			}).appendTo(document.body);

			setTimeout(function(){
				_this.fall();
			}, parseInt(Math.random() * 5000));
		};

		this.fall = function(){
			var _this = this;
			//console.log('falling...');
			var iTop = 0;
			setInterval(function(){
				_this.img.css({
					top: iTop+=5
				});
			}, 30);
		};


	}


	return Leaf;
});
