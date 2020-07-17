let welcome = `
 __  __                      
|  \\/  |__ ___ __            
| |\\/| / _  \\ \\ /            
|_|__|_\\__,_/_\\_\\_           
  / __|__ _ _ __| |__ _ _ _  
 | (__/ _  | '_ \\ / _  | ' \\ 
  \\___\\__,_| .__/_\\__,_|_||_|
           |_|

/ Developer and Designer /           
           `

console.log(welcome)

let phrases = [
  "programming",
  "designing",
  "tinkering",
  "making Stuff"
]

let currentPhrase = 0
let phraseElm = document.getElementById('phrase')

phraseElm.innerHTML = phrases[currentPhrase]

function phraseLoop() {
  setTimeout(function () {
    if (currentPhrase >= phrases.length - 1) currentPhrase = 0
    else currentPhrase ++

    phraseElm.innerHTML = phrases[currentPhrase]

    phraseLoop();
  }, 5000);
}