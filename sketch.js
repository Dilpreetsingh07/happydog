const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tommy,happydog,foodS,foodstock;
var database;
function preload()
{
hg=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
 
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

 tommy=new Dog(400,350,100,100)







 foodstock=database.ref("food")
  foodstock.on("value",readstock)


}


function draw() {  
background("46,136,87")

if(keyDown(UP_ARROW)){
  writestock(foodS);
  tommy.addImage(hg)
}
 tommy.display();
 

 textSize(20)
 stroke("blue")
 text("NOTE : PRESS UP_ARROW KEY TO FEED DOG",200,100 )
}



function readstock(data){
  foodS=data.val();
}


function writestock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }





  database.ref("/").update({
    food:x
  })
}