var Game = function(){

// Game settings

 var settings = {};
 settings.plateSpeed = 8;
 settings.walls = true;
 settings.automatic = true;
 settings.godmode = false;
 settings.id = 0;
 settings.score = 0;
 settings.gameOver = false;



 var lettuceSpeed = 8;  // speed of the lettuce
 var tomatoSpeed = 8;
 var cheeseSpeed = 5;
 var walls = true;  // plate cannot go out of the screen
 var automatic = false; // the plate will not move by itself
 var godmode = false; // allows developer to access any point of the game

 // World settings

 //Do not touch
var background = $('#background');
var assets = [];       // All game objects that touches the stack. Those that doesn's meet the condition will fall according to gravity
var player = new Plate(settings, background);     // The player
assets[0] = player;
var Score = { lettuce: 10,  // Score = key : value
      		  meat: 15,
			  tomato: 20,
			  cheese: 5,
			  topBun: 50,
			  chilli: 0,
			};

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
	var random = Math.floor(Math.random(assets) * (6 - 1 + 1)) + 1;


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
		} else if(random === 6) {
			assets.push(new TopBun(background, settings));
		}

}


//collision detection 
  	var collision = function(rect1, rect2){

      var rect1Native = rect1.get(0);
      var rect2Native = rect2.get(0);

      var rect1NativeRect = rect1Native.getBoundingClientRect();
      var rect2NativeRect = rect2Native.getBoundingClientRect();

      if (rect1NativeRect.left < rect2NativeRect.left + rect2NativeRect.width &&
          rect1NativeRect.left + rect1NativeRect.width > rect2NativeRect.left &&
          rect1NativeRect.top < rect2NativeRect.top + rect2NativeRect.height &&
          rect1NativeRect.height + rect1NativeRect.top > rect2NativeRect.top)
      {
      	playSound();

        console.log("collision detected!");
        return true;

      }

    }


// Visibility function, passing clearAll as the argument 
	var visibility = function(clearAll) {
		// i starts at [1] because, plate is already index [0]
		for (var i = 1; i < assets.length; i++) {
			//if asset is below 600px OR clearAll() which is established in the render function;
			assets[i].shouldRemove = (assets[i].boundingBox.offset().top >= 700) || clearAll;
				// calling the function removeSelf which is .remove() inside the ingredient's js.
 				 if (assets[i].shouldRemove) assets[i].removeSelf()
		}
 			//filters out the assets that aren't flagged.
			assets = assets.filter(function (x) { return !x.shouldRemove; });
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

//Sound effects
function playSound () {
 		var sound = document.getElementById('soundFX')
 		sound.currentTime = 0;
 		sound.play();
	}


// Startup the game
function init(){
      setupEvents();
    }


// The render function. It will be called 60f/sec
this.render = function(){
		if(settings.gameOver){
			return;
		}
	  	for (var i =0; i < assets.length ; i++){
	  	assets[i].render(interactions);
		  }
		  timer = frame / 60;
		  if(timer % 2 === 0) {
		  	spawnItem();
		  	 } else if (timer % 3 === 0) {
		  	 spawnItem();	
		  	 } else if (timer % 4 === 0) {
		  	 spawnItem();	
		  	 } else if (timer % 5 === 0) {
		  	 spawnItem();	
		  	 } else if (timer % 10 === 0) {
		  	 spawnItem();	
		  	 }

		  frame++;

		// Creates an array of items that are currently "on-the-stack"
		var onStack = assets.filter(function(item) { return item.stacked; })

		// Creates an array of items that are NOT-on-the-stack
		var offStack = assets.filter(function(item) { return !item.stacked; })

		// clearAll function set to false before the topBun hits the stack.
		var clearAll = false;
		// Loop through all the off the stack items
		for (var i = 0; i < offStack.length; i++) {
		  // For each offstack item loop through each on stack item to see if they are colliding with them.
		  for (var j = 0; j < onStack.length; j++) {
		    // If the on the stack item and the off the stack item are colliding,
		    
		    // then we have an effect to handle/make.
		    if (collision(onStack[j].boundingBox, offStack[i].boundingBox)) {
		    	// if chilli is stacked, Game over is set to true.
		    	if(offStack[i].key === "chilli") {
		    		score();
		    		settings.gameOver = true;

		    		// add a start button
		    		var start =$('<div/>').addClass('start');
		    		// <div> id 'Background' switches background class and adds the score.
		    		$("#background").removeClass("background").addClass("score").append($("<div/>").addClass("number").text(settings.score));

		    		$(".score").append(start);
		    		//when the start button is clicked
		    		$(start).click(function(){
						// goes back to the game screen
						var gameBG= $("#background").removeClass("score").addClass("background")
						// remove start button
						start.remove();
						//remove all assets from the previous game
						for (var i = 0; i < assets.length; i++){
							assets[i].removeSelf();
							//remove of score
							$(".number").remove()
						}
					//assets array should be empty
					assets = null;
					//launch of a new game
					var newGame = new Game();
					
					})

		    		// breaks the game loop.
		    		break;
		    	}
		    	// if top bun is stacked. 
		    	if(offStack[i].key === "topBun") {
		    		// clearAll functions the same way as selfRemove().
		    		clearAll = true;
		    	}
		    	//storing of the score
  				function score(){
  					return settings.score += Score[offStack[i].key];
  				}
		       // Simplest case is that it is a food item (not a top bun or chilli bomb in
		       // which case we just make it part of the stack
		       // Stacked items are no longer affected by gravity and move with the plate.
		      offStack[i].stacked = true;
		      score();
		    }
		  } if(settings.gameOver)
		  //game loop breaks (refer back to the 'if on-stack === "chilli"' condition)
		  break;
		}
		// Calling on the visibility function for all objects  
		// including those that meets the clear all condition.
		visibility(clearAll);

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


