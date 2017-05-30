var Meat = function(background, settings){

	//settings
	var meatElement = null;
	// setting a id on every spawning meat
	this.id = settings.id;
	
	//this function checks if the div class "meat" has the id.
	function create(){
		if($('meat #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}
 	//this will append the new spawned meat with it's ID to the background.
	background.append("<div id='" + this.id + "' class ='meat'></div>");
	//this converts the ID number to a string.
	meatElement = document.getElementById((this.id).toString()); 
    meatElement.style.left = '500px';


	//Math.random decides where the food will be spawned
	meatElement.style.left = Math.floor(Math.random() * (900-500)) + 500 + 'px';

		}


	// this sets the movement of the meat
	function move() {
		//Set to automatic. (not controled by player)
		if(settings.automatic) {
			//lettuce is moving to 11px per milliseconds. 
			$(meatElement).animate({top: "+=11"},1);
		}
	}

	// this function initialises the variable = meat and calls create();
	function init() {
		create();
	}

	this.render = function(){
		//render function updates the movement into the Game Loop.
		move();
	}
	//initialise var = meat
	init();

}