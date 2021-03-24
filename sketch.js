var canvas;
var surface1,surface2,surface3,surface4;
var box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces 
 
    surface1 = createSprite(100,580,190,30);
    surface1.shapeColor = "blue"; 

    surface2 = createSprite(300,580,190,30);
    surface2.shapeColor = "red";

    surface3 = createSprite(500,580,190,30);
    surface3.shapeColor = "purple";

    surface4 = createSprite(700,580,190,30);
    surface4.shapeColor = "green";

    //create box sprite and give velocity

    box = createSprite(Math.round(random(100,700)),50,50,50);
    box.shapeColor = "white";

    box.velocityX = Math.round(random(-8,6));

    box.velocityY = Math.round(random(2,8));

}

function draw() {
    background(rgb(169,169,169));
   
    //create edgeSprite 
    if(box.x > 775 || box.x < 25) {

        box.velocityX = box.velocityX * (-1);

    } 

    if(box.y > 775 || box.y < 25) {

        box.velocityY = box.velocityY * (-1);

    } 


    if(surface1.y - box.y <= 35 && box.x < 190) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = surface1.shapeColor;

        music.play();

    }

    if (surface1.isTouching(box) && box.bounceOff(surface1)) {

        // change Color 

        box.shapeColor = surface1.shapeColor
    }


    if(surface2.y - box.y <= 35 && box.x < 390 && box.x > 210) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = surface2.shapeColor;

        music.play();

    }

    if (surface2.isTouching(box) && box.bounceOff(surface2)) {

        // change Color 

        box.shapeColor = surface2.shapeColor
    }


    if(surface3.y - box.y <= 35 && box.x > 410 && box.x < 590) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = surface3.shapeColor;
 

        music.play();
    }

    if (surface3.isTouching(box) && box.bounceOff(surface3)) {

        // change Color 

        box.shapeColor = surface3.shapeColor
    }


    if(surface4.y - box.y <= 35 && box.x > 610 && box.x < 790) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = surface4.shapeColor; 

        music.play();

    }

    if (surface4.isTouching(box) && box.bounceOff(surface4)) {

        // change Color 

        box.shapeColor = surface4.shapeColor
    }


 // add condition to check if box touching surface and make it box

    text(mouseX+','+mouseY,10,45);


    drawSprites();

    







}

 
    




    




