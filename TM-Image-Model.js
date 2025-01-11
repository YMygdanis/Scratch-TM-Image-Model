(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must run in an unsandboxed environment!');
    }

    const TFJS_SCRIPT = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js';
    const TM_IMAGE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js';

 // Νέα εικόνα (base64) για το extension
    const EXTENSION_ICON = 'data:image/jpeg;base64,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';

    async function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
            document.head.appendChild(script);
        });
    }

    class TMImageProjectExtension {
        constructor() {
            this.model = null;
            this.webcam = null;

            this.currentClass = '(none)';
            this.currentProbability = 0.0;

            this.isModelLoaded = false;
            this.isCameraStarted = false;
        }

        getInfo() {
            return {
                id: 'tmImageProjectExtension',
                name: 'TM Image Model',

                color1: '#4C97FF',
                color2: '#3373CC',
                menuIconURI: EXTENSION_ICON,
                blockIconURI: EXTENSION_ICON,

                blocks: [
                    {
                        opcode: 'loadModelFromURL',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'load model from URL [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://teachablemachine.withgoogle.com/models/modelID/'
                            }
                        }
                    },
                    {
                        opcode: 'startCamera',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'start camera'
                    },
                    {
                        opcode: 'stopCamera',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'stop camera'
                    },
                    {
                        opcode: 'whenModelDetects',
                        blockType: Scratch.BlockType.HAT,
                        text: 'when model detects [CLASSNAME]',
                        arguments: {
                            CLASSNAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Class 1'
                            }
                        }
                    },
                    {
                        opcode: 'predictionIsClass',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'prediction is [CLASSNAME]',
                        arguments: {
                            CLASSNAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Class 1'
                            }
                        }
                    },
                    {
                        opcode: 'getCurrentClass',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'class'
                    },
                    {
                        opcode: 'getCurrentClassProbability',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'probability'
                    }
                ]
            };
        }

        async _ensureScriptsLoaded() {
            if (typeof tf === 'undefined') {
                await loadScript(TFJS_SCRIPT);
                await loadScript(TM_IMAGE_SCRIPT);
            }
        }

        async loadModelFromURL(args) {
            let baseURL = args.URL.trim();
            if (!baseURL) {
                console.warn('No model URL provided.');
                return;
            }

            await this._ensureScriptsLoaded();

            if (!baseURL.endsWith('/')) {
                baseURL += '/';
            }

            const modelURL = baseURL + 'model.json';
            const metadataURL = baseURL + 'metadata.json';

            try {
                this.model = await window.tmImage.load(modelURL, metadataURL);
                this.isModelLoaded = true;
                console.log('Model loaded from URL:', modelURL, metadataURL);
            } catch (err) {
                console.error('Failed to load model from URL:', err);
            }
        }

        startCamera() {
            const stage = document.querySelector('.stage_stage_1fD7k');
            if (!stage) {
                console.error('Scratch stage not found.');
                return;
            }

            let video = document.getElementById('scratch-camera');
            if (!video) {
                video = document.createElement('video');
                video.id = 'scratch-camera';
                video.style.position = 'absolute';
                video.style.top = '0';
                video.style.left = '0';
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.pointerEvents = 'none';
                video.autoplay = true;
                stage.appendChild(video);
            }

            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                    this.webcam = new window.tmImage.Webcam(200, 200, true);
                    this.webcam.canvas = video;
                    this.isCameraStarted = true;
                    console.log('Camera started.');
                    window.requestAnimationFrame(() => this._predictionLoop());
                })
                .catch(error => {
                    console.error('Error accessing camera:', error);
                });
        }

        stopCamera() {
            if (!this.isCameraStarted) {
                console.warn('Camera is not started or already stopped.');
                return;
            }

            this.isCameraStarted = false;
            console.log('Camera stopped.');

            const video = document.getElementById('scratch-camera');
            if (video) {
                video.srcObject = null;
                video.remove();
            }

            if (this.webcam && typeof this.webcam.stop === 'function') {
                try {
                    this.webcam.stop();
                } catch (err) {
                    console.warn('Error while stopping webcam:', err);
                }
            }
        
    // Reset class and probability
    this.currentClass = '(none)';
    this.currentProbability = 0.0;
}


        async _predictionLoop() {
            if (!this.isModelLoaded || !this.isCameraStarted || !this.webcam || !this.model) {
                return;
            }

            this.webcam.update && this.webcam.update();
            const predictions = await this.model.predict(this.webcam.canvas);

            let bestClass = '(none)';
            let bestProb = 0;
            for (const p of predictions) {
                if (p.probability > bestProb) {
                    bestProb = p.probability;
                    bestClass = p.className;
                }
            }

            this.currentClass = bestClass;
            this.currentProbability = bestProb;

            if (this.isCameraStarted) {
                window.requestAnimationFrame(() => this._predictionLoop());
            }
        }

        whenModelDetects(args) {
            const wantedClass = args.CLASSNAME.trim();
            return this.currentClass === wantedClass;
        }

        predictionIsClass(args) {
            const wantedClass = args.CLASSNAME.trim();
            return this.currentClass === wantedClass;
        }

        getCurrentClass() {
            return this.currentClass;
        }

        getCurrentClassProbability() {
            return this.currentProbability.toFixed(2);
        }
    }

    Scratch.extensions.register(new TMImageProjectExtension());
})(Scratch);
