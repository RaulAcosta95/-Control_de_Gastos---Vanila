//Inicio del programa

let ContenedorBotonNuevoGasto = document.getElementById(
  "ContenedorBotonNuevoGasto"
);
let ContenedorBotonIniciarApp = document.getElementById("ContenedorBotonIniciarApp");
let WelcomeEnglish = document.getElementById("WelcomeEnglish");
let WelcomeEspaniol = document.getElementById("WelcomeEspaniol");
let ListaDeGastos = document.getElementById("ListaDeGastos");
let ContenedorBotonHome = document.getElementById("ContenedorBotonHome");
let AboutUs = document.getElementById("AboutUs");
let botonAbout = document.getElementById("botonAbout");

_welcomeEnglish();

function _welcomeEnglish() {
  ContenedorBotonNuevoGasto.setAttribute("style", `display:none;`);
  ListaDeGastos.setAttribute("style",             `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  ContenedorBotonHome.setAttribute("style",       `display:none;`);
  AboutUs.setAttribute("style",                   `display:none;`);
  WelcomeEnglish.setAttribute("style",            `display:block;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:flex;`);
  botonAbout.setAttribute("style",                `display:block;`);

}

function _welcomeSpanish() {}

function _iniciarApp() {
  WelcomeEnglish.setAttribute("style",            `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:none;`);
  AboutUs.setAttribute("style",                   `display:none;`);
  botonAbout.setAttribute("style",                `display:none;`);
  ContenedorBotonNuevoGasto.setAttribute("style", `display:flex;`);
  ListaDeGastos.setAttribute("style",             `display:flex;`);
  ContenedorBotonHome.setAttribute("style",       `display:block;`);
}

function _apareceAbout() {
  WelcomeEnglish.setAttribute("style",            `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  botonAbout.setAttribute("style",                `display:none;`);
  AboutUs.setAttribute("style",                   `display:block;`);
  ContenedorBotonHome.setAttribute("style",       `display:block;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:flex;`);


}
