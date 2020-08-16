function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255,255,255);
  mosquitos();
  fly();
  ant();
  bees();  
  drawSprites();
}

function mosquitos() {
  if (frameCount% 100==0){
    var m=createSprite(random(50, 750), 0, 30, 30);
    m.shapeColor="black";
    m.velocityY=random(7, 15);
    m.lifetime=110;
  }
}
function fly() {
  if (frameCount% 120==0){
    var f=createSprite(random(50, 750), 0, 30, 30);
    f.shapeColor="brown";
    f.velocityY=random(10, 15);
    f.lifetime=110;
  }
}
function ant() {
  if (frameCount% 130==0){
    var a=createSprite(random(50, 750), 0, 30, 30);
    a.shapeColor="red";
    a.velocityY=random(5, 10);
    a.lifetime=110;
  }
}
function bees() {
  if (frameCount% 250==0){
    var b=createSprite(random(50, 750), 0, 30, 30);
    b.shapeColor="yellow";
    b.velocityY=random(5, 30);
    b.lifetime=110;
  }
}






