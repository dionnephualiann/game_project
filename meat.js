var Meat = function(background, settings){

	//settings
	var meatElement = null;
	// setting a id on every spawning meat
	this.id = settings.id;
	
	//this function checks if the div class "meat" has the id.
	this.create = function create(){
		if($('meat #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}

	//Points to the Score object for the script.js
	this.key = 'meat'

    //this will assign a <div> the new spawned meat with it's ID to the background.
	this.meat = $('<div/>').attr('id', this.id).addClass('meat')

 	//this will append the new spawned meat with it's ID to the background.
	background.append(this.meat);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect2');

	this.meat.append(this.boundingBox);

	//this converts the ID number to a string.
	meatElement = document.getElementById((this.id).toString()); 
    meatElement.style.left = '25px';


	//Math.random decides where the food will be spawned
	meatElement.style.left = Math.floor(Math.random() * (450-25)) + 25 + 'px';

		}

// this sets the movement of the meat
	this.move = function move(interactions) {
		if (this.stacked) {
			//create logic that follows the plate
				if(interactions.left) {
					this.meat.animate({left: '-=5'}, 1); 
				}
				if(interactions.right) {
					this.meat.animate({left: '+=5'}, 1);
				}
		}
		//Set to automatic. (not controled by player)
		else if(!this.stacked) {
			//meat is moving to 5px per milliseconds down the screen.
			$(meatElement).animate({top: "+=7"},1);
		} 

	}
	

	this.create();
	this.removeSelf = function() { 
	// Do removal logic 
	 this.meat.remove();
	}


	this.render = function(interactions){
		//render function updates the movement into the Game Loop.
		this.move(interactions);
	}
	

}