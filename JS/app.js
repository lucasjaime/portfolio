particlesJS(
    {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);
let nombre = prompt("Hey!! what's up, whats your name?");
let saludo = document.getElementsByClassName('nombre')
let btnParticles = document.getElementsByClassName('particlesInteract');
let btn = document.getElementsByClassName('btn-interact');
let particles0 = document.getElementById('particles-js');
let menuHamburguesa = document.getElementsByClassName('menuI');
let mostrarMenu = document.getElementsByClassName('menuV');
let mostrarMenu0 = document.getElementsByClassName('menuV0');
let idioma = document.getElementById('mostrarIdiomas');
let CV = document.getElementsByClassName('CV');
let closeIdiom = document.querySelectorAll('.closeIdiomas');
let idiomaCV = document.getElementsByClassName('idiomaCV');
let closeMenu = document.getElementsByClassName('closeMenu');


for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener('click', ()=>{
    changeMenu();
  })
}
for (let i = 0; i < idiomaCV.length; i++) {
  idiomaCV[i].addEventListener('click', ()=>{
    changeIdiom();
  })
}
closeIdiom[0].addEventListener(`click`, ()=> {
  changeIdiom()
})
function changeIdiom(){
  idioma.classList.toggle('idioma');
  idioma.classList.toggle('idioma0');
}
CV[0].addEventListener('click', ()=>{
  changeIdiom()
})
function changeMenu(){
  mostrarMenu[0].classList.toggle('menuV0');
}
menuHamburguesa[0].addEventListener('click', ()=>{
  changeMenu()
})
function changeParticles(){
  particles0.classList.toggle('particlesClass0');
  particles0.classList.toggle('particlesClass1')
}
btnParticles[0].addEventListener('click', ()=>{
  changeParticles();
});
if(nombre.length == 0){
  saludo[0].innerText = `Hello, my name is  Lucas Jaime, welcome to my portfolio!`;
}else{
  saludo[0].innerText = `Hello ${nombre}, my name is  Lucas Jaime, welcome to my portfolio!`;
}