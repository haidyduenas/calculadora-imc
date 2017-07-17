var peso = parseInt(prompt("Ingrese su peso en kilogramos"));
var estatura = parseInt(prompt("Ingrese su estatura"));
var resultado = (peso(estatura*estatura)*10000).toFixed(2);
alert("Tu (IMC es " + resultado);
/*function calculadora(n,m){
	var resultado = n/(m*m);
	var respuesta= resultado*10000;
	var ultimo = respuesta.toFixed(2);
	document.write("Su indice de IMC es " + ultimo) ;
}
calculadora(peso,estatura);
*/