# TM-Image-Model for Scratch


## Introduction

The **TM Image Model with Camera Extension** bridges the gap between visual machine learning models and the Scratch programming environment. Designed for educators, students, and enthusiasts, this extension offers a simple yet powerful way to integrate Teachable Machine image classification models into creative Scratch projects. Whether you are building a game, designing an interactive learning tool, or exploring computer vision, this extension equips you with the tools to leverage real-time predictions.

In this document, we will explore how the extension works, provide an in-depth explanation of its features, and illustrate its application with an example centered around music education. By the end, you will be able to use this extension to create engaging and innovative Scratch projects.


## Core Features and Functionality

### Loading Image Models
One of the most significant features of this extension is the ability to load image classification models from [Teachable Machine](https://teachablemachine.withgoogle.com/). Teachable Machine allows users to create machine learning models using labeled images. These models can recognize patterns, objects, or concepts based on what they have been trained on.

To load a model:
1. Train a model on Teachable Machine.
2. Publish and copy the model URL.
3. Use the Scratch block `load model from URL [URL]` to import the model into Scratch.

For example, if you trained a model to recognize musical instruments, the URL might look like this:
```plaintext
https://teachablemachine.withgoogle.com/models/instrumentID/
```

Once the model is loaded, it becomes ready for real-time prediction.

### Real-Time Camera Predictions
The extension integrates the device's camera to capture live video feeds and run predictions on them. When the camera is started, the feed becomes the input for the machine learning model. This enables real-time interaction where predictions continuously update based on the detected objects in the frame.

Key features:
- Live camera feed automatically appears on the Scratch stage.
- Predictions update dynamically.
- High compatibility with various browser environments.


## Example Project: Musical Instrument Recognition

### Overview
Imagine creating an interactive Scratch project where students learn about musical instruments by showing images of them to the camera. For example, when the camera recognizes a violin, the project plays a violin sound and displays information about the instrument. This project can serve as a fun and educational tool for music classes.

### Setting Up the Model
1. **Train a Model**:
   - Collect images of various musical instruments (e.g., violin, guitar, piano).
   - Train a Teachable Machine model to classify these images.

2. **Publish the Model**:
   - Obtain the URL for the trained model.

3. **Load the Model in Scratch**:
   - Use the `load model from URL [URL]` block and input the model's URL.

### Building the Scratch Project
1. **Start the Camera**:
   - Use the `start camera` block to activate the camera.

2. **Detect Instruments**:
   - Use the `when model detects [CLASSNAME]` block to trigger specific actions.

3. **Play Sounds and Display Information**:
   - Add sound blocks to play corresponding instrument sounds.
   - Use `say [message]` blocks to display information about the instrument.

#### Example Scratch Code
```plaintext
when green flag clicked
load model from URL [https://teachablemachine.withgoogle.com/models/instrumentID/]
start camera

when model detects [Violin]
play sound [Violin Sound] until done
say [This is a violin. It is a string instrument.]

when model detects [Guitar]
play sound [Guitar Sound] until done
say [This is a guitar. It is used in many genres of music.]
```

### Applications
- **Music Education**: Teach students about instruments interactively.
- **Interactive Games**: Build games where players must show the correct instrument to win.
- **Art Installations**: Use predictions to trigger visual or auditory effects based on the instrument detected.


## Technical Insights

### Camera Integration
When the camera is started using the `start camera` block, it leverages the browser's `getUserMedia` API to access the device's camera. The live feed is then processed by the Teachable Machine model to generate predictions. The feed is also displayed on the Scratch stage, making the interaction visual and engaging.

### Prediction Logic
The extension continuously analyzes the camera feed to identify objects. It outputs the detected class and its corresponding probability. Developers can use this information to create conditional logic in their Scratch projects.

For example:
```plaintext
if [prediction is [Guitar]]
play sound [Guitar Sound]
```
This logic ensures that actions are taken only when a specific object is detected.

### Resetting Predictions
When the `stop camera` block is used, the camera feed stops, and the detected class resets to `(none)` with a probability of `0.00`. This ensures a clean state when the camera is restarted.


## How to Use

### Step 1: Install the Extension
Clone or download this repository to your local machine. Follow Scratch's guidelines to add unsandboxed extensions to your Scratch environment.

### Step 2: Train a Model
Visit Teachable Machine to train your image classification model. Export and copy the URL for integration into Scratch.

### Step 3: Create Your Scratch Project
- Load the model using the `load model from URL` block.
- Start the camera to activate predictions.
- Use event-driven blocks to respond to predictions.

### Step 4: Test and Debug
Run your project to ensure predictions work as expected. Debug any issues by checking camera permissions and model accuracy.


## Example Use Case: Interactive Music Quiz
In this project, students are quizzed on their knowledge of musical instruments. They show pictures or real instruments to the camera, and the project provides feedback.

### Project Flow
1. Display a question: "Can you show me a piano?"
2. Wait for the camera to detect the correct instrument.
3. Provide feedback: "Correct! This is a piano."

#### Scratch Implementation
```plaintext
when green flag clicked
load model from URL [https://teachablemachine.withgoogle.com/models/instrumentID/]
start camera
say [Can you show me a piano?]

when model detects [Piano]
say [Correct! This is a piano.]
play sound [Piano Sound]
```


## Limitations and Future Enhancements
While this extension is powerful, it has certain limitations:
- **Model Accuracy**: The accuracy depends on the quality and diversity of the training data.
- **Hardware Requirements**: Requires a device with a functional camera.
- **Browser Permissions**: Users must grant camera access.

### Future Plans
- Add support for local model loading without requiring internet access.
- Improve camera handling for older devices.
- Include sample Scratch projects for quick integration.


## Conclusion
The TM Image Model with Camera Extension transforms Scratch into a platform for exploring computer vision and machine learning. By integrating Teachable Machine models, users can create interactive projects that respond to real-world objects. This opens up endless possibilities in education, gaming, and creative arts.

Whether you're teaching music, designing an interactive story, or experimenting with new technology, this extension empowers you to bring your ideas to life.


## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it.


## Support and Contributions
We welcome contributions to enhance this extension. If you encounter any issues or have suggestions, feel free to open an issue or submit a pull request on GitHub.
