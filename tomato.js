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

	var tomato = $('<div/>').attr('id', this.id).addClass('tomato')

 	//this will append the new spawned tomato with it's ID to the background.
	background.append(tomato);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect2');

	tomato.append(this.boundingBox);

	//this converts the ID number to a string.
	tomatoElement = document.getElementById((this.id).toString()); 
    tomatoElement.style.left = '500px';


	//Math.random decides where the food will be spawned
	tomatoElement.style.left = Math.floor(Math.random() * (900-500)) + 500 + 'px';

		}


	// this sets the movement of the tomato
	function move() {
		//Set to automatic. (not controled by player)
		if(settings.automatic) {
			//tomato is moving to 12px per milliseconds. 
			$(tomatoElement).animate({top: "+=12"},1);
		}
	}

	this.create();

	this.render = function(){
		//render function updates the movement into the Game Loop.
		move();
	}
	
}

	


