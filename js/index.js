//User
if(!localStorage.getItem("usuario")){
    var user = new Object();
}else{
    var user = JSON.parse(localStorage.getItem("usuario"));
}
var errors=0;
$(document).ready(()=>{
    // Cuando 'nombre' obtiene el foco
    $("#nombre").blur(()=>{
        if($("#nombre").val().length <1){
            $("#log_nombre").text("Esta vacio").css("color","red");
            errors++;
        }else{
            if(user.name == $("#nombre").val()){
                $("#log_nombre").css("display", "none");
                if(errors!=0){
                    errors--;
                }
            }else{
                $("#log_nombre").text("usuario no registrado").css("color", "red");
                errors++;
            }
        }
    });
    //Password
    $("#pass").blur(()=>{
        if($("#pass").val().length <1){
            $("#log_pass").text("Esta vacio").css("color","red");
            errors++;
        }else{
            if(user.pass == $("#pass").val()){
                $("#log_pass").css("display", "none");
                if(errors!=0){
                    errors--;
                }
            }else{
                $("#log_pass").text("contraseña incorrecta").css("color", "red");
                errors++;
            }
            
        }
    });
    $("#btnRegistrar").click(()=>{
        window.location.href = "pages/registro.html";
    })
    
});