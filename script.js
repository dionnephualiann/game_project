var Game = function(){

// Game settings

 var settings = {};
 settings.plateSpeed = 8;
 settings.walls = true;
 settings.automatic = true;
 settings.godmode = false;
 settings.id = 0;



 var lettuceSpeed = 8;  // speed of the lettuce
 var tomatoSpeed = 8;
 var cheeseSpeed = 5;
 var walls = false;  // plate cannot go out of the screen
 var automatic = false; // the plate will not move by itself
 var godmode = false; // allows developer to access any point of the game
 

 // World settings

 //Do not touch
var background = $('.background'); 
var assets = [];       // All game objects that touches the stack. Those that doesn's meet the condition will fall according to gravity
var player = new Plate(settings, background);     // The player
assets[0] = player;


var frame = 0;         // Frames since the start of the game
var timer = 0;

// Interactions. This is to set up the initializers. Nothing is moving when the game is
// being initialised hence everything is set to false. So until the keys are being presed 
// (which is why they have event listeners and are set to true) 
var interactions= {};
interactions.left = false; 		// left arrow key pressed
interactions.right = false; 	// right arrow key pressed


//function to spawn food pushes them into the assets array.
function spawnItem() {
	//random chooses which asset to spawn
	var random = Math.floor(Math.random(assets) * (5 - 1 +1)) + 1;
	
		if (random === 1) {
			assets.push(new Lettuce(background, settings));
		} else if(random === 2) {
			assets.push(new Tomato(background, settings));
		} else if(random === 3) {
			assets.push(new Cheese(background, settings));
		} else if(random === 4) {
			assets.push(new Meat(background, settings));
		} else if(random === 5) {
			assets.push(new Chillibomb(background, settings));
		}

}



//collision detection
  	var collision = function(rect1, rect2){


  		if (rect1.offset().top < rect2.offset().top + rect2.width() &&
   			rect1.offset().top + rect1.width() > rect2.offset().top &&
   			rect1.offset().left < rect2.offset().left + rect2.height() &&
   			rect1.height() + rect1.offset().left > rect2.offset().left) 
  		{
    		console.log("collision detected!");
    		return true;
    	}
    }


// setup event listener
function setupEvents (){

// To stop the controls
	document.addEventListener('keyup', function(event){
		var keyName =event.key;

		switch(keyName) {
			case "ArrowRight":
			//by setting it to false, 
			//the controls will stop functioning
				interactions.right = false;   	  
				break;
			case "ArrowLeft":
				interactions.left = false;
				break;
			default:
				break;
		}


	});

// To start the controls
	  document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = true;
              break;
          case "ArrowLeft":
              interactions.left = true;
              break;
          default:
              break;
        }
      });

}





// Startup the game
function init(){
      setupEvents();
  
    }


// The render function. It will be called 60f/sec
this.render = function(){
  for (var i =0; i < assets.length ; i++){
  	assets[i].render(interactions);
  }	
  timer = frame / 60;
  if(timer % 2 === 0) {
  	spawnItem();
  	 }
  frame++;

// Creates an array of items that are currently "on the stack"
var onStack = assets.filter(function(item) { return item.stacked; })

// Creates an array of items that are *not* on the the stack
var offStack = assets.filter(function(item) { return !item.stacked; })

// Loop through all the off the stack items
for (var i = 0; i < offStack.length; i++) {
  // For each offstack item loop through each on stack item to see if they are colliding with them.
  for (var j = 0; j < onStack.length; j++) {
    // If the on the stack item and the off the stack item are colliding, 
    // then we have an effect to handle/make.
    if (collision(onStack[j].boundingBox, offStack[i].boundingBox)) {
       // Simplest case is that it is a food item (not a top bun or chilli bomb in 
       // which case we just make it part of the stack
       // Stacked items are no longer affected by gravity and move with the plate.
      offStack[i].stacked = true;
    }
  }
}

}

var self = this;
window.requestAnimFrame= (function() {
	return window.requestAnimationFrame    		||
		   window.webkitRequestAnimationFrame	||
		   window.mozRequestAnimationFrame		||
		   function( callback) {
		   	window.setTimeout(callback, 1000 / 60);
		   };

})();

	(function animloop(){
            requestAnimFrame(animloop);
            self.render();

            })();

            init();

}





var newGame = new Game();












