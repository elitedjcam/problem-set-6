/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  var hello = document.getElementById('canvas1').getContext('2d');
  hello.font = '48px sans-serif';
  hello.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */



function drawRectangle() {
  let height = prompt("Enter a height for the rectangle.")
  let width = prompt("Enter a width for the rectangle.")
  let xCoord = prompt("Enter an x-coordinate.")
  let yCoord = prompt("Enter a y-coordinate.")

  if (height < 1) {
    alert("Your height is too small.")
  } else if (height > 250) {
    alert("The rectangle won't fit on the canvas")
  }
  if (width < 1) {
    alert("Your width is too small.")
  } else if (width > 250) {
    alert("The rectangle won't fit on the canvas")
  }
  if (xCoord < 5 || xCoord > 250) {
    alert("Your x-coordinate is too small.")
  } else if (xCoord > 250) {
    alert("The rectangle won't fit on the canvas")
  }
  if (yCoord < 5 || yCoord > 250) {
    alert("Your y-coordinate is too small.")
  } else if (yCoord > 250) {
    alert("The rectangle won't fit on the canvas")
  }

  var rectAngle = document.getElementById('canvas2').getContext('2d');
  rectAngle.strokeRect(height, width, xCoord, yCoord);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let color = prompt("Enter a color.")
  let rectangleColor;
  if (color == "red") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "red"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color == "black") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "black"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color == "blue") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "blue"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color == "green") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "green"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color == "orange") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "orange"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color == "purple") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "purple"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color == "yellow") {
    var colorRect = document.getElementById('canvas3').getContext('2d');
    colorRect.fillStyle = "yellow"
    colorRect.fillRect(10, 10, 100, 50)
  }
  if (color != "red" && color != "blue" && color != "black" && color != "green" && color != "orange" && color != "yellow" && color != "purple") {
    alert(color + " is not a supported color.")
  }
}
/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let xcoord=10;
  let ycoord=10;
  let a;
  let b;
  let c;
  let triangle = document.getElementById("canvas4");
  let context = triangle.getContext("2d");
  context.clearRect(0, 0, triangle.width, triangle.height);
  while(true){
	a = Number(prompt("Enter the length of the first side."));
	b = Number(prompt("Enter the length of the second side."));
	c = Number(prompt("Enter the length of the hypotenuse."));
	if (((a**2) + (b**2) == (c**2)) && a > 0 && b > 0 && c > 0 && triangle.width - x - a >= 0 && triangle.height - y - b >= 0){
		break;
	}else{
		alert("That is not a valid triangle")
    break;
	}
  }
 //Line A
 context.beginPath(); //Begins a path
 context.moveTo(xcoord,ycoord); //Choses the starting point
 context.lineTo(xcoord,ycoord+a); //Line A coordinates: It is a vertical line, therefore the same x value but different y-value
 context.stroke(); //Draws the line
 //Line B
 context.beginPath();
 context.moveTo(xcoord,ycoord+a);
 context.lineTo(xcoord+b,ycoord+a);
 context.stroke();
 //Hypotenuse
 context.beginPath();
 context.moveTo(xcoord,ycoord);
 context.lineTo(xcoord+b,ycoord+a);
 context.stroke();
}


/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

//arc(x, y, radius, startAngle, endAngle, anticlockwise)
function drawSmileyFace() {
  let radius;
  let smile = document.getElementById('canvas5');
  let ctx = smile.getContext('2d');
  ctx.clearRect(0, 0, smile.width, smile.height);
	while(true){
		radius=Number(prompt("Please enter a valid radius."));
		if(radius>=1 && radius<=smile.width && Number.isInteger(radius)){
			break;
		}
	}
  let x=smile.width;
  let y=smile.height;
  let eyeRadius=radius*.1
  let mouthRadius=radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2); // Face
  ctx.stroke();

  ctx.beginPath(); //Right Eye
  ctx.arc(x/2 - radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath(); //Left Eye
  ctx.arc(x/2+radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath(); //Mouth
  ctx.arc(x/2, y/2, mouthRadius,0, Math.PI);
  ctx.stroke();
  }


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      let outerRadius=Number(prompt())
      let innerRadius=Number(prompt())
      if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
        let points=5;
        let outerx=[];
        let outery=[];
        let innerx=[];
        let innery=[];
        for(let i=0;i<points;i++){
          outerx.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          outery.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          innerx.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
          innery.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let j=0;j<outerx.length;j++){
          ctx.lineTo(innerx[j], innery[j]);
          ctx.lineTo(outerx[j+1], outery[j+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('invalid input');
      }
  }



/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
let stopSign;

var canvas = document.getElementById('canvas7')
let ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
let house;
let base;
let baseColor = prompt("Choose a color for the house.");
let doorColor = prompt("Choose a color for the door.");

var house = document.getElementById('canvas9')
let ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, house.width, house.height);
ctx.translate(512, 10)
}
