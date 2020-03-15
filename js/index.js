let nav = document.getElementById("side-nav")
let menu = document.getElementById("hamburger")
let fade = document.getElementById("fade")

let welcome = `
 __  __                      
|  \\/  |__ ___ __            
| |\\/| / _  \\ \\ /            
|_|__|_\\__,_/_\\_\\_           
  / __|__ _ _ __| |__ _ _ _  
 | (__/ _  | '_ \\ / _  | ' \\ 
  \\___\\__,_| .__/_\\__,_|_||_|
           |_|
           `

console.log(welcome)

// Open the sidenav
function openNav() {
  menu.classList.add("selected")
  nav.classList.remove("nav-collapse")
  fade.classList.add("translucent")
}

// Close/hide the sidenav
function closeNav() {
  menu.classList.remove("selected")
  nav.classList.add("nav-collapse")
  fade.classList.remove("translucent")
}

// Toggle the sidenav
function toggleNav() {
  if (nav.classList.contains("nav-collapse")) {
    menu.classList.add("selected")
    nav.classList.remove("nav-collapse")
    fade.classList.add("translucent")

  } else {
    menu.classList.remove("selected")
    nav.classList.add("nav-collapse")
    fade.classList.remove("translucent")

  }
}

// Close side nav if window get resized to medium and up
window.addEventListener("resize", function (e) {
  if (this.document.body.clientWidth > 768) {
    closeNav()
  }
}, false)