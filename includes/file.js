function myFunction ()
{

var NROPERSONAS=(document.MyForm.PERSONAS.value!="")?parseFloat(document.MyForm.PERSONAS.value):0; 
var NROELECTRICIDAD=(document.MyForm.ELECTRICIDAD.value!="")?parseFloat(document.MyForm.ELECTRICIDAD.value):0;
var NROGLP=(document.MyForm.GLP.value!="")?parseFloat(document.MyForm.GLP.value):0;
var NROGAS=(document.MyForm.GAS.value!="")?parseFloat(document.MyForm.GAS.value):0;
var NROGASOLINA=(document.MyForm.GASOLINA.value!="")?parseFloat(document.MyForm.GASOLINA.value):0;
var NRODIESEL=(document.MyForm.DIESEL.value!="")?parseFloat(document.MyForm.DIESEL.value):0;
var NROGNV=(document.MyForm.GNV.value!="")?parseFloat(document.MyForm.GNV.value):0;
var NROMICROBUS=(document.MyForm.MICROBUS.value!="")?parseFloat(document.MyForm.MICROBUS.value):0;
var NROBUS=(document.MyForm.BUS.value!="")?parseFloat(document.MyForm.BUS.value):0;
var NROBUSETA=(document.MyForm.BUSETA.value!="")?parseFloat(document.MyForm.BUSETA.value):0;		
var NROMIO=(document.MyForm.MIO.value!="")?parseFloat(document.MyForm.MIO.value):0;				
var NROTAXI=(document.MyForm.TAXI.value!="")?parseFloat(document.MyForm.TAXI.value):0;
var NROMOTOTAXI=(document.MyForm.MOTOTAXI.value!="")?parseFloat(document.MyForm.MOTOTAXI.value):0;
var NROBICITAXI=(document.MyForm.BICITAXI.value!="")?parseFloat(document.MyForm.BICITAXI.value):0;	
var NROAVIONCORTO=(document.MyForm.AVIONCORTO.value!="")?parseFloat(document.MyForm.AVIONCORTO.value):0;
var NROAVIONMEDIO=(document.MyForm.AVIONMEDIO.value!="")?parseFloat(document.MyForm.AVIONMEDIO.value):0;
var NROAVIONLARGO=(document.MyForm.AVIONLARGO.value!="")?parseFloat(document.MyForm.AVIONLARGO.value):0;
var NROAVIONEXTENDIDO=(document.MyForm.AVIONEXTENDIDO.value!="")?parseFloat(document.MyForm.AVIONEXTENDIDO.value):0;
var NROAVIONSUPEREXTENDIDO=(document.MyForm.AVIONSUPEREXTENDIDO.value!="")?parseFloat(document.MyForm.AVIONSUPEREXTENDIDO.value):0;

// electricidad
totalElectricidad=parseFloat(NROELECTRICIDAD)*(0.0314961/parseFloat(NROPERSONAS))*0.0002190;
// glp
totalGlp=parseFloat(NROGLP)*(54/parseFloat(NROPERSONAS))*0.00312171;
// gnv
totalGas=parseFloat(NROGAS)*(0.2069437/parseFloat(NROPERSONAS))*0.0019725;

// auto gasolina 
totalGasolina=parseFloat(NROGASOLINA)*(0.02213/parseFloat(NROPERSONAS))*0.0076180;
// auto diesel
totalDiesel=parseFloat(NRODIESEL)*(12.903226/parseFloat(NROPERSONAS))*0.0102770;
// auto gnv
totalGnv=parseFloat(NROGNV)*(0.0292326/parseFloat(NROPERSONAS))*0.0019725;
// total autos
totalAutos=totalGasolina+totalDiesel+totalGnv;

// microbus
totalMicrobus=parseFloat(NROMICROBUS)*5.53203125*0.0102770;
// bus
totalBus=parseFloat(NROBUS)*30.8658974*0.0076180;
// buseta
totalBuseta=parseFloat(NROBUSETA)*30.8658974*0.0076180;
// MIO
totalMio=parseFloat(NROMIO)*5.5320313*0.0102770;
// taxi
totalTaxi=parseFloat(NROTAXI)*88.5125*0.0076180;
// mototaxi
totalMototaxi=parseFloat(NROMOTOTAXI)*141.62*0.0076180;
// bicitaxi
totalBicitaxi=parseFloat(NROBICITAXI)*0*0;
// total transporte publico
totalTransportePublico=totalMicrobus+totalBus+totalBuseta+totalMio+totalTaxi+totalMototaxi;

// total transporte privado y publico
totalTransporte=totalAutos+totalTransportePublico;

//avion viaje corto
totalAvioncorto=parseFloat(NROAVIONCORTO)*300*0.0001648;
//avion viaje medio
totalAvionmedio=parseFloat(NROAVIONMEDIO)*1900*0.0001648;
//avion viaje largo
totalAvionlargo=parseFloat(NROAVIONLARGO)*3000*0.0001648;
//avion viaje extendido
totalAvionextendido=parseFloat(NROAVIONEXTENDIDO)*4000*0.0001648;
//avion viaje superextendido
totalAvionsuperextendido=parseFloat(NROAVIONSUPEREXTENDIDO)*5000*0.0001648;

// total avion
totalAvion=totalAvioncorto+totalAvionmedio+totalAvionlargo+totalAvionextendido+totalAvionsuperextendido;

// total HC
totalHC=totalElectricidad+totalGlp+totalGas+totalTransporte+totalAvion;

if (totalHC<=0) {totalHC=Math.abs(totalHC)};

// REDONDEO DE LOS TOTALES
ROUNDELECTRICIDAD=Math.round(totalElectricidad*100)/100;
ROUNDTRANSPORTE=Math.round(totalTransporte*100)/100;
ROUNDAVION=Math.round(totalAvion*100)/100;

// ROUNDHCTOT ES EL VALOR FINAL EN TONCO2E
ROUNDHCTOTAL=Math.round(totalHC*10)/10;
document.MyForm.totaltnco2e.value=ROUNDHCTOTAL;


// CONDICIONES PARA MOSTRAR LAS IMAGENES DE LOS RESULTADOS

var bajo = '<img src="img/bajo.png">';
var medio = '<img src="img/medio.png">';
var alto = '<img src="img/alto.png">';


if((ROUNDHCTOTAL>=0) && (ROUNDHCTOTAL<=1.243)) {
		var output = document.getElementById("mostrartitulo");	
		output.innerHTML = "<h1 style='color:#7f2bc7'>Bajo:</h1>";
		var output = document.getElementById("mostrarimagen");	
		output.innerHTML = bajo;			
		var output = document.getElementById("mostrarmensaje");	
		output.innerHTML = "<h2>Felicidades, el resultado de tu Huella es bueno, pero podrías reducirla aplicando los consejos de la siguiente pantalla en el enlace 'Aprende como reducir tu Huella'</h2>";		
}

if((ROUNDHCTOTAL>1.243) && (ROUNDHCTOTAL<=1.519)) {	
		var output = document.getElementById("mostrartitulo");	
		output.innerHTML = "<h1 style='color:#7f2bc7'>Medio:</h1>";
		var output = document.getElementById("mostrarimagen");	
		output.innerHTML = medio;			
		var output = document.getElementById("mostrarmensaje");	
		output.innerHTML = "<h2>El resultado de tu Huella es regular, te recomendamos que la reduzcas aplicando los consejos de la siguiente pantalla en el enlace 'Aprende como reducir tu Huella'</h2>";			
}

if((ROUNDHCTOTAL>1.519)) {
		var output = document.getElementById("mostrartitulo");	
		output.innerHTML = "<h1 style='color:#7f2bc7'>Alto:</h1>";
		var output = document.getElementById("mostrarimagen");	
		output.innerHTML = alto;			
		var output = document.getElementById("mostrarmensaje");	
		output.innerHTML = "<h2>Lamentablemente el resultado de tu Huella es alto, te recomendamos que la reduzcas aplicando los consejos de la siguiente pantalla en el enlace 'Aprende como reducir tu Huella'</h2>";			
}

}



