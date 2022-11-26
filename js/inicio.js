$(document).ready(()=>{
    var user = JSON.parse(localStorage.getItem("usuario"));
    $("#nombres").text(user.name);

});