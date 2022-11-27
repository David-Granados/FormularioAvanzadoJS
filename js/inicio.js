var user = JSON.parse(localStorage.getItem("usuario"));

$(document).ready(()=>{
   $("#nombre_hermandad").text(user.name);
   $("#numero_hermanos").text(user.email);
   $("#colores").text(user.color);
   $("#anio").text(user.anio);
   $("#direccion").text(user.direccion);
   $("#telefono").text(user.telefono);
});