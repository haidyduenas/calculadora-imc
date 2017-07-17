var peso = parseInt(prompt("Ingrese su peso en kilogramos"));
var estatura = parseInt(prompt("Ingrese su estatura"));
function calculadora(n,m){
	var resultado = n/(m*m);
	var respuesta= resultado*10000;
	var ultimo = respuesta.toFixed(2);
	document.write("Su indice de IMC es " + ultimo) ;
}
calculadora(peso,estatura);
