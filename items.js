var items = function(settings) {
 
// food items should be an object with an assigned points
  var lettuce = $('<div/>').addClass('lettuce');
  var meat =$('<div/>').addClass('meat');
  var cheese =$('<div/>').addClass('cheese');
  var tomato =$('<div/>').addClass('tomato');
  var topBun = $('<div/>').addClass('topBun');
  var chilliBomb = $('<div/>').addClass('chilliBomb');

// food items object to be stored in the array 
  var foodArray = [{lettuce: 10}, {meat: 15}, {cheese: 5}, {tomato: 20}, {topBun: 50}, {chilliBomb: 0}];

  var score = [];

	

// time interval for when food items should start generating, 

var timer = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


 console.log(timer(30,60));

var count = timer(30,60);
var coundown = count 

// it should loop through the items array and generate a particular index.

var foodGen = function() {
	
  }


//if an item is on the stack, it needs to move with the plate

//if an item is not on the stack it will continue falling 

	this.render = function(interactions){
		move(interactions);
	}



}
