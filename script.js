var Game = function(){

// Game settings

 var settings = {};
 settings.ballSpeed = 8;
 settings.walls = true;
 settings.automatic = false;
 settings.godmode = false;




 var foodSpeed = 8;  // speed of the food
 var walls = false;  // plate cannot go out of the screen
 var automatic = false; // the plate will not move by itself
 var godmode = false; // allows developer to access any point of the game


 // World settings

 //Do not touch
var assets = [];       // All game objects
var player = new Ball(settings);     // The player
assets[0] = player;
var frame = 0;         // Frames since the start of the game


// Interactions
var interactions= {};
interactions.top = false; // top arrow key pressed
interactions.bottom = false; // bottom arrow key pressed
interactions.left = false; // left arrow key pressed
interactions.right = false; // right arrow key pressed
interactions.space = false; // space bar pressed



// setup event listener
function setupEvents (){

	document.addEventListener('keyup', function(event){
		var keyName =event.key;

		switch(keyName) {
			case "ArrowRight":
				interactions.right = true;
				break;
			case "ArrowLeft":
				interactions.left = true;
				break;
			case "ArrowUp":
				interactions.up = true;
				break;
			case "ArrowDown":
				interactions.down = true;
				break;
			default:
				break;
		}


	});

	  document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = true;
              break;
          case "ArrowLeft":
              interactions.left = true;
              break;
          case "ArrowUp":
              interactions.up = true;
              break;
          case "ArrowDown":
              interactions.down = true;
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
function render(){

  for (var i =0; i < assets.length ; i++){
  	assets[i].render(interactions);
  }
	
}


window.requestAnimFrame= (function() {
	return window.requestAnimationFrame    		||
		   window.webkitRequestAnimationFrame	||
		   window.mozRequestAnimationFrame		||
		   function( callback) {
		   	window.setTimeout(callback, 1000 / 60);
		   };

}


}


var newGame = game();