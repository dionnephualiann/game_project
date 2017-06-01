var Chillibomb = function(background, settings){

	//settings
	var chilliBombElement = null;
	// setting a id on every spawning chilliBomb
	this.id = settings.id;
	
	//this function checks if the div class "chilliBomb" has the id.
	this.create = function create(){
		if($('chilliBomb #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}

	//Points to the Score object for the script.js
	this.key = 'chilli'

	//this will assign a <div> the new spawned chilliBomb with it's ID to the background.
	this.chilliBomb = $('<div/>').attr('id', this.id).addClass('chilliBomb')

 	//this will append the new spawned chilliBomb with it's ID to the background.
	background.append(this.chilliBomb);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect2');

	this.chilliBomb.append(this.boundingBox);

	//this converts the ID number to a string.
	chilliBombElement = document.getElementById((this.id).toString()); 
    chilliBombElement.style.left = '25px';


	//Math.random decides where the food will be spawned
	chilliBombElement.style.left = Math.floor(Math.random() * (450-25)) + 25 + 'px';

		}


	function wall() {

			var chilliBombElementRect = chilliBombElement.getBoundingClientRect();

			var backgroundElm = background.get(0);
			var backgroundElmRect = backgroundElm.getBoundingClientRect();

			if(chilliBombElementRect.left < backgroundElmRect.left ){
				chilliBombElement.style.left = '0px';
			}

			if(chilliBombElementRect.right > backgroundElmRect.right ){
				chilliBombElement.style.left = backgroundElmRect.width - chilliBombElementRect.width  + 'px';
			}

	}

	// this sets the movement of the lettuce
	this.move = function move(interactions) {
		//Set to automatic. (not controled by player)
		if(!this.stacked) {
			//lettuce is moving to 15px per milliseconds down the screen.
			$(chilliBombElement).animate({top: "+=15"},1);
		} 
		wall();
	}


	

	this.create();
	this.removeSelf = function() { 
	// Do removal logic 
	 this.chilliBomb.remove();
	}


	this.render = function(interactions){
		//render function updates the movement into the Game Loop.
		this.move(interactions);
	}
	

}