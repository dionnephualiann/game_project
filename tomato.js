var Tomato = function(background, settings){

	//settings
	var tomatoElement = null;
	// setting a id on every spawning tomato
	this.id = settings.id;
	
	//this function checks if the div class "tomato" has the id.
	function create(){
		if($('tomato #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}
 	//this will append the new spawned tomato with it's ID to the background.
	background.append("<div id='" + this.id + "' class ='tomato'></div>");
	//this converts the ID number to a string.
	tomatoElement = document.getElementById((this.id).toString()); 
    tomatoElement.style.left = '500px';


	//Math.random decides where the food will be spawned
	tomatoElement.style.left = Math.floor(Math.random() * (900-500)) + 500 + 'px';

		}


	// this sets the movement of the lettuce
	function move() {
		//Set to automatic. (not controled by player)
		if(settings.automatic) {
			//lettuce is moving to margin-top: 0px to 800px at 2500 milliseconds. 
			$(tomatoElement).animate({top: "+=10"},1);
		}
	}

	// this function initialises the variable = lettuce and calls create();
	function init() {
		create();
	}

	this.render = function(){
		//render function updates the movement into the Game Loop.
		move();
	}
	//initialise var= lettuce
	init();
}

	

