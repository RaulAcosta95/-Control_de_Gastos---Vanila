//Cuando se usa import o export (module) 
//No se pueden invocar las funciones desde el exterior...

//Pero no es necesario importar... porque los Scripts ya se encuentran conectados
//A menos que se use "let" al declarar una función o variable
function _mostrarDetalle(id){
    console.log('_mostrarDetalle ' + id);
    _ponerDetaleGasto();
    let data = enviaDatosDeLocalStorage(id);
    
    let detalleGasto = 
 `
        <button onclick="_quitarDetalleGasto()" id="buttonX">X</button>
            <p>${data.tituloGasto}</p>
            <p>${data.descripcionGasto}</p>
            <p>$${data.cantidadGasto}</p>
        <div id="contenedorBoton">
            <button onclick="_modificarGasto(${data.id})" id="botonModificarGasto">Modificar</button>
        </div>
`

    let htmlInterface_DetalleGasto = document.getElementById("htmlInterface_DetalleGasto");
    htmlInterface_DetalleGasto.innerHTML = detalleGasto;


}

let _quitarDetalleGasto = function () {
    let htmlInterface_DetalleGasto = document.getElementById("htmlInterface_DetalleGasto");
    htmlInterface_DetalleGasto.innerHTML = "";
    _iniciarApp();
}

