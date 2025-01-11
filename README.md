# TM-Image-Model for Scratch

## Overview
The **TM Image Model with Camera** extension is a powerful tool designed to bring the capabilities of machine learning and computer vision into the Scratch environment. This extension integrates Teachable Machine image models and webcam functionality to enable real-time image classification and interaction. It is a perfect addition for educators and students who want to explore AI technologies in an accessible and interactive way.

This extension allows you to:
- Load pre-trained image classification models from the Teachable Machine.
- Use the device's webcam to capture images for prediction.
- React to predictions using Scratch's event-driven blocks.
- Incorporate the detected class and its probability into your Scratch projects.

By combining Scratch's simplicity with machine learning's power, this extension bridges the gap between coding and AI in an educational setting.


## Features
The TM Image Model with Camera extension offers the following capabilities:

### Loading Models
You can load image classification models directly from Teachable Machine using a URL. Models trained on Teachable Machine are designed to classify objects, animals, or any other categories based on visual inputs.

### Camera Integration
The extension starts the device's camera, displaying its feed directly in the Scratch canvas. This seamless functionality makes it easy to inspect what the camera sees while running predictions visually.

### Real-Time Predictions
Once the camera is started and the model is loaded, the extension predicts the class of objects it sees in real-time. The predictions are accessible as the current class and its associated probability.

### Event-Driven Programming
With the `when model detects` block, you can trigger events in your Scratch projects based on specific class detections. This makes creating interactive games, educational tools, and creative projects possible.


## How to Use
1. **Add the Extension**:
   Begin by cloning this repository or downloading the files. Ensure you configure Scratch to allow unsandboxed extensions.

2. **Load Your Model**:
   Train a model on [Teachable Machine](https://teachablemachine.withgoogle.com/) and copy its URL. Use the `load model from URL` block in Scratch to import it.

3. **Activate the Camera**:
   Use the `start camera` block to initiate the webcam feed. The camera will appear directly in the Scratch canvas.

4. **React to Predictions**:
   Add interactive logic using blocks like `when model detects` to create meaningful reactions to detected classes.

5. **Stop the Camera**:
   When you are done, use the `stop camera` block to deactivate the camera. This also resets the detected class and probability to default values.


## Technical Details
The extension relies on [TensorFlow.js](https://www.tensorflow.org/js) and the [Teachable Machine Image Library](https://github.com/googlecreativelab/teachablemachine-community) for model predictions. It ensures compatibility with all models trained on Teachable Machine's image classification system.


## Troubleshooting
- If the model does not load, please make sure that the URL points to a valid Teachable Machine image model and that you have internet access.
- If the camera does not start, verify that your browser has permission to access the camera and that no other applications are using it.
- Ensure that your device supports `getUserMedia`, which is required for camera functionality.


## License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.


## Contributions
Contributions are welcome! If you encounter any issues or have ideas for improvements, feel free to submit an issue or a pull request on GitHub.


## Contact
For inquiries or support, please reach out to `your-email@example.com`.
