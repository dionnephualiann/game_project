var Lettuce = function(background, settings){

	//settings
	var lettuceElement = null;

	

	// setting a id on every spawning lettuce
	this.id = settings.id;
	
	//this function checks if the div class "lettuce" has the id.
	function create(){
		if($('lettuce #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}
 	//this will append the new spawned lettuce with it's ID to the background.
 	var lettuce = $('<div/>').attr('id', this.id).addClass('lettuce')

	background.append(lettuce);

	var rect2 = $('<div/>').addClass('rect2');

	lettuce.append(rect2);
	

	//this converts the ID number to a string.
	lettuceElement = document.getElementById((this.id).toString()); 
    lettuceElement.style.left = '500px';

	//Math.random decides where the food will be spawned
	lettuceElement.style.left = Math.floor(Math.random() * (900-500)) + 500 + 'px';


		}


	// this sets the movement of the lettuce
	function move() {
		//Set to automatic. (not controled by player)
		if(settings.automatic) {
			//lettuce is moving to 5px per milliseconds. 
			$(lettuceElement).animate({top: "+=5"},1);
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

	


