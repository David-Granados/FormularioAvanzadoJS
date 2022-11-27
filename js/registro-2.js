var user = new Object();
if (localStorage.getItem("usuario")) {
    user = JSON.parse(localStorage.getItem("usuario"));
}
var errors = 0;
//leer cookies
function leerCookie(nombre) {
    a = document.cookie.substring(document.cookie.indexOf(nombre + '=') + nombre.length +
        1, document.cookie.length);
    if (a.indexOf(';') != -1) a = a.substring(0, a.indexOf(';'))
    return a;
}

$(document).ready(function () {
    
    user.name = leerCookie("name");
    user.email = leerCookie("email");
    user.pass = leerCookie("pass");
    localStorage.setItem("usuario",JSON.stringify(user));
    
        
        
    $("#btnEnviar").click(()=>{
        
        $("#formulario").attr("action", "inicio.html");
    });
    $("#btnAtras").click(()=>{
        $("#formulario").attr("action", "registro.html");
    });
});
