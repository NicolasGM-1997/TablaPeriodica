function procesarDatos(datos){
	// Obtener el elemento HTML donde deseas mostrar los datos
	console.time("Tiempo de ejecución");
	const container = document.getElementById("principal");
	const relacion = document.getElementById("grupo-relacion");
	const division = document.getElementById("div2");
	var titulo = document.title;
	var pageTitle = "";
	var numero = 0;
	var simbolo, simboloAnt, simboloSig;
	var noMetales = ["Hidrogeno","Carbono","Nitrogeno","Oxigeno","Fosforo","Asufre","Selenio"];
	var metAlc = ["Litio","Sodio","Potasio","Rubidio","Cesio","Francio"];
	var gasNobles = ["Helio","Neon","Argon","Kripton","Xenon","Radon"];
	var halogenos = ["Fluor","Cloro","Bromo","Yodo","Astato"];
	var alcTer = ["Berilio","Magnesio","Calcio","Estroncio","Bario","Radio"];
	var otrMet = ["Aluminio","Galio","Indio","Estaño","Talio","Plomo","Bismuto"];
	var metaloides = ["Boro","Silicio","Germanio","Arsenico","Antimonio","Telurio","Polonio"];
	var neutros = ["Meitnerio","Darmstatio","Roentgenio","Copernicio","Nihonio","Flerovio","Moscovio",
		"Livermorio","Teneso","Oganeson"];
	var lantanidos = ["Lantanido","Cerio","Praseodimio","Neodimio","Prometio","Samario","Europio","Gadolinio",
		"Terbio","Disprosio","Holmio","Erbio","Tulio","Iterbio","Lutecio"];
	var actinidos = ["Actinido","Torio","Protactino","Uranio","Neptunio","Plutonio","Americio","Curio",
		"Berkelio","Californio","Einstenio","Fermio","Mendelevio","Nobelio","Laurencio"];
	var metTrans = ["Escandio","Titanio","Vanadio","Cromo","Mangneso","Hierro","Cobalto","Niquel","Cobre","Zinc",
		"Itrio","Zirconio","Niobio","Molibdeno","Tecnesio","Rutenio","Rodio","Paladio","Plata","Cadmio","Hafnio",
		"Tantalo","Wolframio","Renio","Osmio","Iridio","Platino","Oro","Mercurio","Rutherfordio","Dubnio",
		"Seaborgio","Bohrio","Hassio"];
	// Iterar sobre los objetos en el JSON y crear elementos HTML para cada uno
	datos.forEach(obj => {
		const nombreElemento = document.getElementById("nombre-elemento");
		const numeroElemento = document.getElementById("numero-elemento");
		const electronegatividad = document.getElementById("electronegatividad");
		const masaElemento = document.getElementById("masa-elemento");
		const simboloElemento = document.getElementById("simbolo-elemento");
		const grupoElemento = document.getElementById("grupo-elemento");
		const grupos = document.getElementById("grupos");
		const configuracionAtomica = document.getElementById("configuracion-atomica");
		if(titulo.charAt(titulo.length-3)=='('){
			pageTitle = titulo.slice(0,-6);
		} else {
			pageTitle = titulo.slice(0,-7);
		}
		if(obj.nombre==pageTitle){
			nombreElemento.innerHTML = (obj.nombre).toUpperCase();
			numeroElemento.innerHTML = obj.numero;
			if(obj.electronegatividad==null){
				electronegatividad.innerHTML = "-----";
			} else {
				electronegatividad.innerHTML = obj.electronegatividad;
			}
			masaElemento.innerHTML = obj.masa;
			simboloElemento.innerHTML = obj.simbolo;
			grupoElemento.innerHTML = (obj.grupo).toUpperCase();
			configuracionAtomica.innerHTML = obj.configuracion_atomica;
			grupos.innerHTML = (obj.grupo).toUpperCase();
			numero = parseInt(obj.numero);
			if(obj.grupo=="no-metal"){
				for (var i = 0; i < noMetales.length; i++) {
					if(obj.nombre!=noMetales[i]){
						relacion.innerHTML += "<tr><td>"+noMetales[i]+"</td><td>"+
							"<button class=\"no-metal\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="metales-alcalinos"){
				for (var i = 0; i < metAlc.length; i++) {
					if(obj.nombre!=metAlc[i]){
						relacion.innerHTML += "<tr><td>"+metAlc[i]+"</td><td>"+
							"<button class=\"metales-alcalinos\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="gases-nobles"){
				for (var i = 0; i < gasNobles.length; i++) {
					if(obj.nombre!=gasNobles[i]){
						relacion.innerHTML += "<tr><td>"+gasNobles[i]+"</td><td>"+
							"<button class=\"gases-nobles\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="halogenos"){
				for (var i = 0; i < halogenos.length; i++) {
					if(obj.nombre!=halogenos[i]){
						relacion.innerHTML += "<tr><td>"+halogenos[i]+"</td><td>"+
							"<button class=\"halogenos\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="alcalinoterreos"){
				for (var i = 0; i < alcTer.length; i++) {
					if(obj.nombre!=alcTer[i]){
						relacion.innerHTML += "<tr><td>"+alcTer[i]+"</td><td>"+
							"<button class=\"alcalinoterreos\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="otros-metales"){
				for (var i = 0; i < otrMet.length; i++) {
					if(obj.nombre!=otrMet[i]){
						relacion.innerHTML += "<tr><td>"+otrMet[i]+"</td><td>"+
							"<button class=\"otros-metales\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="metaloides"){
				for (var i = 0; i < metaloides.length; i++) {
					if(obj.nombre!=metaloides[i]){
						relacion.innerHTML += "<tr><td>"+metaloides[i]+"</td><td>"+
							"<button class=\"metaloides\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="neutros"){
				for (var i = 0; i < neutros.length; i++) {
					if(obj.nombre!=neutros[i]){
						relacion.innerHTML += "<tr><td>"+neutros[i]+"</td><td>"+
							"<button class=\"neutro\"></button>"+"</td><tr>";
					}
				}
			} else if(obj.grupo=="lantanidos"){
				for (var i = 0; i < lantanidos.length-1; i+=2) {
					var col1,col2;
					var ultimo = "<td>"+lantanidos[lantanidos.length-1]+"</td><td><button " 
							+"class=\"lantanidos\"></button></td>";
					if(obj.nombre!=lantanidos[i]){
						col1 = "<td>"+lantanidos[i]+"</td><td><button class=\"lantanidos\"></button></td>";
					} else {
						col1 = ultimo;
					}
					if(obj.nombre!=lantanidos[i+1]){
						col2 = "<td>"+lantanidos[i+1]+"</td><td><button class=\"lantanidos\"></button></td>";
					} else {
						col2 = ultimo;
					}
					relacion.innerHTML += "<tr>"+col1+col2+"</tr>";
				}
			} else if(obj.grupo=="actinidos"){
				for (var i = 0; i < actinidos.length-1; i+=2) {
					var col1,col2;
					var ultimo = "<td>"+actinidos[actinidos.length-1]+"</td><td><button " 
							+"class=\"actinidos\"></button></td>";
					if(obj.nombre!=actinidos[i]){
						col1 = "<td>"+actinidos[i]+"</td><td><button class=\"actinidos\"></button></td>";
					} else {
						col1 = ultimo;
					}
					if(obj.nombre!=actinidos[i+1]){
						col2 = "<td>"+actinidos[i+1]+"</td><td><button class=\"actinidos\"></button></td>";
					} else {
						col2 = ultimo;
					}
					relacion.innerHTML += "<tr>"+col1+col2+"</tr>";
				}
			} else if(obj.grupo=="metales-trancision"){
				for (var i = 0; i < metTrans.length-1; i+=3) {
					var col1,col2,col3;
					var ultimo = "<td>"+metTrans[metTrans.length-1]+"</td><td><button " 
							+"class=\"metales-trancision\"></button></td>";
					if(obj.nombre!=metTrans[i]){
						col1 = "<td>"+metTrans[i]+"</td><td><button class=\"metales-trancision\"></button></td>";
					} else {
						col1 = ultimo;
					}
					if(obj.nombre!=metTrans[i+1]){
						col2 = "<td>"+metTrans[i+1]+"</td><td><button class=\"metales-trancision\"></button></td>";
					} else {
						col2 = ultimo;
					}
					if(obj.nombre!=metTrans[i+2]){
						col3 = "<td>"+metTrans[i+2]+"</td><td><button class=\"metales-trancision\"></button></td>";
					}
					else {
						col3 = ultimo;
					}
					relacion.innerHTML += "<tr>"+col1+col2+col3+"</tr>";
				}
			}
		}
	});
	if(numero==1){
		datos.forEach(obj => {if(parseInt(obj.numero)==1){simbolo = obj.simbolo;}});
		datos.forEach(obj => {if(parseInt(obj.numero)==1+1){simboloSig = obj.simbolo;}});
		division.innerHTML = "<button class=\"simbolo\">"+simbolo+"</button><button class=\"simbolo2\">"+
			simboloSig+"</button>";
	} else if(numero==118){
		datos.forEach(obj => {if(parseInt(obj.numero)==118){simbolo = obj.simbolo;}});
		datos.forEach(obj => {if(parseInt(obj.numero)==118-1){simboloAnt = obj.simbolo;}});
		division.innerHTML = "<button class=\"simbolo2\">"+simboloAnt+"</button><button class=\"simbolo\">"+
			simbolo+"</button>";
	} else {
		datos.forEach(obj => {if(parseInt(obj.numero)==numero-1){simboloAnt = obj.simbolo;}});
		datos.forEach(obj => {if(parseInt(obj.numero)==numero){simbolo = obj.simbolo;}});
		datos.forEach(obj => {if(parseInt(obj.numero)==numero+1){simboloSig = obj.simbolo;}});
		division.innerHTML = "<button class=\"simbolo2\">"+simboloAnt+"</button><button class=\"simbolo\">"+simbolo+
			"</button><button class=\"simbolo2\">"+simboloSig+"</button>";
	}
	console.timeEnd("Tiempo de ejecución");
}

// solicitud tipo fetch para conectar el json
document.addEventListener("DOMContentLoaded", function () {
    fetch("elementos.json")
        .then(response => response.json())
        .then(procesarDatos)
        .catch(error => {
            console.error("Error al obtener el JSON:", error);
        });
});