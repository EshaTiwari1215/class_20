var fixed_rec, moving_rec;


function setup() {
  createCanvas(800,400);
  fixed_rec = createSprite(400, 200, 50, 50);
  moving_rec = createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  
  moving_rec.y = World.mouseY;
  moving_rec.x = World.mouseX;

  moving_rec.shapeColor=("yellow");
  fixed_rec.shapeColor=("yellow");
console.log(moving_rec.x - fixed_rec.x);

if(moving_rec.x - fixed_rec.x < fixed_rec.width/2 + moving_rec.width/2 
  && fixed_rec.x - moving_rec.x < fixed_rec.width/2 + moving_rec.width/2
 && moving_rec.y - fixed_rec.y < fixed_rec.height/2 + moving_rec.height/2 
  && fixed_rec.y - moving_rec.y < fixed_rec.height/2 + moving_rec.height/2){
  moving_rec.shapeColor = ("aqua");
  fixed_rec.shapeColor = ("aqua");
}
else{
  moving_rec.shapeColor=("yellow");
  fixed_rec.shapeColor=("yellow");
}
  drawSprites();
}