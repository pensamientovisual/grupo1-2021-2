// BOTON A PAGINA TELEFONIA
function boton1() {
    document.getElementById("paginatelefonia").style.visibility = "visible"
    document.getElementById("paginaprincipal").style.visibility = "collapse"
    document.getElementById("paginainternet").style.visibility = "collapse"
    document.getElementById("paginacomercio").style.visibility = "collapse"
    
}
// BOTON A PAGINA INTERNET
function boton2() {
    document.getElementById("paginainternet").style.visibility = "visible"
    document.getElementById("paginaprincipal").style.visibility = "collapse"
    document.getElementById("paginatelefonia").style.visibility = "collapse"
    document.getElementById("paginacomercio").style.visibility = "collapse"
}

// BOTON A PAGINA COMERCIO
function boton3() {
    document.getElementById("paginacomercio").style.visibility = "visible"
    document.getElementById("paginaprincipal").style.visibility = "collapse"
    document.getElementById("paginatelefonia").style.visibility = "collapse"
    document.getElementById("paginainternet").style.visibility = "collapse"
}
// BOTON A LA PAGINA PRINCIPAL
function volver_atras() {
    document.getElementById("paginaprincipal").style.visibility = "visible"
    document.getElementById("paginatelefonia").style.visibility = "collapse"
    document.getElementById("paginainternet").style.visibility = "collapse"
    document.getElementById("paginacomercio").style.visibility = "collapse"}
