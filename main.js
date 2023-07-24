var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds smile";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camara);

    setTimeout(function()
    {

        take_snapshot();
        save();
    }, 5000);
}



Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camara = document.getElementById("camara");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image src"'+data_uri+'">';
    });
}
function save() { link = document.getElementById("link"); image = document.getElementById("selfie_image").src ;
link.href
= image; link.click(); }
