var user = JSON.parse(localStorage.getItem("usuario"));
$(document).ready(()=>{
   $("#nombre_hermandad").text(user.name);
   $("#numero_hermanos").text(user.email);

});