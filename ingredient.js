const Ingredient = function(background, settings, key, speed, isControlled) {

  // setting an id on every spawning ingredient
  this.id = settings.id++;
  this.speed = speed;
  this.isControlled = isControlled;

  this.key = key;

  this.ingredient = $('<div/>')
    .attr('id', this.id)
    .addClass(key)
    .css('left', Math.floor(Math.random() * (450 - 25)) + 25 + 'px');

  background.append(this.ingredient);

  this.boundingBox = $('<div/>').addClass('rect2');

  this.ingredient.append(this.boundingBox);


  this.wall = function wall() {

    const ingredientElementRect = this.ingredient.get(0).getBoundingClientRect();
    const backgroundElmRect = background.get(0).getBoundingClientRect();

    if (ingredientElementRect.left < backgroundElmRect.left) {
      this.ingredient.css('left', '0px');
    }

    if (ingredientElementRect.right > backgroundElmRect.right) {
      this.ingredient.css('left', backgroundElmRect.width - ingredientElementRect.width + 'px');
    }

  };

  this.move = function move(interactions) {
    if (this.stacked && this.isControlled) {
      if (interactions.left) {
        this.ingredient.animate({left: '-=5'}, 1);
      }
      if (interactions.right) {
        this.ingredient.animate({left: '+=5'}, 1);
      }
    } else if (!this.stacked) {
      this.ingredient.animate({top: '+=' + this.speed + 'px'}, 1);
    }

    this.wall();
  };

  this.removeSelf = function removeSelf() {
    this.ingredient.remove();
    this.ingredient = null;
    this.boundingBox = null;
  };

  this.render = function render(interactions) {
    this.move(interactions);
  }


};