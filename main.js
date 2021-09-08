nosex=0;
nosey=0;
leftwrist=0;
rightwrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
   video.size(500,500);
   canvas=createCanvas(500,400);
   canvas.position(800,200);
   poseNet=ml5.poseNet(video,handler);
   poseNet.on("pose",position);
   textSize(difference);
}
function handler(){
    console.log("posenet loaded!");
}
function position(result){
    if(result.length>0){
        console.log(result);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        leftwrist=result[0].pose.leftWrist.x;
        rightwrist=result[0].pose.rightWrist.x;
        difference=floor(leftwrist-rightwrist);
    }
}
function draw(){
    background("lavender");
    document.getElementById("Font_Size").innerHTML="Font size is "+difference+" px";
    fill("blue");
    stroke("purple");
    text("Coding",20,200);
}