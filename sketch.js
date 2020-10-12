//Create variables here
var  dogs,dog, happyDog, database, foodS, foodStock, database,food ;

function preload()
{
  //load images here
  
dog = loadImage("images/dogImg1.png");
happyDog=loadImage("images/dogImg.png");


}

function setup() {
  database = firebase.database();
  
  createCanvas(500, 500);
  
  
  foodStock=database.ref('food');
  foodStock.on("value",readstock);

//dog sprite
dogs= createSprite(400,200,50,50);
dogs.addImage(dog); 
dogs.scale=0.2;


}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writestock(foodS);
    dog.addImage(happyDog);
  
  
    }
  
  drawSprites();
  //add styles here
  fill("red");
  text("foodstock"+foodStock,200,100);
}







function readstock(data){
foodS=data.val();

}

function writestock(x){

  if(x<=0){

    x = 0;
  }

  else {
x=x-1;
  }

database.ref("/").update({
food:x 

});

}





