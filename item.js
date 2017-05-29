var Item = function(background, settings){

	//settings
	var foodElement = null;
	this.id = settings.id;
	
	//Variable plate is creating a <div> in the html by calling the CSS class "plate".
	function create(){
		if($('lettuce #' + this.id)){
			settings.id++;
			this.id = settings.id;
		}

	background.append("<div id='" + this.id + "' class ='lettuce'></div>");

	foodElement = document.getElementById((this.id).toString()); 
    foodElement.style.left = '50px';

// Gravity of the food falling top down.
//    $(foodElement).animate({
//    		marginTop: "690px"
//  			}, 2500 );
	}


	// Gravity of the food falling top down.
	// function gravity(){
 // 	 		$(foodElement).animate({
 //    		marginTop: "690px"
 //  			}, 2500 );

	// }


	// var food = $('<div/>').addClass('lettuce');
	// background.append(food);

	function move() {
		if(settings.automatic) {
			$(foodElement).animate({marginTop: "690px"},2500);
		}
	}

	function init() {
		create();
	}

	this.render = function(){
		// gravity();
		move();
	}
	init();
}


