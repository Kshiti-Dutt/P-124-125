difference=0;
rightwristX=0;
leftwristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 400);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, loaded);
    poseNet.on('pose', gotposes);
}

function loaded()
{
    console.log("PoseNet Is Activated");
}

function gotposes(results)
{
    if (results.length > 0)
    {
    console.log(results);
    rightwristX = results[0].pose.rightWrist.x;
    leftwristX = results[0].pose.leftWrist.x;
    difference = floor(leftwristX - rightwristX);
    }
}

function draw()
{
    background("aqua");
    textSize(difference);
    fill("black");
    text('School NEWS', 100,150);

}