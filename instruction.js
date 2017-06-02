var Instruction = function(){

//Start Button
var start =$('<div/>').addClass('start');

var splashPage = $("#background").removeClass("background").addClass("splash")

//splash page

splashPage.append(start);


// To start game
	$(start).click(function(){
		var newGame = new Game();
		var gameBG= $("#background").removeClass("splash").addClass("background")
		start.remove();
	})
		
}

new Instruction();
