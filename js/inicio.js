var user = JSON.parse(localStorage.getItem("usuario"));

$(document).ready(() => {

   $("#nombre_hermandad").text(user.name);
   $("#numero_hermanos").text(user.email);
   $("#anio").text(user.anio);
   $("#direccion").text(user.direccion);
   $("#telefono").text(user.telefono);
   switch (user.pago) {
      case "mes":
         $("#containers").css("background-color", "burlywood");
         $("#nivel").text("Nivel Bronce");
         break;
      case "trimestre":
         $("#containers").css("background-color", "silver");
         $("#nivel").text("Nivel Plata");
         break;
      case "semestre":
         $("#containers").css("background-color", "gold");
         $("#nivel").text("Nivel Oro");
         break;
      case "anio":
         $("#containers").css("background-color", "blueviolet");
         $("#nivel").text("Nivel Platino");
         break;

      default:
         break;
   }


});
