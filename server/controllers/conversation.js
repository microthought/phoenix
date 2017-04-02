

var exampleConvos = [
  [
    {desc: "yabba dabba!", sender: "Fred Flintstone"},
    {desc: "dooo!", sender: "Fred Flintstone"},
    {desc: "Let's split up gang", sender: "Fred"},
  ],  
  [
    {desc: "Meow meow", sender: "Whiskers"},
    {desc: "Grrruuuf", sender: "Fido"},
    {desc: "Baaaaa! Baaaaa...", sender: "Bo-sheep"},
  ]
];


var genie = "Thanks for releasing me from my lamp";
var cat = "Meow meow feed me!";
var derp ="I don't think this is a good idea. We should skip in the rain."
var messages = [];

for(var i = 0; i < 10; i++){
  messages.push(genie, cat, derp);
}

const conversation = {
  get: function (req, res){
    var convo_id = req.params.conversation_id;
    console.log("convo_id: ", convo_id);
    var convo = exampleConvos[convo_id];

    res.send(convo);
  },
  post: function(req,res){
    var convo_id = req.params.conversation_id;
    console.log("convo_id: ", convo_id);
    res.send("This route doesn't work!")
  },
  getdummy: function (req, res){

    res.send(messages);
  },
};

module.exports = conversation;