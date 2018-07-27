
function setup(){
  noCanvas();
  console.log('set up called');
  let speech = new p5.Speech();
  speech.setVoice('Tessa');

  let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);

  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);

  let bot =  new RiveScript();
  console.log(bot);
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady(){
    console.log('Chatbot Ready');
    bot.sortReplies();
  }

  function brainError(){
    console.log('Chatbot error');
  }

  function gotSpeech() {
    let sp1 = select('#sp1');
    let sp2 = select('#sp2');
    console.log(speechRec.resultString, speechRec.resultConfidence);
    // console.log(speechRec);
    if (speechRec.resultValue){
      // createP(speechRec.resultString);
      let input = speechRec.resultString;
      sp1.html(input);
      let reply = bot.reply("local-user", input).then(function(reply) {
        console.log("Bot> ", reply);
        sp2.html(reply);
        speech.speak(reply);
      })
    }
  }



}
