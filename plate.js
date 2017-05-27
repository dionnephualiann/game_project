var plate = function(){


	//settings
	var ballElement = null;
	var bullets = [];

	function walls() {
		var x_right = parseInt(ballElement.style.left) + parseInt(ballElement.style.width);
		var x_left = parseInt(ballElement.style.left);
		var y_top =parseInt(ballElement.style.top);
		var y_bottom = parseInt(ballElement.style.top) + parseInt(ballElement.style.height);

		var w = parseInt(window.innerWidth);
		var h = parseInt(window.innerHeight);
		

		if(y_bottom > h) {
 			ballElement.style.bottom = (h - parseInt(ballElement.style.height)) + 'px';
		}
		if(y_top < 0) {
 			ballElement.style.top = 0+'px';
 		}
 		if(x_right > w) {
 			ballElement.style.right = (w - parseInt(ballElement.style.height)) + 'px);
 		}

 		if(x_left < 0) {
 			ballElement.style.left = 0 + 'px';
 		}



	}



	function move(interactions) {
		if(interactions.up) {
			ballElement.style.top = parseInt(rebox.style.top)-8+"px";
		}
		if(interactions.down) {
			ballElement.style.down = parseInt(rebox.style.top)-8+"px";
		}
		if(interactions.left) {
			ballElement.style.left = parseInt(rebox.style.top)-8+"px";
		}
		if(interactions.right) {
			ballElement.style.right = parseInt(rebox.style.top)-8+"px";
		}
		if (settings.walls) {
			walls();
		}


	}

	function create() {
		 // create the object asset
	}



	function init(){
		// create();
		var ballElement = document.getELementById('plate');
		ballElement.style.top = '400px';
      	ballElement.style.left = '400px';
      	ballElement.style.height = '100px';

    }




	}



	function





	this.function render(inteactions){
		move(interactions);
	}

	init();
}