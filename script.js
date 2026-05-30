// 1. Initialize variables
    const img = document.getElementById('targetImage');
    const resultText = document.getElementById('result');

    // 2. Initialize the Image Classifier with the MobileNet model
    const classifier = ml5.imageClassifier('MobileNet', modelReady);

    // 3. Callback function when model is loaded
    function modelReady() {
      resultText.innerText = 'Model Loaded! Classifying...';
      // Execute prediction on the image
      classifier.classify(img, gotResult);
    }

    // 4. Callback function to process prediction data
    function gotResult(error, results) {
      if (error) {
        console.error(error);
        resultText.innerText = 'Error processing image.';
        return;
      }
      
      // Extract the highest confidence result label
      const label = results[0].label;
      const confidence = (results[0].confidence * 100).toFixed(2);
      
      resultText.innerText = `Prediction: ${label} (${confidence}% confidence)`;
    }