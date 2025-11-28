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
    createCanvas(640, 480);


    video = createCapture(VIDEO, {flipped: true});


    video.size(640, 480);
    video.hide();

    console.log("Video is created successfullyyy... ");
    
    bodyPose.detectStart(video, gotPoses);
    console.log("Detection is starting ..");

    connections = bodyPose.getSkeleton();
    console.log(connections);
}

function draw(){
    image(video, 0, 0);

    if(results.length > 0){
        let result = results[0];
        

        // connection line
        stroke(255, 255, 0);
        strokeWeight(2);
        for(let i = 0; i < connections.length; i++){

            let connection = connections[i];

            let from = result.keypoints[connection[0]];
            let to = result.keypoints[connection[1]];
            
            if(from.confidence > 0.1 && to.confidence > 0.1){
                line(from.x, from.y, to.x, to.y);
            }
        }
        
      

        // dots 
        for(let i = 0; i < result.keypoints.length; i++){
            let keypoint = result.keypoints[i];
            
            noStroke();

            if(i === 0){
                fill(255, 0, 0); // red nose dott
                circle(keypoint.x, keypoint.y, 15);
            } else {
                fill(0, 255, 0); // all the points left
                if(keypoint.confidence > 0.1){ 
                    circle(keypoint.x, keypoint.y, 12);
                }
            }
        }
    }
}