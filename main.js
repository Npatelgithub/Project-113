function preload(){

}

function setup(){
 canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
}

function draw(){
image(video, 100,100,300,300);

fill(0,0,255);
stroke(0,0,255);
circle(50,50,50);
circle(435,50,50);
circle(50,430,50);
circle(435,430,50);

fill(255,0,0);
stroke(255,0,0);
rect(70,40,345,20);
rect(70,420,345,20);
rect(40,70,20,340);
rect(425,70,20,340);

}

function take_snapshot(){
    save('myImage.png');
}