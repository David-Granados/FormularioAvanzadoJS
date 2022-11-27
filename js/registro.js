//User

var user = new Object();
if (localStorage.getItem("usuario")) {
    user = JSON.parse(localStorage.getItem("usuario"));
}
var errors = 0;
$(document).ready(() => {
    //Nombre
    if($("#nombre").val().length < 1 
    && $("#email").val().length < 1 
    && $("#emailValidate").val().length < 1 
    && $("#pass").val().length < 1 
    && $("#passValidate").val().length < 1){
        errors=1;
    }
    $("#nombre").blur(() => {
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

    //Email
    $("#email").blur(() => {
        if ($("#email").val().length < 1) {
            $("#log_email_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.email !== $("#email").val()) {
                $("#log_email_regis").css("display", "none");

                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_email_regis").text("correo ya registrado").css("color", "red");
                errors++;
            }
        }
    });

    //EmailV
    $("#emailValidate").blur(() => {
        if ($("#emailValidate").val().length < 1) {
            $("#log_email_regis_validate").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if ($("#email").val() == $("#emailValidate").val()) {
                $("#log_email_regis_validate").css("display", "none");
                document.cookie = "email =" + $("#email").val();
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_email_regis_validate").text("No coincide").css("color", "red");
                errors++;
            }
        }
    });


    //Password
    $("#pass").blur(() => {
        if ($("#pass").val().length < 1) {
            $("#log_pass_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.pass !== $("#pass").val()) {
                $("#log_passe_regis").css("display", "none");
            }
            if (errors != 0) {
                errors--;
            }
        }
    });

    //Password Validar
    $("#passValidate").blur(() => {
        if ($("#passValidate").val().length < 1) {
            $("#log_pass_regis_validate").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if ($("#pass").val() == $("#passValidate").val()) {
                $("#log_pass_regis_validate").css("display", "none");
                document.cookie = "pass =" + $("#pass").val();
                if (errors != 0) {
                    errors--;
                }
            } else {
                $("#log_pass_regis_validate").text("No coincide").css("color", "red");
                errors++;
            }

        }
    });

    $("#btnSeguir").click(() => {
        if (errors == 0) {
            $("#formulario").attr("action", "registro-2.html");
        }
    })

});