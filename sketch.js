var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score =0;



function preload(){
   bgImg = loadImage("plinko.png");
}

function setup() {
	createCanvas(380, 700);
	engine = Engine.create();
  world = engine.world;
  
  
  plinko1 = new Plinko(40,85,12);
  plinko2 = new Plinko(100,85,12);
  plinko3 = new Plinko(160,85,12);
  plinko4 = new Plinko(220,85,12);
  plinko5 = new Plinko(280,85,12);
  plinko6 = new Plinko(340,85,12);


  plinko7 = new Plinko(70,140,12);
  plinko8 = new Plinko(130,140,12);
  plinko9 = new Plinko(190,140,12);
  plinko10 = new Plinko(250,140,12);
  plinko11 = new Plinko(310,140,12);

  plinko12 = new Plinko(40,195,12);
  plinko13 = new Plinko(100,195,12);
  plinko14 = new Plinko(160,195,12);
  plinko15 = new Plinko(220,195,12);
  plinko16 = new Plinko(280,195,12);
  plinko17 = new Plinko(340,195,12);

  plinko18 = new Plinko(70,250,12);
  plinko19 = new Plinko(130,250,12);
  plinko20 = new Plinko(190,250,12);
  plinko21 = new Plinko(250,250,12);
  plinko22 = new Plinko(310,250,12);  

  plinko23 = new Plinko(40,305,12);
  plinko24 = new Plinko(100,305,12);
  plinko25 = new Plinko(160,305,12);
  plinko26 = new Plinko(220,305,12);
  plinko27 = new Plinko(280,305,12);
  plinko28 = new Plinko(340,305,12);

  plinko29 = new Plinko(40,415,12);
  plinko30 = new Plinko(100,415,12);
  plinko31 = new Plinko(160,415,12);
  plinko32 = new Plinko(220,415,12);
  plinko33 = new Plinko(280,415,12);
  plinko34 = new Plinko(340,415,12);


  plinko35 = new Plinko(70,360,12);
  plinko36 = new Plinko(130,360,12);
  plinko37 = new Plinko(190,360,12);
  plinko38 = new Plinko(250,360,12);
  plinko39 = new Plinko(310,360,12);

  plinko40 = new Plinko(40,525,12);
  plinko41 = new Plinko(100,525,12);
  plinko42 = new Plinko(160,525,12);
  plinko43 = new Plinko(220,525,12);
  plinko44 = new Plinko(280,525,12);
  plinko45 = new Plinko(340,525,12);

  plinko46 = new Plinko(70,470,12);
  plinko47 = new Plinko(130,470,12);
  plinko48 = new Plinko(190,470,12);
  plinko49 = new Plinko(250,470,12);
  plinko50 = new Plinko(310,470,12);
  
 

  
  ball = new Ball(Math.round(random(100,300)),-10,15);

  wall1 = new Wall(0,350,10,750);
  wall2 = new Wall(width,350,10,750);
  wall3 = new Wall(200,700,400,20);
  
}

function draw() {
  background(255,195,216);
  Engine.update(engine);
  
  
  createPlinko();
  wall1.display();
  wall2.display();
  wall3.display();
  
  image(bgImg,0,0,width,height);

  scores();
  push();
  fill("red");
  text("Score:"+score,20,20);
  

  if(ball.body.speed<0.3&&ball.body.position.y>0){
    text("Stuck? Press Space to try again",100,20);
  }
  if(ball.body.position.y<0){
    text("Press Space",150,20);
  }
  pop();
}









function scores(){
  var pos = ball.body.position;
  /*if(dist(ball.body.position.x,ball.body.position.y,ball.body.position.x,700)<50){
    if(pos.x>0&&pos.x<45){
       score=
    }
     console.log(score);
  }
  console.log(dist(ball.body.position.x,ball.body.position.y,ball.body.position.x,700));*/
  if(pos.y>650){
    console.log(score);
    Matter.Body.setStatic(ball.body,true);

    if(pos.x>0 && pos.x<45){
       score=score+100;
       Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>45&&pos.x<90){
      score=score+500;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>90&&pos.x<135){
      score=score+1000;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>135&&pos.x<180){
      score=score+0;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>180&&pos.x<225){
      score=score+10000;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>225&&pos.x<270){
      score=score+0;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>270&&pos.x<315){
      score=score+1000;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>315&&pos.x<360){
      score=score+500;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
    if(pos.x>360&&pos.x<400){
      score=score+100;
      Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-12});
    }
  }
}


function keyPressed(){
  if(keyCode===32){
    Matter.Body.setStatic(ball.body,false);
    Matter.Body.setPosition(ball.body,{x:Math.round(random(100,300)),y:-10});
    
  }
}














function createPlinko(){
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display(); 

  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();

  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();

  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display(); 

  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();

  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();

  
  
  ball.display();

  /*for(var i = 50;i<400;i = i+50){
    plinkoa = new Plinko(i,245,6);
    plinkoa.display();
  }

  for(var i = 25; i<400; i = i+50){
    plinkob = new Plinko(i,285,6);
    plinkob.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkoc = new Plinko(i,325,6);
    plinkoc.display();
  }
  for(var i = 25; i<400; i = i+50){
    plinkod = new Plinko(i,365,6);
    plinkod.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkoe = new Plinko(i,405,6);
    plinkoe.display();
  }
  for(var i = 25; i<400; i = i+50){
    plinkof = new Plinko(i,445,6);
    plinkof.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkog = new Plinko(i,485,6);
    plinkog.display();
  }
  for(var i = 25; i<400; i = i+50){
    plinkoh = new Plinko(i,525,6);
    plinkoh.display();
  }
  for(var i = 50; i<400; i = i+50){
    plinkoj = new Plinko(i,565,6);
    plinkoj.display();
  }*/

}





