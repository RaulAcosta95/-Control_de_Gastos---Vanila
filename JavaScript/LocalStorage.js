let listaDeGastosLocalStorage = [];

//Si hay datos de Local Storage, entonces guardalos en listaDeGastosLocalStorage
if (localStorage.getItem("listaDeGastosLocalStorage") != null) {
  listaDeGastosLocalStorage = JSON.parse(
    localStorage.getItem("listaDeGastosLocalStorage")
  );
  console.log("Lista de gastos de Local Storage:");
  console.log(listaDeGastosLocalStorage);

  //Primer Render
  _actualizarListaGastos(listaDeGastosLocalStorage);
} else {
  console.log("No hay gastos aún");
}

//Add Event Listener
addEventListener("aniadirNuevoGasto", (data) => {
  agregaDatosALocalStorage(data.detail.data);
});

addEventListener("ModificarGasto", (data) => {
  modificarGasto(data.detail.data);
});

addEventListener("_eliminarGasto", (data) => {
  eliminarGasto(data.detail.data);
});

let agregaDatosALocalStorage = function (data) {
  console.log("agregaDatosALocalStorage");

  let tituloGasto = data.tituloGasto;
  let descripcionGasto = data.descripcionGasto;
  let cantidadGasto = data.cantidadGasto;
  let id = data.id;

  //Añade a listaDeGastosLocalStorage
  listaDeGastosLocalStorage.push({
    tituloGasto,
    descripcionGasto,
    cantidadGasto,
    id,
  });
  console.log(listaDeGastosLocalStorage);

  localStorage.setItem(
    "listaDeGastosLocalStorage",
    JSON.stringify(listaDeGastosLocalStorage)
  );
  console.log("Local Storage Actualizado");

  _actualizarListaGastos(listaDeGastosLocalStorage);
};

function enviaDatosDeLocalStorage(id) {
  //GET
  for (let object of listaDeGastosLocalStorage) {
    if (object.id == id) {
      return object;
    }
  }
  return "Gasto no encontrado";
}
// localStorage.clear(); //AQUI BORRA STORAGE

function modificarGasto(id) {
  console.log("modificarGasto " + id);
  let newTituloGasto = document.getElementById("newTituloGasto").value;
  let newDescripcionGasto = document.getElementById(
    "newDescripcionGasto"
  ).value;
  let newCantidadGasto = document.getElementById("newCantidadGasto").value;

  for (let object of listaDeGastosLocalStorage) {
    if (object.id == id) {
      object.tituloGasto = newTituloGasto;
      object.descripcionGasto = newDescripcionGasto;
      object.cantidadGasto = newCantidadGasto;
    }
  }
  localStorage.setItem(
    "listaDeGastosLocalStorage",
    JSON.stringify(listaDeGastosLocalStorage)
  );
  console.log("Local Storage Actualizado");
  _actualizarListaGastos(listaDeGastosLocalStorage); //No es bajo acoplamiento... buscar otra manera
}

function eliminarGasto(id) {
  console.log("eliminarGasto " + id);
  for (let i = 0; i < listaDeGastosLocalStorage.length; i++) {
    if (listaDeGastosLocalStorage[i].id == id) {
      listaDeGastosLocalStorage.splice(i, 1);
      break;
    }
  }

  localStorage.setItem(
    "listaDeGastosLocalStorage",
    JSON.stringify(listaDeGastosLocalStorage)
  );
  console.log("Local Storage Actualizado");
  _actualizarListaGastos(listaDeGastosLocalStorage); //No es bajo acoplamiento... buscar otra manera
}
