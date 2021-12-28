function _modificarGasto(id){
    console.log('_modificarGasto ' + id);
    _ponerModificarGasto();
    let data = enviaDatosDeLocalStorage(id);
    let htmlInterface_ModificarGasto = document.getElementById('htmlInterface_ModificarGasto');
    htmlInterface_ModificarGasto.innerHTML = 
    `
    <div id="htmlInterface_ModificarGasto">
    <button onclick="_quitarInterfaceModificarGasto()" id="buttonX">X</button>
    <div id="formAniadirNuevoGasto">
        <form id="formDatosNuevoGasto">
            
            <input type="text" id="newTituloGasto" value="${data.tituloGasto}" placeholder = "Titulo Gasto">
            
            <input type="text" id="newDescripcionGasto" value="${data.descripcionGasto}" placeholder = "Descripción del Gasto">
            
            <input type="number" id="newCantidadGasto" value="${data.cantidadGasto}" placeholder = "$000">
        </form>
        <button onclick="_botonModificarGasto(${id})" id="botonModificarGasto">Enviar</button>
    </div>
</div>
    `;
}

function _quitarInterfaceModificarGasto(){
    let htmlInterface_ModificarGasto = document.getElementById('htmlInterface_ModificarGasto');
    htmlInterface_ModificarGasto.innerHTML = "";
    _iniciarApp();
}

function _botonModificarGasto(id){
    this.dispatchEvent(new CustomEvent('ModificarGasto', {
        detail: {
            data: id
        },
        bubbles:true,
        composed:true
    }));
    _quitarInterfaceModificarGasto();
}