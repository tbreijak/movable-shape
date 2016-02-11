// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myCar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myCar.drawShape = function () {
	  rect(300, 400, 450, 100); // draw the body
	  quad(450, 350, 600, 350, 625, 400, 400, 400); // draw the top

	  ellipse(360, 500, 75, 75); // draw the front tire
	  ellipse(650, 500, 75, 75); // draw the rear tire

	  rect(725, 450, 30, 30); // draw tail light // your code goes here
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(800, 800);
};

draw = function() {
  background(100); // refresh the background
  myCar.display(); // display myShape
  myCar.update(); // and then update it
};
