var speechrecoginition = window.webkitSpeechRecoginition

var Recoginition = new speechrecognition();

function start(){
  document.getElementById("textbox").innerHTML = "";
  Recoginition.start();
}