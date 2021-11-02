// this is a very simple sketch that demonstrates how to place a video cam image into a canvas
let img;
let video;
let pose;

function preload() {
  img = loadImage("nose.png");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("modelLoaded function has been called so this work!!!!");
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function draw() {
  image(video, 0, 0);
  if (pose) {
    img.resize(50, 50);
    image(img, pose.nose.x - 15, pose.nose.y - 10);
  }
}
