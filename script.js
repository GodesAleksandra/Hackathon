const img = document.getElementById('img');
const predictionsElem = document.getElementById('predictions');
// Load the model.
mobilenet.load().then(model =>
{
    // Classify the image.
    model.classify(img).then(predictions =>
    {
        var serializedPredictions = JSON.stringify(predictions);
        // View in browser in string version
        predictionsElem.innerHTML = serializedPredictions;
        // View in console in object version
        console.log(predictions);
    });
});