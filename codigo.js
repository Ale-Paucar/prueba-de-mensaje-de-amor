let nombre = prompt("Hola hermosa, soy el bot programado por tu amor, dime tu nombre");

alert(`Hola ${nombre}, un gusto conocerte`);

let estado = prompt(`Dime ${nombre}, cómo estás, bien o mal`);
let quiereVer;
if (estado == "bien"){
    alert("Me alegro de que estés bien, tu amor te manda un besote");
} else if(estado == "mal"){
    alert(`Uy qué mal ${nombre}`);
    alert ("Tu amor te manda besitos y tiene una idea")
    quiereVer = prompt("¿Quieres ver un video gracioso?");
    if (quiereVer == "Si","Sí","si","sí"){
        window.open("https://www.youtube.com/watch?v=0j_eIU1nFZw&list=RD0j_eIU1nFZw&start_radio=1");
    } else if (quiereVer = "NO","No","no"){
        alert (`No hay problema ${nombre}, será para la proxima`)
    } else {
        alert ("no entiendo XD")
    }

} else{
    alert(`Disculpa ${nombre}, no entiendo ese estado, tienes que decirme si estás bien o mal`);
}

