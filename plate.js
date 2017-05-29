var Plate = function(settings, background){


	//settings
	var plateElement = null;
	var bullets = [];
	//Variable plate is creating a <div> in the html by calling the CSS class "plate".
	var plate = $('<div/>').addClass('plate');

	background.append(plate);


	// function walls() { //need to keep it to detect when 2 items are colliding
	// 	var x_right = parseInt(plateElement.style.left) + parseInt(plateElement.style.width);
	// 	var x_left = parseInt(plateElement.style.left);
		
	// 	var w = parseInt(background.width);
	// 	var h = parseInt(background.height);
		


 // 		if(x_right > w) {
 // 			plateElement.style.right = (w - parseInt(plateElement.style.height)) + 'px';
 // 			 		}

 // 		if(x_left < 0) {
 // 			plateElement.style.left = 0 + 'px';
 // 		}



	// }


// this function is solely for the player to move the plate around manually.
	function move(interactions) {
		if(interactions.left) {
// jQuery has a library function called "animate" that takes plate and move it -5px to the left.
// '1' is the animate time in milliseconds. 
			plate.animate({left: '-=5'}, 1); 
		}
		if(interactions.right) {
			plate.animate({left: '+=5'}, 1);
		}
		// if (settings.walls) {
		// 	walls();
		// }


	}

	this.render = function(interactions){
		move(interactions);
	}


}