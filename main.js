noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 110);


    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('posenet is initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex =" + noseX + "noseY =" + noseY );

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX);

        console.log( "left wrist =" + leftWristX + "right wrist =" + rightWristX+ "difference =" + difference);
    }
}

function draw()
{
    background("#969A97");
    document.getElementById("font_side").innerHTML = "Width and height of the text are =" + difference + "px";
    textSize(10);
    fill("#FFE787");
    circle(noseY , noseX, difference);
}