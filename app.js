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
PIE.style.width = "93.2vw";

/*Ejercicio 7*/
const divNav = document.createElement("div");
var nav = divNav;
nav.firstElementChild('contenedor');
nav.style.height= "5%";
nav.style.width= "80%";
nav.style.margin= "10%";

/*Ejercicio 8*/
var ul = document.createElement("ul");

var li1 = document.createElement("li");
var li1Texto = document.createTextNode("Elemento desordenado 1");
li1.appendChild(li1Texto);
 
var li2 = document.createElement("li");
var li2Texto = document.createTextNode("Elemento desordenado 2");
li2.appendChild(li2Texto);
 
var li3 = document.createElement("li");
var li3Texto = document.createTextNode("Elemento desordenado 3");
li3.appendChild(li3Texto);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);
document.body.appendChild(ol);
