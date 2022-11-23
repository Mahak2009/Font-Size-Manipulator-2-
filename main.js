function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(480, 480);
    canvas.position(560, 85);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Loaded Correctly");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background("#b5e9bf");
}