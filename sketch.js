function setup() {
  

createCanvas(640, 480);
fill(255, 255, 0);
circle(320, 240, 200);
triangle( 40, 60, 60, 40, 60, 60);
strokeWeight(10);
stroke(255, 255, 0);
line( 320, 240, 300, 20);


;

}
function draw() {
 
  
}

function circle(x, y, diameter){
  
  ellipse(x, y, diameter, diameter);
  
}