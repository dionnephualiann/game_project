var Plate = function(settings, background){


	//SETTINGS

	// this.stacked is the first stacked item. So by default it is the first  
	// stacked item, without it. There is no collision.
	this.stacked = true;
	var plateElement = null;
	var bullets = [];
	//Variable plate is creating a <div> in the html by calling the CSS class "plate".
	var plate = $('<div/>').addClass('plate');

	background.append(plate);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect1');

	plate.append(this.boundingBox);

	// Walls
function wall() {
	  // BG dimensions
      var w = $(background).width();
      var h = $(background).height();

      if($(plate).offset().left < 0){
          $(plate).offset().left = '0px';
      }

      if(($(plate).offset().left + $(plate).outerWidth()) > w){
          $(plate).offset().left = ( w - $(plate).width()) + 'px' ;
      }

  }





// this function is solely for the player to move the plate around manually.
	function move(interactions) {
    var gameArea = this.background.getBoundingClientRect();

		if(interactions.left) {
// jQuery has a library function called "animate" that takes plate and move it -5px 
// to the left. '1' is the animation time in milliseconds. 
			plate.animate({left: '-=5'}, 1); 
			if ($(plate).offset().left < gameArea.left) {
				$(plate).offset({left: gameArea.left})
			}
		}
		if(interactions.right) {
			plate.animate({left: '+=5'}, 1);
			if (($(plate).offset().left + $(plate).outerWidth()) > gameArea.right) {
				$(plate).offset({left: gameArea.right - $(plate).outerWidth() });
			}
		}
		if (settings.walls) {
			wall();
		}
	}

	this.render = function(interactions){
		move(interactions);
	}

}