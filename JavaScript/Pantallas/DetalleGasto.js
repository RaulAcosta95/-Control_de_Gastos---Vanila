//Cuando se usa import o export (module) 
//No se pueden invocar las funciones desde el exterior...

//Pero no es necesario importar... porque los Scripts ya se encuentran conectados
//A menos que se use "let" al declarar una función o variable
function _mostrarDetalle(id){
    console.log('_mostrarDetalle ' + id);
    let data = enviaDatosDeLocalStorage(id);
    
    let htmlInterface_DetalleGasto = 
 `
    <div id="htmlInterface_DetalleGasto">
        <button onclick="_quitarDetalleGasto()" id="buttonX">X</button>
        <h3>Mi Control De Gastos.com</h3>
            <p>${data.tituloGasto}</p>
            <p>${data.descripcionGasto}</p>
            <p>$${data.cantidadGasto}</p>
        <div id="contenedorBoton">
            <button onclick="_modificarGasto(${data.id})" id="botonModificarGasto">Modificar</button>
        </div>
    </div>
`

    let article4 = document.getElementById("article4");
    article4.innerHTML = htmlInterface_DetalleGasto;


}

let _quitarDetalleGasto = function () {
    let article4 = document.getElementById("article4");
    article4.innerHTML = "";
}

