<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
<style>
    .parrafo{
        color:blue;
        font-weight: bold;
        opacity: 50%;
    }
</style>
</head>
<body>
    
<?php
    print "Bienvenidos al curso de PHP <br>";
    print "Hola Alumnos <br>";

    $nombre = "JuanLu";
    print $nombre . "<br>";
    print "La persona que te atiende se llama " . $nombre . "<br>";
    print "Esto es un prueva para $nombre<br>";

    print 'Esto es un prueva con comilla simple.<br>La diferencia es que con comillas simples no se pueden poner variables.<br>';

    $edad = 18;

    echo"Mi nombre es JuanLuis<br>";

    print "Hola buenas $nombre tu numero asignado es el $edad.<br>";
    print "Bienvenido $nombre" . " Tu edad es $edad.<br>";

    echo "La funcion echo es mejor.<br>";

    echo "Ejemplos con echo.<br>";
    echo "Hola buenas $nombre tu numero asignado es el $edad.<br>";
    echo "Bienvenido $nombre." . " Tu edad es $edad.<br>";

    function DameDato (){
        global $nombre;
        echo "Mi nombre es : $nombre<br>";
    }

    DameDato();

    function DameDatos ($persona){
        echo "Mi nombre es : $persona<br>";
    }

    DameDatos($nombre);

    echo"Mi edad es $edad<br>";


    //include("Llamada_Fun.php");
    require("Llamada_Fun.php");

    Dame_los_Dato($nombre);

    echo "Mi edad es: $edad<br>";

    DameNombre($nombre);
    DameEdad($edad);

    echo "El require no sigue ejequtando y el include si.<br>";

    function Incrementa(){
        $contador = 0;
        $contador++;
        echo $contador."<br>";
    }

    Incrementa();
        Incrementa();
        Incrementa();
        Incrementa();
        Incrementa();

        function Incrementar(){
            static $contador = 0;
            $contador++;
            echo $contador."<br>";
        }
    
        Incrementar();
            Incrementar();
            Incrementar();
            Incrementar();
            Incrementar();


    echo "Ejemplo de parrafo";
    echo "<p class = 'parrafo'>Esto es un ejemplo de frase</p>";
    

    $variable1 = "casa";
    $variable2 = "CASA";

    $resultado = strcmp($variable1,$variable2);

    echo "El resultado es: " . $resultado . "<br>";

    $resultado2 = strcasecmp($variable1,$variable2);

    echo "El resultado es: " . $resultado2 . "<br>";

    if($resultado){
        echo "<br>";
    }else{
        echo "Coinciden <br>";
    }
    
    if($resultado2){
        echo "No Coinciden <br>";
    }else{
        echo "Coinciden <br>";
    }

?>

</body>
</html>