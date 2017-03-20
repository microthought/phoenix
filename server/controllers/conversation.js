

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
};

module.exports = conversation;