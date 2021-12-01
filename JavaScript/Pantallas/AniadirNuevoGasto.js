let htmlInterface_AniadirNuevoGasto =
  //QUITAR el "HTML" de la siguiente línea para que funcione
  //PONER el "HTML" de la siguiente línea para que se vea como html
  ` 

            <div id="htmlInterface_AniadirNuevoGasto">
                <h3>Mi Control De Gastos.com</h3>
                <button onclick="_quitarInterface()" id="buttonX">X</button>
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

function _ponerInterface() {
  console.log("_ponerInterface");
  let article2 = document.getElementById("article2");
  article2.innerHTML = htmlInterface_AniadirNuevoGasto;
}

function _quitarInterface() {
  console.log("_quitarInterface");
  let article2 = document.getElementById("article2");
  article2.innerHTML = "";
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
    alert("Por favor, añade una cantidad");
    return false;
  }

  let data = {
    tituloGasto,
    descripcionGasto,
    cantidadGasto,
    id,
  };

  _quitarInterface();

  dispatchEvent(
    new CustomEvent("aniadirNuevoGasto", {
      detail: { data: data },
    })
  );
};
