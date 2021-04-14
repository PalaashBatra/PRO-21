var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white"
    ball.velocityX = 2
    ball.velocityY = 3

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    text(mouseX+","+mouseY,10,45)
    
    drawSprites();

    boop()
    ooop()
    goop()
    roop()

}
function boop(){
    if(ball.isTouching(block1)){
        ball.bounceOff(block1);
        ball.shapeColor = "blue";
        music.play()
        console.log("boop")
    }
}

function ooop(){
    if(ball.isTouching(block2)){
        ball.bounceOff(block2);
        ball.shapeColor = "orange";
        ball.velocityX = 0
        ball.velocityY = 0
        console.log("ooop")
    }
}
function goop(){
    if(ball.isTouching(block3)){
        ball.shapeColor = "green";
        music.play();
        console.log("goop")
    } 
}
function roop(){
    if(ball.isTouching(block4)){
        ball.bounceOff(block4);
        ball.shapeColor = "red";
        music.play();
        console.log("roop")
    }
}