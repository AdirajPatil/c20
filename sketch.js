var car,Wall;


var speed, weight; 


function setup() {
  createCanvas(800, 400);


	speed=10;
	weight=100


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=("golden")



  	Wall=createSprite(200,200, 60, height/2)
  	Wall.shapeColor=color("gold")
}


function draw() {
  background(0);

  if(Wall.x-car.x < (car.width+Wall.width)/2)
  {
  	car.velocityX=10;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  

  drawSprites()
}