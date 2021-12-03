//Inicio del programa

let ContenedorBotonNuevoGasto = document.getElementById(
  "ContenedorBotonNuevoGasto"
);
let ContenedorBotonIniciarApp = document.getElementById("ContenedorBotonIniciarApp");
let WelcomeEnglish = document.getElementById("WelcomeEnglish");
let WelcomeEspaniol = document.getElementById("WelcomeEspaniol");
let ListaDeGastos = document.getElementById("ListaDeGastos");
let ContenedorBotonHome = document.getElementById("ContenedorBotonHome");


_welcomeInicio();

function _welcomeInicio() {
  ContenedorBotonNuevoGasto.setAttribute("style", `display:none;`);
  ListaDeGastos.setAttribute("style",             `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  ContenedorBotonHome.setAttribute("style",       `display:none;`);
  WelcomeEnglish.setAttribute("style",            `display:block;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:flex;`);

}

function _AparecerPaginaAboutEspaniol() {}

function _iniciarApp() {
  WelcomeEnglish.setAttribute("style",            `display:none;`);
  WelcomeEspaniol.setAttribute("style",           `display:none;`);
  ContenedorBotonIniciarApp.setAttribute("style", `display:none;`);
  ContenedorBotonNuevoGasto.setAttribute("style", `display:flex;`);
  ListaDeGastos.setAttribute("style",             `display:flex;`);
  ContenedorBotonHome.setAttribute("style",       `display:block;`);
}
