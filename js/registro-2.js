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
    
    //Nombre Hermandad
    $("#nombre_hermandad").blur(()=>{ 
        if($("#nombre_hermandad").val().length < 1){
            $("#log_nombre_hermandad_regis").text("Esta vacio").css("color", "red");
        }else{
            if (user.hermandad !== $("#nombre_hermandad").val()) {
                $("#log_nombre_hermandad_regis").css("display", "none");
                document.cookie = "hermandad=" + $("#nombre_hermandad").val();
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_nombre_hermandad_regis").text("Hermandad ya registrado").css("color", "red");
                errors++;
            }
        }
    });

//Ejempo
/**
 * $("#nombre").blur(() => {
        if ($("#nombre").val().length < 1) {
            $("#log_nombre_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.name !== $("#nombre").val()) {
                $("#log_nombre_regis").css("display", "none");
                //user.name = $("#nombre").val();
                document.cookie = "name=" + $("#nombre").val();
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_nombre_regis").text("usuario ya registrado").css("color", "red");
                errors++;
            }
        }
    });

 */










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
