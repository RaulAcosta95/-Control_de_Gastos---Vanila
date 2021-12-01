function _eliminarGasto(id){
    console.log('_eliminarGasto: ' + id);
    let gastoEnLista = document.getElementById(id);
    gastoEnLista.setAttribute("style", `
    font-size:0px;
    background-color:rgba(172, 128, 128,.0);
    color:rgba(172, 128, 128,.0) !important;
    transition:0.5s;
`);

    setTimeout(() => {        
        this.dispatchEvent(new CustomEvent('_eliminarGasto', {
            detail: {
                data: id
            },
            bubbles:true,
            composed:true
        }));
    }, 500);
    
}