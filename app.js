/* Esto esta muy vacio */
/*Ejercicio 1 */
var asignacion = document.body.getElementsByTagName("div")[1];
asignacion.setAttribute("divContenido","divIzquierdo");
var asignacion2 = asignacion.nextElementSibling;
asignacion2.setAttribute("divContenido","divCentro");
var asignacion3 = asignacion2.nextElementSibling;
asignacion3.setAttribute("divContenido","divDerecho");


/*Ejercicio 2*/
asignacion.style.backgroundColor= "red";
asignacion.style.margin = "7px";


asignacion2.style.backgroundColor = "orange";
asignacion2.style.margin = "7px";


asignacion3.style.backgroundColor= "white";
asignacion2.style.margin = "7px";

/*Ejercicio 3*/
asignacion.style.width = "30vw";

asignacion2.style.width = "30vw";

asignacion3.style.width = "30vw";

/*Ejercicio 4*/
asignacion.style.display = "inline-block";
asignacion.style.border="3px solid ";

asignacion2.style.display = "inline-block";
asignacion2.style.border="3px solid";

asignacion3.style.display = "inline-block";
asignacion3.style.border="3px solid";

/*Ejercicio 5*/

var contenedor = document.body.getElementsByTagName("div")[0];

contenedor.style.height = "75vh";
/*contenedor.style.display = "flex";*/

/*Ejercicio 6*/
asignacion.style.height = "80%";

asignacion2.style.height = "80%";

asignacion3.style.height = "80%";

var PIE = document.body.getElementsByTagName("div")[4];
PIE.style.height = "5%";
PIE.style.border="3px solid";

/*Ejercicio 7*/
var nav = document.createElement(divNav);
nav.style.height= "5%";
nav.style.width= "80%";
nav.style.margin= "10%";
