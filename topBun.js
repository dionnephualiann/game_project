var TopBun = function(background, settings){

	//settings
	var topBunElement = null;
	// setting a id on every spawning chilliBomb
	this.id = settings.id;
	
	//this function checks if the div class "topBun" has the id.
	this.create = function create(){
		if($('topBun #' + this.id)){
			//for every new spawn, there is a new id number.
			settings.id++;
			this.id = settings.id;
		}

	//Points to the Score object for the script.js
	this.key = 'topBun'

	//this will assign a <div> the new spawned topBun with it's ID to the background.
	this.topBun = $('<div/>').attr('id', this.id).addClass('topBun')

 	//this will append the new spawned topBun with it's ID to the background.
	background.append(this.topBun);

	// when you call 'new' something, 'this.' will call a member of an instance. 
	// That way every item will have it's own bounding box
	this.boundingBox = $('<div/>').addClass('rect2');

	this.topBun.append(this.boundingBox);

	//this converts the ID number to a string.
	topBunElement = document.getElementById((this.id).toString()); 
    topBunElement.style.left = '250px';


	//Math.random decides where the food will be spawned
	topBunElement.style.left = Math.floor(Math.random() * (600-250)) + 250 + 'px';

		}


	// this sets the movement of the topBun
	this.move = function move(interactions) {
		if (this.stacked) {
		// 	**create logic that doesn't call render function ON the ingredients including itself.
		// 	**create another function that will render out the plate.
		
		
			if(interactions.left) {
						this.topBun.animate({left: '-=5'}, 1); 
					}
					if(interactions.right) {
						this.topBun.animate({left: '+=5'}, 1);
					}
			
		}
		//Set to automatic. (not controled by player)
		else if(!this.stacked) {
			//topBun is moving to 15px per milliseconds down the screen.
			$(topBunElement).animate({top: "+=12"},1);
		} 

	}


	

	this.create();
	this.removeSelf = function() { 
	// Do removal logic 
	 this.topBun.remove();
	}


	this.render = function(interactions){
		//render function updates the movement into the Game Loop.
		this.move(interactions);
	}
	

}