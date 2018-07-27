let speech = new p5.Speech();

function setup(){
  // noCanvas();
  createCanvas(400, 100);
  background(0);
  console.log('set up called');
  // let speech = new p5.Speech();
  speech.onLoad = voiceReady;

  speech.started(startSpeaking);
  speech.ended(endSpeaking);
  function startSpeaking() {
    background(0, 255, 0);
  }
  function endSpeaking() {
    background(255, 0, 0)
  }

  function voiceReady() {
    console.log(speech.voices);
  }

}

function mousePressed() {
  let voices = speech.voices;
  let voice = random(voices);
  console.log(voice.name);
  speech.setVoice(voice.name);
  // speech.setVoice('Tessa');
  speech.speak('Coding Train');
}
