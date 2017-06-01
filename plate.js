var Plate = function(settings, background){


	//SETTINGS

	// this.stacked is the first stacked item. So by default it is the first
	// stacked item, without it. There is no collision.
	this.stacked = true;
	// var plateElement = null;
	var plateElement = null;
	var bullets = [];
	//Variable plate is creating a <div> in the html by calling the CSS class "plate".
	var plate = $('<div/>').addClass('plate');

	background.append(plate);

	// when you call 'new' something, 'this.' will call a member of an instance.
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect1');

	plate.append(this.boundingBox);


function wall() {
			var plateElement = plate.get(0);
			var plateElementRect = plateElement.getBoundingClientRect();

			var backgroundElm = background.get(0);
			var backgroundElmRect = backgroundElm.getBoundingClientRect();

			if(plateElementRect.left < backgroundElmRect.left ){
				plateElement.style.left = '0px';
			}

			if(plateElementRect.right > backgroundElmRect.right ){
				plateElement.style.left = backgroundElmRect.width - plateElementRect.width  + 'px';
			}
	}


// this function is solely for the player to move the plate around manually.
	function move(interactions) {
		if(interactions.left) {
// jQuery has a library function called "animate" that takes plate and move it -5px
// to the left. '1' is the animation time in milliseconds.
			plate.animate({left: '-=5'}, 1);
		}
		if(interactions.right) {
			plate.animate({left: '+=5'}, 1);
		}
		// if (settings.walls) {
		// 	walls();
		// }

		wall();
	}

	this.removeSelf = function() { 
	// Do removal logic 
	 plate.remove();
	}

	this.render = function(interactions){
		move(interactions);
	}

}
