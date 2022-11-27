//User
var user = new Object();
if (localStorage.getItem("usuario")) {
    user = JSON.parse(localStorage.getItem("usuario"));
}
var errors = 0;

$(document).ready(() => {
    if($("#nombre").val().length < 1 && $("#pass").val().length < 1){
        errors=1;
    }
    
    //Nombre usuario. Comprobamos si existe
    $("#nombre").blur(() => {
        if ($("#nombre").val().length < 1) {
            $("#log_nombre").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.name == $("#nombre").val()) {
                $("#log_nombre").css("display", "none");
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_nombre").text("usuario no registrado").css("color", "red");
                errors++;
            }
        }
    });
    //Password. Comprobamos si es el que tiene relacion
    $("#pass").blur(() => {
        if ($("#pass").val().length < 1) {
            $("#log_pass").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.pass == $("#pass").val()) {
                $("#log_pass").css("display", "none");
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_pass").text("contraseña incorrecta").css("color", "red");
                errors++;
            }

        }
    });
    $("#btnEnviar").click(() => {
        if (errors == 0) {
            $("#inicio_sesion").attr("action", "pages/inicio.html");
        }
    });

    $("#btnRegistrar").click(() => {
        $("#inicio_sesion").attr("action", "pages/registro.html");
    });
    
});