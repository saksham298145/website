var c1
var c2
var c3
var c4
var c5
var c6
var c7
function preload(){
c1Image=loadImage("1(1).jpg")
c2Image=loadImage("1(2).jpg")
c3Image=loadImage("1(3).jpg")
c4Image=loadImage("1(4).jpg")
c5Image=loadImage("1(5).jpg")
c6Image=loadImage("1(6).jpg")
c7Image=loadImage("1(7).jpg")
}
function setup(){
c1=createSprite(30,30,40,40)
c1.addImage(c1Image)
c2=createSprite(30,40,40,40)
c2.addImage(c1Image)
c3=createSprite(30,30,40,40)
c3.addImage(c1Image)
c4=createSprite(30,30,40,40)
c4.addImage(c1Image)
c5=createSprite(30,30,40,40)
c5.addImage(c1Image)
c6=createSprite(30,30,40,40)
c6.addImage(c1Image)
c7=createSprite(30,30,40,40)
c7.addImage(c1Image)

}
function draw(){
    drawSprites()
}