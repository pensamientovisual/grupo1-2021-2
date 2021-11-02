
// BOTON A PAGINA TELEFONIA
function boton1() {
    document.getElementById("paginainternet").style.display = "initial"
    document.getElementById("paginatelefonia").style.display = "none"
    document.getElementById("paginaprincipal").style.display = "none"
    document.getElementById("paginacomercio").style.display = "none"
    document.getElementById("minibotones").style.display = "none"
    
}
// BOTON A PAGINA INTERNET
function boton2() {
    document.getElementById("paginacomercio").style.display = "initial"
    document.getElementById("paginatelefonia").style.display = "none"
    document.getElementById("paginaprincipal").style.display = "none"
    document.getElementById("paginainternet").style.display = "none"
    document.getElementById("minibotones").style.display = "none"
}


// BOTON A PAGINA COMERCIO
function boton3() {
    document.getElementById("paginatelefonia").style.display = "initial"
    document.getElementById("paginainternet").style.display = "none"
    document.getElementById("paginaprincipal").style.display = "none"
    document.getElementById("paginacomercio").style.display = "none"
    document.getElementById("minibotones").style.display = "none"
}
// BOTON A LA PAGINA PRINCIPAL
function volver_atras() {
    document.getElementById("paginaprincipal").style.display = "initial"
    document.getElementById("minibotones").style.display = "inherit"
    document.getElementById("paginatelefonia").style.display = "none"
    document.getElementById("paginainternet").style.display = "none"
    document.getElementById("paginacomercio").style.display = "none"
}