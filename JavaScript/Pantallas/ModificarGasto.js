function _modificarGasto(id){
    console.log('_modificarGasto ' + id);
    let data = enviaDatosDeLocalStorage(id);
    let article4 = document.getElementById('article4');
    article4.innerHTML = 
    `
    <div id="htmlInterface_AniadirNuevoGasto">
    <button onclick="_quitarInterfaceModificarGasto()" id="buttonX">X</button>
    <h3>Mi Control De Gastos.com</h3>
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
    let article4 = document.getElementById('article4');
    article4.innerHTML = "";
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