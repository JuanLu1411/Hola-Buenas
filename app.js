document.body.style.backgroundColor = '#7FFFD4';
document.body.style.fontFamily = 'Arial';
document.body.style.color = "red";
document.body.style.border="3px solid red";

window.onload = function() {
    setInterval(cambiarFondo, 5000);
    }
    fondoActual = 0;
    imagenes = ["Fondo1.gif", "Fondo2.gif"];
    function cambiarFondo() {
    document.body.style.backgroundImage = "url(" + imagenes[++fondoActual % imagenes.length] + ")";
}

var Parrafos = document.body.getElementsByTagName("h1")[0];{
Parrafos.style.color="blue";
};

var lista = document.body.getElementsByTagName("div")[1];

var listita = lista.lastElementChild;

for (i=4; i<7; i++){

const node = document.createElement("li");

const textnode = document.createTextNode("object "+i);

node.appendChild(textnode);

listita.appendChild(node);

}




//var Parrafos = document.getElementById("Parrafos");{
//    Parrafos.style.color="blue";
//}
