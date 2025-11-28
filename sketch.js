let video;
let bodyPose;
let results = [];
let connections = [];

function preload(){
    bodyPose = ml5.bodyPose("MoveNet", {flipped: true});
}

function gotPoses(poses){
    results = poses;
    console.log("Poses detected:", results);
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    video = createCapture(VIDEO, {flipped: true});
    video.hide();

    console.log("Video is created successfullyyy... ");
    
    bodyPose.detectStart(video, gotPoses);
    console.log("Detection is starting ..");

    connections = bodyPose.getSkeleton();
    console.log(connections);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    // Calculate aspect ratio to fit video without stretching
    let videoAspect = video.width / video.height;
    let canvasAspect = width / height;
    
    let drawWidth, drawHeight, x, y;
    
    if(canvasAspect > videoAspect) {
        // Canvas is wider than video
        drawHeight = height;
        drawWidth = height * videoAspect;
        x = (width - drawWidth) / 2;
        y = 0;
    } else {
        // Canvas is taller than video
        drawWidth = width;
        drawHeight = width / videoAspect;
        x = 0;
        y = (height - drawHeight) / 2;
    }
    
    background(0);
    image(video, x, y, drawWidth, drawHeight);
    
    // Scale keypoints to match the drawn video size
    let scaleX = drawWidth / video.width;
    let scaleY = drawHeight / video.height;

    if(results.length > 0){
        let result = results[0];
        
        push();
        translate(x, y);

        // connection line
        stroke(255, 255, 0);
        strokeWeight(2);
        for(let i = 0; i < connections.length; i++){

            let connection = connections[i];

            let from = result.keypoints[connection[0]];
            let to = result.keypoints[connection[1]];
            
            if(from.confidence > 0.1 && to.confidence > 0.1){
                line(from.x * scaleX, from.y * scaleY, to.x * scaleX, to.y * scaleY);
            }
        }
        
      

        // dots 
        for(let i = 0; i < result.keypoints.length; i++){
            let keypoint = result.keypoints[i];
            
            noStroke();

            if(i === 0){
                fill(255, 0, 0); // red nose dott
                circle(keypoint.x * scaleX, keypoint.y * scaleY, 15);
            } else {
                fill(0, 255, 0); // all the points left
                if(keypoint.confidence > 0.1){ 
                    circle(keypoint.x * scaleX, keypoint.y * scaleY, 12);
                }
            }
        }
        
        pop();
    }
}