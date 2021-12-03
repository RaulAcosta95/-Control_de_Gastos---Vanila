let htmlInterface_AniadirNuevoGasto =
  //QUITAR el "HTML" de la siguiente línea para que funcione
  //PONER el "HTML" de la siguiente línea para que se vea como html
  ` 

            <div id="htmlInterface_AniadirNuevoGasto">
                <h1>Mi Control De Gastos.com</h1>
                <button onclick="quitarAniadirNuevoGasto()" id="buttonX">X</button>
                <div id="formAniadirNuevoGasto">
                    <form id="formDatosNuevoGasto">
                        
                        <input type="text" id="tituloGasto" placeholder="Título del gasto">
                        
                        <input type="text" id="descripcionGasto" placeholder="Descripción del gasto">
                        
                        <input type="number" id="cantidadGasto" placeholder="$000">
                    </form>
                    <button onclick="__botonEnviarFormulario()" id="botonEnviarFormulario">Enviar</button>
                </div>
            </div>
`;

let aniadirNuevoGasto = document.getElementById("aniadirNuevoGasto");
//Inicio del programa
quitarAniadirNuevoGasto();

function ponerAniadirNuevoGasto() {
  aniadirNuevoGasto.setAttribute("style",           `display:block;`);
  let tituloGasto = document.getElementById("tituloGasto").value="";
  let descripcionGasto = document.getElementById("descripcionGasto").value="";
  let cantidadGasto = document.getElementById("cantidadGasto").value="";
}

function quitarAniadirNuevoGasto() {
  aniadirNuevoGasto.setAttribute("style",           `display:none;`);
}

//Las funciones que usen let en el archivo JavaScript se aislan
let __botonEnviarFormulario = function () {
  console.log("__botonEnviarFormulario");
  let tituloGasto = document.getElementById("tituloGasto").value;
  let descripcionGasto = document.getElementById("descripcionGasto").value;
  let cantidadGasto = document.getElementById("cantidadGasto").value;
  let id = Math.floor(Math.random() * (100000 - 0 + 1) + 0);

  //Valores por defecto
  if (tituloGasto.length <= 0) {
    tituloGasto = "Tu Gasto";
  }

  if (descripcionGasto.length <= 0) {
    descripcionGasto = "";
  }

  if (cantidadGasto.length <= 0) {
    cantidadGasto = 0;
  }

  let data = {
    tituloGasto,
    descripcionGasto,
    cantidadGasto,
    id,
  };

  quitarAniadirNuevoGasto();

  dispatchEvent(
    new CustomEvent("aniadirNuevoGasto", {
      detail: { data: data },
    })
  );
};
