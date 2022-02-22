song =""
song2 =""
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
scoreLeftWrist = 0

function setup(){

 canvas = createCanvas(600, 500)
 canvas.center()

video = createCapture(VIDEO)
video.hide()

poseNet= ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('Saira')
}

function preload(){
song = loadSound("Song1.mp3")
song = loadSound("Song2.mp3")
}

function draw(){
    image(video, 0, 0, 600, 500)

    song_variable.isPlaying()

    fill("red");
    stroke("red")

if(scoreleftWrist > 0.2)
{
    circle( rightWristX, rightWristY, 20)
    song2_variable.stop()

    if(song == false)
    {
       song.play()
       document.getElementById("heading").innerHTML = "We don't talk about Bruno"

    }

}
  }

function play(){
song.play()
}

function gotPoses(results)
{

    if(results.length > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[9].score
        console.log("scoreLeftWrist =" + scoreLeftWrist);

        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.rightWrist.y
        console.log("leftWristX =" + leftWristX +" LeftWristY =" + leftWristY)

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX =" + rightWristX +" rightWristY =" + rightWristY)
    }
}
