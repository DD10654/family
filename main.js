function setup() {
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/39WT0BiWc/model.json", modelloaded);
}

function draw() {
    image(video, 0, 0, 300, 250);
    classifier.classify(video, gotresult);
}

function modelloaded() {
    console.log("Model Loaded!");
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("output_success").innerHTML = results[0].label;
    }
}