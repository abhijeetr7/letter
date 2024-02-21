// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Text to be handwritten
   var text = "My Dearest Purva❤️,\n\n How beautiful it was when Soul- Sigh wrote,\n\nWhy is it that your love makes me feel like I can do anything? For you,\n\nI had jump off the high dive at the pool even if I am scared of heights. I had stay up all night just to talk to you,\n\n even if I am sleepy and have to go to work the next day. I had watch a movie I dont like just because you love it. I had eat food I had never try just to see you smile when I make a funny face. Some say love makes you crazy,\n\n and maybe it does. But if that is the case,\n\n I had rather be crazy in love than sane without it. Because your love makes me start seeing things through a new lens,\n\n where even the smallest things matter,\n\n like the way you tie your shoes or the funny way you say certain words. So,\n\n for your love,\n\nI had do anything. I had learn to dance even if I have two left feet. I had wake up early to bring you morning coffee,\n\n even if I love sleeping in. I had learn to cook your favorite dish even if I have never boiled water before. Your love makes me fearless. So for you,\n\nfor the love that makes my heart beat faster and my world go round,\n\n there is nothing I would not do. Because you are worth every crazy,\n\n beautiful,\n\n unbelievable moment that love brings into my life.\n\nForever yours,\n[Abhiii]";

  // Split text into individual characters
  var characters = text.split("");

  // Get the love letter container and love letter text element
  var loveLetterContainer = document.querySelector('.love-letter');
  var loveLetterText = document.getElementById('love-letter-text');

  // Set initial opacity to 1 to reveal the love letter
  loveLetterContainer.style.opacity = '1';

  // Counter to keep track of characters written
  var counter = 0;

  // Function to write the text slowly
  function writeText() {
    if (counter < characters.length) {
      // Append the next character to the love letter text
      loveLetterText.innerHTML += characters[counter];
      // Increment the counter
      counter++;
      // Call writeText function recursively after a delay to create the slow writing effect
      setTimeout(writeText, 100);
    }
  }

  // Start writing the text
  writeText();
});

