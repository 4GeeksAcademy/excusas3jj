import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const randomFrom = arr => arr[Math.floor(Math.random()* arr.length)];

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generar() {
  const quien= randomFrom(who);
  const accion = randomFrom(action);
  const que = randomFrom(what);
  const cuando = randomFrom(when);

  return `${quien} ${accion} ${que} ${cuando}.`;
}

const excuseElement = document.querySelector('.Excusa');
const boton = document.querySelector('#boton');

window.onload = function() {
  excuseElement.textContent=generar() 
  console.log(generar())
};


boton.addEventListener('click', () => {
  
  excuseElement.textContent = generar();
  console.log(generar)

});

 
