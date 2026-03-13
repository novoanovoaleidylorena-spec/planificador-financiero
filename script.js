function calcular(){

let ingreso = Number(document.getElementById("ingreso").value);
let gastos = Number(document.getElementById("gastos").value);
let meta = Number(document.getElementById("meta").value);
let meses = Number(document.getElementById("meses").value);

let disponible = ingreso - gastos;
let ahorroMensual = meta / meses;

let mensaje = "";

if(disponible <= 0){
mensaje = "Tus gastos superan tu ingreso. Necesitas reducir gastos.";
}
else if(ahorroMensual > disponible){
mensaje = "Con tus gastos actuales no puedes cumplir la meta en ese tiempo.";
}
else{
mensaje = "Debes ahorrar $" + ahorroMensual.toFixed(2) + " cada mes. Te quedarán $" + (disponible-ahorroMensual).toFixed(2) + " libres.";
}

document.getElementById("resultado").innerText = mensaje;

}
