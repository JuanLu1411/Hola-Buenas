document.body.style.backgroundColor = '#7FFFD4';
document.body.style.fontFamily = 'Arial';
document.body.style.color = "red";
document.body.style.border="10p".borderColor= "red";

window.onload = function() {
    setInterval(cambiarFondo, 30000);
    }
    fondoActual = 0;
    imagenes = ["Fondo1.gif", "Fondo2.gif"];
    function cambiarFondo() {
    document.body.style.backgroundImage = "url(" + imagenes[++fondoActual % imagenes.length] + ")";
}

document.Parrafos.style.color = "Blue";

