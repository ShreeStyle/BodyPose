# Body Pose Detection

Real-time body pose detection using ML5.js and p5.js. This project detects 17 keypoints on your body and displays them with skeleton connections in real-time using your webcam.

## Demo

![Demo Video](demovideo.mp4)

## Features

- **Real-time pose detection** using ML5.js MoveNet model
- **17 body keypoints** tracked with visual indicators
- **Skeleton visualization** with yellow connecting lines
- **Red nose indicator** for easy tracking
- **Fully responsive** - works on any screen size
- **Aspect ratio maintained** - no stretching or distortion
- **Flipped video** for mirror effect

## Body Keypoints Detected

The model detects 17 keypoints:
- Nose (displayed in red)
- Eyes, ears
- Shoulders, elbows, wrists
- Hips, knees, ankles

## Technologies Used

- [p5.js](https://p5js.org/) - Creative coding library
- [ML5.js](https://ml5js.org/) - Machine learning library
- MoveNet - Pose detection model

## Setup & Installation

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Allow webcam access when prompted
4. Your body pose will be detected in real-time!

## Usage

Simply stand in front of your webcam and the application will:
- Display your webcam feed
- Detect your body pose
- Show green dots on detected keypoints
- Show a red dot on your nose
- Draw yellow lines connecting body parts

## File Structure

```
BodyPose/
├── index.html      # Main HTML file
├── sketch.js       # p5.js sketch with pose detection logic
├── style.css       # Empty styles file
├── README.md       # This file
└── demovideo.mp4   # Demo video (to be added)
```

## How It Works

1. **Video Capture**: Uses p5.js `createCapture()` to access webcam
2. **Pose Detection**: ML5.js MoveNet model processes video frames
3. **Keypoint Tracking**: Detects 17 body keypoints with confidence scores
4. **Visualization**: Draws circles on keypoints and lines for skeleton
5. **Responsive Design**: Maintains aspect ratio across all screen sizes

## Browser Compatibility

Works best in modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: Requires webcam access permission

## Console Output

Open browser console (`Cmd+Option+I` on Mac) to see:
- Video creation status
- Detection status
- Skeleton connections
- Detected poses array

## Code Highlights

- **Aspect ratio preservation**: Video scales to fit screen without stretching
- **Keypoint scaling**: Coordinates are properly scaled to match displayed video
- **Confidence filtering**: Only shows keypoints with >0.1 confidence
- **Window resize handling**: Automatically adjusts to screen size changes

## Customization

You can customize:
- **Colors**: Change `fill()` and `stroke()` values
- **Point sizes**: Modify `circle()` diameter values
- **Line thickness**: Adjust `strokeWeight()`
- **Confidence threshold**: Change `0.1` to different values

## License

Free to use for educational purposes.

## Credits

Created with ML5.js and p5.js libraries.
