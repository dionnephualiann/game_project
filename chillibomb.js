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

	// Assigning score 
	this.key = 'chilli'

	this.chilliBomb = $('<div/>').attr('id', this.id).addClass('chilliBomb')


 	//this will append the new spawned chilliBomb with it's ID to the background.
	background.append(this.chilliBomb);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect2');

	this.chilliBomb.append(this.boundingBox);

	//this converts the ID number to a string.
	chilliBombElement = document.getElementById((this.id).toString()); 
    chilliBombElement.style.left = '500px';


	//Math.random decides where the food will be spawned
	chilliBombElement.style.left = Math.floor(Math.random() * (900-500)) + 500 + 'px';

		}


	// this sets the movement of the chilliBomb
	function move() {
		//Set to automatic. (not controled by player)
		if(settings.automatic) {
			//chilliBomb is moving 7px per milliseconds. 
			$(chilliBombElement).animate({top: "+=15"},1);
		}
	}

	this.create();
	this.removeSelf = function() { 
	// Do removal logic 
	 this.chilliBomb.remove();
	}


	this.render = function(){
		//render function updates the movement into the Game Loop.
		move();
	}
	

}