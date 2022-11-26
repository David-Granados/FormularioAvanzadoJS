//User
var user = new Object();
var errors = 0;
$(document).ready(() => {
    $("#nombre").blur(() => {
        if ($("#nombre").val().length < 1) {
            $("#log_nombre_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.name !== $("#nombre").val()) {
                $("#log_nombre_regis").css("display", "none");
                user.name = $("#nombre").val();
                localStorage.setItem('usuario', JSON.stringify(user));
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
    $("#pass").blur(() => {
        if ($("#pass").val().length < 1) {
            $("#log_pass_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.pass !== $("#pass").val()) {
                $("#log_passe_regis").css("display", "none");
                user.pass = $("#pass").val();
                localStorage.setItem('usuario', JSON.stringify(user));
            }
            if (errors != 0) {
                errors--;
            }
        }
    });

    //EmailV
    $("#pass").blur(() => {
        if ($("#pass").val().length < 1) {
            $("#log_pass_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.pass !== $("#pass").val()) {
                $("#log_passe_regis").css("display", "none");
                user.pass = $("#pass").val();
                localStorage.setItem('usuario', JSON.stringify(user));
            }
            if (errors != 0) {
                errors--;
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
                user.pass = $("#pass").val();
                localStorage.setItem('usuario', JSON.stringify(user));
            }
            if (errors != 0) {
                errors--;
            }
        }
    });

    //Passwordv
    $("#pass").blur(() => {
        if ($("#pass").val().length < 1) {
            $("#log_pass_regis").text("Esta vacio").css("color", "red");
            errors++;
        } else {
            if (user.pass !== $("#pass").val()) {
                $("#log_passe_regis").css("display", "none");
                user.pass = $("#pass").val();
                localStorage.setItem('usuario', JSON.stringify(user));
            }
            if (errors != 0) {
                errors--;
            }
        }
    });


    $("#btnRegistrar").click(() => {
        window.location.href = "../index.html";
    })

});