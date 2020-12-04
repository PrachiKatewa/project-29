var a;
var circles=[];
var box1 , box2 , box3 , box4 , box5 ;
var box6 , box7 , box8 ;
var box9 ; 

function setup() {
  createCanvas(800,800);
  stroke(255)

  box1 = new box(330,235,30,40);
  box2 = new box(360,235,30,40);
  box3 = new box(390,235,30,40);
  box4 = new box(420,235,30,40);
  box5 = new box(450,235,30,40);

  box6 = new box(360,195,30,40);
  box7 = new box(390,195,30,40);
  box8 = new box(420,195,30,40);
  
  box9 = new box(390,155,30,40);

  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {

  }
} 
