//Inicio del programa

let ContenedorBotonNuevoGasto = document.getElementById("ContenedorBotonNuevoGasto");
let ContenedorBotonIniciarApp = document.getElementById("ContenedorBotonIniciarApp");
let WelcomeEnglish = document.getElementById("WelcomeEnglish");
let WelcomeEspaniol = document.getElementById("WelcomeEspaniol");
let botonAbout = document.getElementById("botonAbout");
let AboutUs = document.getElementById("AboutUs");

let ContenedorBotonHome = document.getElementById("ContenedorBotonHome");
let ListaDeGastos = document.getElementById("ListaDeGastos");
let aniadirNuevoGasto = document.getElementById("aniadirNuevoGasto");

_welcomeEnglish();

function _welcomeEnglish() {
  ContenedorBotonNuevoGasto.setAttribute("style", `display:none;`);
  ListaDeGastos.setAttribute("style",             `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  ContenedorBotonHome.setAttribute("style",       `display:none;`);
  AboutUs.setAttribute("style",                   `display:none;`);
  aniadirNuevoGasto.setAttribute("style",         `display:none;`);

  ContenedorBotonIniciarApp.setAttribute("style", `display:flex;`);
  WelcomeEnglish.setAttribute("style",            `display:block;`);
  botonAbout.setAttribute("style",                `display:block;`);

}

function _welcomeSpanish() {}

function _iniciarApp() {
  WelcomeEnglish.setAttribute("style",            `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:none;`);
  AboutUs.setAttribute("style",                   `display:none;`);
  botonAbout.setAttribute("style",                `display:none;`);
  aniadirNuevoGasto.setAttribute("style",         `display:none;`);

  ContenedorBotonNuevoGasto.setAttribute("style", `display:flex;`);
  ListaDeGastos.setAttribute("style",             `display:flex;`);
  ContenedorBotonHome.setAttribute("style",       `display:block;`);
}

function _apareceAbout() {
  ContenedorBotonNuevoGasto.setAttribute("style", `display:none;`);
  ListaDeGastos.setAttribute("style",             `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  WelcomeEnglish.setAttribute("style",            `display:none;`);
  aniadirNuevoGasto.setAttribute("style",         `display:none;`);
  botonAbout.setAttribute("style",                `display:none;`);
  
  AboutUs.setAttribute("style",                   `display:flex;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:flex;`);
  ContenedorBotonHome.setAttribute("style",       `display:block;`);
}

function _ponerAniadirNuevoGasto(){
  ContenedorBotonNuevoGasto.setAttribute("style", `display:none;`);
  ListaDeGastos.setAttribute("style",             `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  WelcomeEnglish.setAttribute("style",            `display:none;`);
  botonAbout.setAttribute("style",                `display:none;`);
  AboutUs.setAttribute("style",                   `display:none;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:none;`);
  
  ContenedorBotonHome.setAttribute("style",       `display:flex;`);
  aniadirNuevoGasto.setAttribute("style",         `display:block;`);

  let tituloGasto = document.getElementById("tituloGasto").value="";
  let descripcionGasto = document.getElementById("descripcionGasto").value="";
  let cantidadGasto = document.getElementById("cantidadGasto").value="";
}