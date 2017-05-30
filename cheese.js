var Cheese = function(background, settings){

	//settings
	var cheeseElement = null;
	// setting a id on every spawning cheese
	this.id = settings.id;
	
	//this function checks if the div class "cheese" has the id.
	function create(){
		if($('cheese #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}
 	//this will append the new spawned cheese with it's ID to the background.
	background.append("<div id='" + this.id + "' class ='cheese'></div>");
	//this converts the ID number to a string.
	cheeseElement = document.getElementById((this.id).toString()); 
    cheeseElement.style.left = '500px';


	//Math.random decides where the food will be spawned
	cheeseElement.style.left = Math.floor(Math.random() * (900-500)) + 500 + 'px';

		}


	// this sets the movement of the cheese
	function move() {
		//Set to automatic. (not controled by player)
		if(settings.automatic) {
			//lettuce is moving to 7px per milliseconds.. 
			$(cheeseElement).animate({top: "+=7"},1);
		}
	}

	// this function initialises the variable = cheese and calls create();
	function init() {
		create();
	}

	this.render = function(){
		//render function updates the movement into the Game Loop.
		move();
	}
	//initialise var= cheese
	init();

}