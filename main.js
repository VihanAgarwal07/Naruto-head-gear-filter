rightEye_x=0;
rightEye_y=0;

leftWrist_x=0;
rightWrist_x=0;
width_headband=0;
function preload(){
    head_gear=loadImage("Naruto_headband.png");
}
function setup(){
    video=createCapture(VIDEO);
    video.size(1000,850);
    canvas=createCanvas(1000,700);
    canvas.center();
    video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("Model is Ready");
}
function gotPoses(results){
    console.log(results);
console.log(results.length)
if(results.length>0){
    rightEye_x=results[0].pose.rightEye.x;
    rightEye_y=results[0].pose.rightEye.y;

    leftWrist_x=results[0].pose.leftWrist.x;
    rightWrist_x=results[0].pose.rightWrist.x;
    width_headband=floor(leftWrist_x-rightWrist_x);
    console.log(width_headband)
    if(width_headband<150){
        width_headband=150;
    }

}
}
function draw(){
    image(video,0,0,1000,850);
    image(head_gear,rightEye_x-150,rightEye_y-350,width_headband,400)
}