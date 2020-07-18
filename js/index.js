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

let alph = "abcdefghijklmnopqrstuvwxyz"
let randomChar = false

let phrases = [
  "programming",
  "designing",
  "tinkering",
  "making stuff"
]

let currentPhrase = 0
let phraseElm = document.getElementById('phrase')

let pause = 0

let count = 0
// phraseElm.innerHTML = phrases[currentPhrase]

function type() {
  setTimeout(function () {
    if (!randomChar) phraseElm.innerHTML = phrases[currentPhrase].substring(0, count)
    else {
      count -= 2
      phraseElm.innerHTML = phrases[currentPhrase].substring(0, count) + randomChar
    }

    if (Math.random() > 0.9 && !randomChar && count > 0) randomChar = alph.charAt(Math.round(Math.random() * (alph.length - 1)))
    else randomChar = false

    if (randomChar) pause = 100
    else pause = 0

    count++

    if (count <= phrases[currentPhrase].length) type()
    else wait()
  }, 100 + Math.round(Math.random() * 150) + pause)
}

function erase() {
  setTimeout(function () {
    phraseElm.innerHTML = phrases[currentPhrase].substring(0, count)

    count--

    if (count >= 0) erase()
    else changePhrase()
  }, 50 + Math.round(Math.random() * 150))
}

function wait() {
  setTimeout(function () {
    erase()
  }, 2000)
}

function changePhrase() {
  if (currentPhrase >= phrases.length - 1) currentPhrase = 0
  else currentPhrase++

  type()
}

function navbarSize() {
  if (window.scrollY / window.innerHeight * 100 > 20) {
    document.getElementById('navbar').classList.add('shrink')
  } else {
    document.getElementById('navbar').classList.remove('shrink')
  }
}

window.addEventListener("scroll", navbarSize)