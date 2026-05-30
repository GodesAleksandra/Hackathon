const img = document.getElementById('input-image');

// Initialize the model
cocoSsd.load().then(model => {
  // Detect objects within the HTML image element
  model.detect(img).then(predictions => {
    console.log('Predictions: ', predictions);
  });
});