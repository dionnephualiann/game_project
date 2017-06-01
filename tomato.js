var Tomato = function(background, settings){

	//settings
	var tomatoElement = null;
	// setting a id on every spawning tomato
	this.id = settings.id;
	
	//this function checks if the div class "tomato" has the id.
	this.create = function create(){
		if($('tomato #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}

	//Points to the Score object for the script.js
	this.key = 'tomato'

	//this will assign a <div> the new spawned lettuce with it's ID to the background.
	this.tomato = $('<div/>').attr('id', this.id).addClass('tomato')

 	//this will append the new spawned tomato with it's ID to the background.
	background.append(this.tomato);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect2');

	this.tomato.append(this.boundingBox);

	//this converts the ID number to a string.
	tomatoElement = document.getElementById((this.id).toString()); 
    tomatoElement.style.left = '25px';


	//Math.random decides where the food will be spawned
	tomatoElement.style.left = Math.floor(Math.random() * (450-25)) + 25 + 'px';

		}

	function wall() {

			var tomatoElementRect = tomatoElement.getBoundingClientRect();

			var backgroundElm = background.get(0);
			var backgroundElmRect = backgroundElm.getBoundingClientRect();

			if(tomatoElementRect.left < backgroundElmRect.left ){
				tomatoElement.style.left = '0px';
			}

			if(tomatoElementRect.right > backgroundElmRect.right ){
				tomatoElement.style.left = backgroundElmRect.width - tomatoElementRect.width  + 'px';
			}

	}


	// this sets the movement of the tomato
	this.move = function move(interactions) {
		if (this.stacked) {
			//create logic that follows the plate
				if(interactions.left) {
					this.tomato.animate({left: '-=5'}, 1); 
				}
				if(interactions.right) {
					this.tomato.animate({left: '+=5'}, 1);
				}
		}
		//Set to automatic. (not controled by player)
		else if(!this.stacked) {
			//tomato is moving to 5px per milliseconds down the screen.
			$(tomatoElement).animate({top: "+=8"},1);
		} 
		wall();
	}


	this.create();
	this.removeSelf = function() { 
	// Do removal logic 
	 this.tomato.remove();
	}


	this.render = function(interactions){
		//render function updates the movement into the Game Loop.
		this.move(interactions);
	}
	
}

	


