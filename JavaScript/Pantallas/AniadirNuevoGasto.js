//Inicio del programa

//Las funciones que usen let en el archivo JavaScript se aislan
function _botonEnviarFormulario() {
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

  dispatchEvent(
    new CustomEvent("aniadirNuevoGasto", {
      detail: { data: data },
    })
  );

  _iniciarApp();
};
