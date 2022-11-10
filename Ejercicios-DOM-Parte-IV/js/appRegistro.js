/*Dicen que cuando limpias y ordenas la casa, hace más frio. "La mierda abriga...".
Pues esto me deja helado. */

//Ejercicio 1
var id = document.getElementById("userid");
var contraseña = document.getElementById("passid");
var usuario = document.getElementById("username");
var direcion = document.getElementById("address");
var pais = document.getElementById("country");
var zip = document.getElementById("zip");
var correo = document.getElementById("email");

var id_usu = document.getElementById("id_Vali");
var nombre_pass = document.getElementById("pass_Vali");
var nombre_usu = document.getElementById("name_Vali");
var address_usu = document.getElementById("address_Vali");
var zip_usu = document.getElementById("zip_Vali");
var email_usu = document.getElementById("email_Vali");


//Validador Nombre
 usuario.onblur = function() {
    if(usuario.value==""){
     nombre_usu.innerHTML = "Este campo no puede estar vacío";
     document.getElementById("name_Vali").style.color = "red";  
    }else if(usuario.value.mach(/^[A-Za-z]+$/)){
      nombre_usu.innerHTML = "OK";
      document.getElementById("name_Vali").style.color = "GREEN";
      }else {
      nombre_usu.innerHTML = "Este campo no puede contener caracteres especiales";
     document.getElementById("name_Vali").style.color = "red";  
      }
}

 usuario.onfocus = function() {
    nombre_usu.innerHTML = "";
  document.getElementById("name_Vali").style.backgroundColor = "";  
}

//Validador Id
  id.onblur = function() {
    if(id.value==""){
     id_Vali.innerHTML = "Este campo no puede estar vacío";
     document.getElementById("id_Vali").style.color = "red";  
    }else if(id.value >= 10 && id.value <= 99999) {
      id_Vali.innerHTML = "El valor es Correcto";
      document.getElementById("id_Vali").style.color = "green";
    }else{
      id_Vali.innerHTML="El valor no tiene entre 2 y 5 cifras prueba con otro"
      document.getElementById("id_Vali").style.color = "red";
    }
}

  id.focus = function() {
    id_Vali.innerHTML = "";
  document.getElementById("id_Vali").style.backgroundColor = "";  
}

//Validador Contraseña
contraseña.onblur = function() {
    if(contraseña.value==""){
     pass_Vali.innerHTML = "Este campo no puede estar vacío";
     document.getElementById("pass_Vali").style.color = "red";  
    }
}

contraseña.onfocus = function() {
    pass_Vali.innerHTML = "";
  document.getElementById("pass_Vali").style.backgroundColor = "";  
}

//Validador Direccion
direcion.onblur = function() {
    if(direcion.value==""){
     address_usu.innerHTML = "Este campo no puede estar vacío";
     document.getElementById("address_Vali").style.color = "red";  
    }
}

direcion.onfocus = function() {
    
    address_usu.innerHTML = "";
  document.getElementById("address_Vali").style.backgroundColor = "";  
}

//Validador Zip
zip.onblur = function() {
  if(zip.value==""){
   zip_usu.innerHTML = "Este campo no puede estar vacío";
   document.getElementById("zip_Vali").style.color = "red";  
  }
}

zip.onfocus = function() {
  zip_usu.innerHTML = "";
document.getElementById("zip_Vali").style.backgroundColor = "";  
}

//Validador Correo
correo.onblur = function() {
  if(correo.value==""){
   email_usu.innerHTML = "Este campo no puede estar vacío";
   document.getElementById("email_Vali").style.color = "red";  
  }
}

correo.onfocus = function() {
  email_usu.innerHTML = "";
document.getElementById("email_Vali").style.backgroundColor = "";  
}