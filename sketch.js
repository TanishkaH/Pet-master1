//Create variables here
var database, food, foodRef, dog, dog_img, dHappy, dHappy_img;

function preload()
{
	dog_img = loadImage('images/dogImg.png')
  dHappy_img = loadImage('images/dogImg1.png')
}

function setup() {
  createCanvas(700,500);
  database = firebase.database();
  // console.log(database);
  dog = createSprite(400,350,20,20)
  dog.addImage(dog_img);
  dog.scale = 0.3

}


function draw() {  
  background(46, 139, 87)
  readFood();
  textSize(25);
  fill('white');
  text(food, 400, 90);

  if(keyWentDown(UP_ARROW)){
    food = food -1;
    updateFood();
  }

  if(food==0){
    dog.addImage(dHappy_img)
    text('Yummy! my tummy is full!', 200, 200)
  }


  drawSprites();
  //add styles here

}

function readFood(){
foodRef = database.ref('food');
foodRef.on('value', (data)=>{
food = data.val();
})
}

function updateFood(){
var updateRef = database.ref('/');
updateRef.update({food: food})
}


