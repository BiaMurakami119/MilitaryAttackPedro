const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var superxao,omi
var la,b
var engine, world;
var desfio = 0
var b = [];


function preload(){
  la=loadImage("ceu.jpg")
 // b=loadImage("b.png")
  
}
function setup() {
  createCanvas(1365,615);
  engine = Engine.create();
  world = engine.world;

  superxao = new Xao(00,820,4000,400)
  omi = new Cara(100,390)
  naoomi = new Caça(1200,200)
  
}

function draw() {
  background(la); 
  Engine.update(engine); 
  drawSprites();

  superxao.display()
  //console.log(superxao.body.position.y)
  omi.display()


  naoomi.display()

  if (frameCount % 50 == 0) {
    var bomba = new Missil();
    //console.log(bomba.body.position.x)
    b.push(bomba);
    
  }
  if(frameCount % 30 == 0){
    desfio=desfio+1
  }
  textSize(20)
  text(desfio,1000,200)

  for (var i = 0; i < b.length; i++) {
    b[i].display();

    //le
    var collision = Matter.SAT.collides(b[i].body, omi.body);
    console.log(b[i])
  
    if (collision.collided) {
      console.log("oi")
    }
  }
  
}
/*function balaoVermelho() {
  
  var vermelho = createSprite(1100,Math.round(random(20, 615)), 50, 50);
  vermelho.addImage(b)
  vermelho.velocityX = -6;
  vermelho.lifetime = 200;
  vermelho.velocityX = -(6 + desfio /10 );
  v.add(vermelho);
  
}*/

function keyPressed(){
  if(keyCode == 32){
    omi.cima();
    //console.log("oi")
  }
}


