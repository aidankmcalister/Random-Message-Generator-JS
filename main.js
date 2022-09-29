import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
<h2 class="title">Message Generator</h2>
<div class="messageContainer">
<div id="message" class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
</div>
<div class="buttonContainer">
    <button class="generateButton" onclick="sentence()">Generate Message</button>
    <button class="copyMessageButton" onclick="copyMessage()">Copy Message</button>
</div>
</div>
`

// random sentence

var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["year", "college", "shirt", "plastic", "duck", "tea", "father", "professor", "dog", "computer"];
verbs = ["narrow", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);


  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

  document.getElementById('message').innerHTML = "&quot;" + content + "&quot;";

};

// copy

function copyMessage() {
  var copyText = document.querySelector('#message').textContent.slice(1, -1);
  navigator.clipboard.writeText(copyText)
  console.log(copyText)
  alert("Copied to clipboard: " + copyText)
}


sentence();
copyMessage();



globalThis.copyMessage = copyMessage;
globalThis.sentence = sentence;