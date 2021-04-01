var car,boy,path,coin,coinG;
var carImg,pathImg,coinImg;
var score;

function preload()
{
  carImg = loadImage("car.png");

  pathImg = loadImage("road.png");

  coinImg = loadImage("coin.png");

}

function setup() {
  createCanvas(1500,900);

 path = createSprite(650,340);
 path.addImage(pathImg);
 path.velocityY = 10;
 path.scale = 6;

 car = createSprite(400,470,20,20);
 car.addImage(carImg);
 car.scale = 0.2;
 
 coinG = new Group()

 score = 0;
}

function draw() {
  background(255,255,255); 

  text("Score: "+ score, 750,450);

  car.x = World.mouseX;
  
  edges= createEdgeSprites();
  car.collide(edges);

  if(path.y>600){
    path.y = height/2;
  }

  createCoin(); 

  if(coinG.isTouching(car)){
    coinG.destroyEach();
    score= score + 1;
  }

  drawSprites();
}

function createCoin(){
  if(World.frameCount % 80 == 0){
    var coin = createSprite(Math.round(random(100,500),100,50,50))
    coin.addImage(coinImg);
    coinG.add(coin);
    coin.scale = 0.07;
    coin.velocityY=10;

  }
}