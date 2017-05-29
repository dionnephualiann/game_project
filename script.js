var Game = function(){

// Game settings

 var settings = {};
 settings.plateSpeed = 8;
 settings.walls = true;
 settings.automatic = false;
 settings.godmode = false;



 var foodSpeed = 8;  // speed of the food
 var walls = false;  // plate cannot go out of the screen
 var automatic = false; // the plate will not move by itself
 var godmode = false; // allows developer to access any point of the game


 // World settings

 //Do not touch
var background = $('.background'); 
var assets = [];       // All game objects that touches the stack. Those that doesn's meet the condition will fall according to gravity
var player = new Plate(settings, background);     // The player
assets[0] = player;
var food = new Item(background);
assets[1] = food;
var frame = 0;         // Frames since the start of the game


// Interactions. This is to set up the initializers. Nothing is moving when the game is
// being initialised hence everything is set to false. So until the keys are being presed 
// (which is why they have event listeners and are set to true) 
var interactions= {};
interactions.left = false; 		// left arrow key pressed
interactions.right = false; 	// right arrow key pressed






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

  setupEvents();
  


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

})();

	(function animloop(){
            requestAnimFrame(animloop);
            render();

            })();

}





var newGame = new Game();












