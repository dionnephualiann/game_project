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

var audio = document.getElementById("music"); 

document.getElementById("mute").addEventListener('click', function (event) {
  
	if (audio.paused) {
  	audio.play();
} else {
    audio.pause(); 
}
});

new Instruction();
