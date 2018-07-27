

function setup(){
  console.log('setup fn is called');


  let bot =  new RiveScript();
  // console.log(bot);
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady(){
    console.log('Chatbot Ready');
    bot.sortReplies();
    let num=floor(random(1000));
    console.log('Trying to achieve', num);
    let reply = bot.reply("local-user", 'set ' +num);
  }

  function brainError(){
    console.log('Chatbot error');
  }

  noCanvas();
  let button = select('#submit');
  let uip = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat(){
    let x = uip.value();
    let reply = bot.reply("local-user", x).then(function(reply) {
      console.log("Bot> ", reply);
      output.html(reply);
    });


    // let reply = bot.reply("local-user", x).then(replytome);
    // function replytome(){
    //   console.log("Bot says ", reply);
    //   output.html(reply);
    // }


  }
}
