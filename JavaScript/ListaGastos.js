let article3 = document.getElementById("ListaDeGastos");

//No es necesario importar... porque los Scripts ya se encuentran conectados
//A menos que se use "let" al declarar una función o variable
function _actualizarListaGastos(listaDeGastosLocalStorage) {
    console.log("_actualizarListaGastos");
    article3.innerHTML = "";
    let listaDeGastos = listaDeGastosLocalStorage
    
    for (let i = 0; i < listaDeGastos.length; i++) {
        article3.innerHTML +=
        `
            <div class="gastoEnLista" id="${listaDeGastos[i].id}">
                <div onclick="_mostrarDetalle(${listaDeGastos[i].id})" class="contenedorInfoGastoEnLista">
                    <h4>${listaDeGastos[i].tituloGasto}</h4>
                    <p class="precioGasto">$${listaDeGastos[i].cantidadGasto}</p>
                </div>
                <div class="contenedorBotonGastoEnLista">
                    <button onclick="_eliminarGasto(${listaDeGastos[i].id})">
                        <img src="./Imagenes/Eliminar.png"alt="Botón borrar" title="Boton borrar">
                    </button>
                </div>
            </div>
        `;
        
    }
}
