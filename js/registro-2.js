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
    if ($("#nombre_hermandad").val().length < 1
        || $("#direccion").val().length < 1
        || $("#anio").val().length < 1
        || $("#numero_hermanos").val().length < 1
        //ver como se escoje color
        || $("#color").val().length < 1
        || $("#telefono").val().length < 1
        || $("#pago").val().length < 1) {
        errors = 1;
    }
    //Nombre Hermandad
    $("#nombre_hermandad").blur(() => {
        if ($("#nombre_hermandad").val().length < 1) {
            $("#log_nombre_hermandad_regis").text("Esta vacio").css("color", "red");
        } else {
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

    //Direccion
    $("#direccion").blur(() => {
        if ($("#direccion").val().length < 1) {
            $("#log_direccion").text("Esta vacio").css("color", "red");
        } else {
            if (user.direccion !== $("#direccion").val()) {
                $("#log_direccion").css("display", "none");
                document.cookie = "direccion=" + $("#direccion").val();
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_direccion").text("Direccion ya registrado").css("color", "red");
                errors++;
            }
        }
    });
    //Anio creacion
    $("#anio").blur(() => {
        if ($("#anio").val().length < 1) {
            $("#log_anio").text("Esta vacio").css("color", "red");
        } else {
            $("#log_anio").css("display", "none");
            document.cookie = "anio=" + $("#anio").val();
            if (errors != 0) {
                errors--;
            }
        }
    });
    //Numero de hermanos
    $("#numero_hermanos").blur(() => {
        if ($("#numero_hermanos").val().length < 1) {
            $("#log_number").text("Esta vacio").css("color", "red");
        } else {
            $("#log_number").css("display", "none");
            document.cookie = "numero_hermanos=" + $("#anio").val();
            if (errors != 0) {
                errors--;
            }
        }
    });
    //Colores
    $("#color").blur(() => {
        console.log($("#color").val());
        document.cookie = "color=" + $("#color").val();
    });
    //Telefono
    $("#telefono").blur(() => {
        if ($("#telefono").val().length < 1) {
            $("#log_telefono").text("Esta vacio").css("color", "red");
        } else {
            if (user.telefono !== $("#telefono").val()) {
                $("#log_telefono").css("display", "none");
                document.cookie = "telefono=" + $("#telefono").val();
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_telefono").text("Telefono ya registrado").css("color", "red");
                errors++;
            }
        }
    });

    //Plan de pago
    $('select[name=pago]').click(() => {
        if ($('select[name=pago]').val() != "") {
            $("#log_pago").css("display", "none");
            document.cookie = "pago=" + $('select[name=pago]').val();
        } else {
            $("#log_pago").text("Debe de elegir una opción").css("color", "red");
            errors++;
        }
    });




    $("#btnEnviar").click(() => {
        if (errors < 1) {
            //Simulamos guardar el nuevo usuario en bd con localstorage
            user.name = leerCookie("name");
            user.email = leerCookie("email");
            user.pass = leerCookie("pass");
            user.hermandad = leerCookie("hermandad");
            user.direccion = leerCookie("direccion");
            user.anio = leerCookie("anio");
            user.numero_hermanos = leerCookie("numero_hermanos");
            user.color = leerCookie("color");
            user.telefono = leerCookie("telefono");
            user.pago = leerCookie("pago");
            localStorage.setItem("usuario", JSON.stringify(user));
            $("#formulario").attr("action", "inicio.html");
        }
    });
    $("#btnAtras").click(() => {
        $("#formulario").attr("action", "registro.html");
    });
});
