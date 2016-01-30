# movable-shape
Intro: ```movable-shape``` is a way of animating a shape that doesn't need you to refactor everything to be relative to itself. It's super useful to do that, and you should get in the habit of doing that. But! ```movable-shape``` provides a sort of wrapper around p5.js drawing code that lets you move it around, even if it's dumb.

Concepts that are introduced:
* **Multiple files:** You will note that there are now two separate JavaScript files: ```sketch.js``` and ```movable-shape.js```. This helps keep my work (the guts of ```movable-shape```) separate from your work (drawing your object). (To see what's happening, look at lines 8 & 9 of ```index.html```.)

* **Overwriting properties/extending code:** You'll notice that I'm asking you to overwrite the ```drawShape()``` function in ```sketch.js```. It's defined on ```movableShape``` as an empty function, and lines 8-10 of ```sketch.js``` overwrite that function with whatever you want to put in it.

* **Wrapping code:** You can essentially copy-and-paste your unrefactored drawings into ```drawShape()```, and ```movableShape``` will let you move your drawing around at will.
