var flyImage, mosquitoImage, antImage, beeImage, player, playerImage;
var groupM, groupB, groupA, groupF;
function preload() {
  mosquitoImage = loadImage("M2.png");
  flyImage = loadImage("F2.png");
  antImage = loadImage("A2.png");
  beeImage = loadImage("B2.png");
  playerImage = loadImage("P2.png")
}


function setup() {
  createCanvas(800, 800);
  player=createSprite(400, 400, 40, 40);
  player.addImage(playerImage);
  groupM=new Group();
  groupA=new Group();
  groupB=new Group();
  groupF=new Group();
}

function draw() {
  background(255,255,255);
  player.x=mouseX;
  player.y=mouseY;
  mosquito();
  fly();
  ant();
  bee();  
  drawSprites();
}

function mosquito() {
  if (frameCount% 100==0){
    var m=createSprite(random(50, 750), 0, 30, 30);
    m.addImage(mosquitoImage);
    m.shapeColor="black";
    m.velocityY=random(7, 15);
    m.lifetime=110;
    m.depth=player.depth;
    player.depth+=1;
    groupM.add(m);
  }
}
function fly() {
  if (frameCount% 120==0){
    var f=createSprite(random(50, 750), 0, 30, 30);
    f.addImage(flyImage);
    f.shapeColor="brown";
    f.velocityY=random(10, 15);
    f.lifetime=110;
    f.depth=player.depth;
    player.depth+=1;
    groupF.add(f);
  }
}
function ant() {
  if (frameCount% 130==0){
    var a=createSprite(random(50, 750), 0, 30, 30);
    a.addImage(antImage);
    a.shapeColor="red";
    a.velocityY=random(5, 10);
    a.lifetime=110;
    a.depth=player.depth;
    player.depth+=1;
    groupA.add(a);
  }
}
function bee() {
  if (frameCount% 250==0){
    var b=createSprite(random(50, 750), 0, 30, 30);
    b.addImage(beeImage);
    b.shapeColor="yellow";
    b.velocityY=random(5, 30);
    b.lifetime=110;
    b.depth=player.depth;
    player.depth+=1;
    groupB.add(b);
  }
}
