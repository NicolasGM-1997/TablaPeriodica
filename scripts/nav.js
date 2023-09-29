// Navegacion index
function alcalinos(){window.location.href="#alcalinos"}
function metaloides(){window.location.href="#metaloides"}
function alcalinoterreos(){window.location.href="#alcalinoterreos"}
function no_metales(){window.location.href="#no-metales"}
function otros_metales(){window.location.href="#otros-metales"}
function halogenos(){window.location.href="#halogenos"}
function metales_trancision(){window.location.href="#metales-trancision"}
function gases_nobles(){window.location.href="#gases-nobles"}
function lantanidos(){window.location.href="#lantanidos"}
function actinidos(){window.location.href="#actinidos"}

var btnNoMet = document.getElementsByClassName("no-metal"); // botones de la clase no metal

for (var i = 0; i < btnNoMet.length; i++) {
	btnNoMet[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "H":window.location.href = "elementos/hidrogeno.html";break;
	    	case "C":window.location.href = "elementos/carbono.html";break;
	    	case "N":window.location.href = "elementos/nitrogeno.html";break;
    		case "O":window.location.href = "elementos/oxigeno.html";break;
	    	case "P":window.location.href = "elementos/fosforo.html";break;
	    	case "S":window.location.href = "elementos/asufre.html";break;
	    	case "SE":window.location.href = "elementos/selenio.html";break;
	    }
	});
}

var btnGasNoble = document.getElementsByClassName("gases-nobles"); // botones de la clase gases nobles

for (var i = 0; i < btnGasNoble.length; i++) {
	btnGasNoble[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "HE":window.location.href = "elementos/helio.html";break;
	    	case "NE":window.location.href = "elementos/neon.html";break;
	    	case "AR":window.location.href = "elementos/argon.html";break;
    		case "KR":window.location.href = "elementos/kripton.html";break;
	    	case "XE":window.location.href = "elementos/xenon.html";break;
	    	case "RN":window.location.href = "elementos/radon.html";break;
	    }
	});
}

var btnAlc = document.getElementsByClassName("metales-alcalinos"); // botones de la clase alcalinos

for (var i = 0; i < btnAlc.length; i++) {
	btnAlc[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "LI":window.location.href = "elementos/litio.html";break;
	    	case "NA":window.location.href = "elementos/sodio.html";break;
	    	case "K":window.location.href = "elementos/potasio.html";break;
    		case "RB":window.location.href = "elementos/rubidio.html";break;
	    	case "CS":window.location.href = "elementos/cesio.html";break;
	    	case "FR":window.location.href = "elementos/francio.html";break;
	    }
	});
}

var btnAlcTer = document.getElementsByClassName("alcalinoterreos"); // botones de la clase alcalinoterros

for (var i = 0; i < btnAlcTer.length; i++) {
	btnAlcTer[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "BE":window.location.href = "elementos/berilio.html";break;
	    	case "MG":window.location.href = "elementos/magnesio.html";break;
	    	case "CA":window.location.href = "elementos/calcio.html";break;
    		case "SR":window.location.href = "elementos/estroncio.html";break;
	    	case "BA":window.location.href = "elementos/bario.html";break;
	    	case "RA":window.location.href = "elementos/radio.html";break;
	    }
	});
}

var btnMet = document.getElementsByClassName("metaloides"); // botones de la clase metaloides

for (var i = 0; i < btnMet.length; i++) {
	btnMet[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "B":window.location.href = "elementos/boro.html";break;
	    	case "SI":window.location.href = "elementos/silicio.html";break;
	    	case "GE":window.location.href = "elementos/germanio.html";break;
    		case "AS":window.location.href = "elementos/arsenico.html";break;
	    	case "SB":window.location.href = "elementos/antimonio.html";break;
	    	case "TE":window.location.href = "elementos/telurio.html";break;
	    	case "PO":window.location.href = "elementos/polonio.html";break;
	    }
	});
}

var btnHalo = document.getElementsByClassName("halogenos"); // botones de la clase halogenos

for (var i = 0; i < btnHalo.length; i++) {
	btnHalo[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "F":window.location.href = "elementos/fluor.html";break;
	    	case "CL":window.location.href = "elementos/cloro.html";break;
	    	case "BR":window.location.href = "elementos/bromo.html";break;
    		case "I":window.location.href = "elementos/yodo.html";break;
	    	case "AT":window.location.href = "elementos/astato.html";break;
	    }
	});
}

var btnOtrMet = document.getElementsByClassName("otros-metales"); // botones de la clase otros metales

for (var i = 0; i < btnOtrMet.length; i++) {
	btnOtrMet[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "AL":window.location.href = "elementos/aluminio.html";break;
	    	case "GA":window.location.href = "elementos/galio.html";break;
	    	case "IN":window.location.href = "elementos/indio.html";break;
    		case "SN":window.location.href = "elementos/estaño.html";break;
	    	case "TL":window.location.href = "elementos/talio.html";break;
	    	case "PB":window.location.href = "elementos/plomo.html";break;
	    	case "BI":window.location.href = "elementos/bismuto.html";break;
	    }
	});
}

var btnNeutro = document.getElementsByClassName("neutro"); // botones de la clase neutros

for (var i = 0; i < btnNeutro.length; i++) {
	btnNeutro[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "MT":window.location.href = "elementos/meitnerio.html";break;
	    	case "DS":window.location.href = "elementos/darmstatio.html";break;
	    	case "RG":window.location.href = "elementos/roentgenio.html";break;
    		case "CN":window.location.href = "elementos/copernicio.html";break;
	    	case "NH":window.location.href = "elementos/nihonio.html";break;
	    	case "FL":window.location.href = "elementos/flerovio.html";break;
	    	case "MC":window.location.href = "elementos/moscovio.html";break;
	    	case "LV":window.location.href = "elementos/livermorio.html";break;
	    	case "TS":window.location.href = "elementos/teneso.html";break;
	    	case "OG":window.location.href = "elementos/oganeson.html";break;
	    }
	});
}

var btnLan = document.getElementsByClassName("lantanidos"); // botones de la clase lantanidos

for (var i = 0; i < btnLan.length; i++) {
	btnLan[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "LA":window.location.href = "elementos/lantanido.html";break;
	    	case "CE":window.location.href = "elementos/cerio.html";break;
	    	case "PR":window.location.href = "elementos/praseodimio.html";break;
    		case "ND":window.location.href = "elementos/neodimio.html";break;
	    	case "PM":window.location.href = "elementos/prometio.html";break;
	    	case "SM":window.location.href = "elementos/samario.html";break;
	    	case "EU":window.location.href = "elementos/europio.html";break;
	    	case "GD":window.location.href = "elementos/gadolinio.html";break;
	    	case "TB":window.location.href = "elementos/terbio.html";break;
	    	case "DY":window.location.href = "elementos/disprosio.html";break;
	    	case "HO":window.location.href = "elementos/holmio.html";break;
	    	case "ER":window.location.href = "elementos/erbio.html";break;
	    	case "TM":window.location.href = "elementos/tulio.html";break;
	    	case "YB":window.location.href = "elementos/yterbio.html";break;
	    	case "LU":window.location.href = "elementos/lutecio.html";break;
	    }
	});
}

var btnAct = document.getElementsByClassName("actinidos"); // botones de la clase actinidos

for (var i = 0; i < btnAct.length; i++) {
	btnAct[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "AC":window.location.href = "elementos/actinido.html";break;
	    	case "TH":window.location.href = "elementos/torio.html";break;
    		case "PA":window.location.href = "elementos/protactino.html";break;
	    	case "U":window.location.href = "elementos/uranio.html";break;
	    	case "NP":window.location.href = "elementos/neptunio.html";break;
	    	case "PU":window.location.href = "elementos/plutonio.html";break;
	    	case "AM":window.location.href = "elementos/americio.html";break;
	    	case "CM":window.location.href = "elementos/curio.html";break;
	    	case "BK":window.location.href = "elementos/berkelio.html";break;
	    	case "CF":window.location.href = "elementos/californio.html";break;
	    	case "ES":window.location.href = "elementos/einstenio.html";break;
	    	case "FM":window.location.href = "elementos/fermio.html";break;
	    	case "MD":window.location.href = "elementos/mendelevio.html";break;
	    	case "NO":window.location.href = "elementos/nobelio.html";break;
	    	case "LR":window.location.href = "elementos/laurencio.html";break;
	    }
	});
}

var btnMetTra = document.getElementsByClassName("metales-trancision"); // botones de la clase metales de trancision

for (var i = 0; i < btnMetTra.length; i++) {
	btnMetTra[i].addEventListener("click", function() {
	    switch(this.textContent){
	    	case "SC":window.location.href = "elementos/escandio.html";break;
	    	case "TI":window.location.href = "elementos/titanio.html";break;
    		case "V":window.location.href = "elementos/vanadio.html";break;
	    	case "CR":window.location.href = "elementos/cromo.html";break;
	    	case "MN":window.location.href = "elementos/manganeso.html";break;
	    	case "FE":window.location.href = "elementos/hierro.html";break;
	    	case "CO":window.location.href = "elementos/cobalto.html";break;
	    	case "NI":window.location.href = "elementos/niquel.html";break;
	    	case "CU":window.location.href = "elementos/cobre.html";break;
	    	case "ZN":window.location.href = "elementos/zinc.html";break;
	    	case "Y":window.location.href = "elementos/itrio.html";break;
	    	case "ZR":window.location.href = "elementos/zirconio.html";break;
	    	case "NB":window.location.href = "elementos/niobio.html";break;
	    	case "MO":window.location.href = "elementos/molibdeno.html";break;
	    	case "TC":window.location.href = "elementos/tecnesio.html";break;
	    	case "RU":window.location.href = "elementos/rutenio.html";break;
	    	case "RH":window.location.href = "elementos/rodio.html";break;
    		case "PD":window.location.href = "elementos/paladio.html";break;
	    	case "AG":window.location.href = "elementos/plata.html";break;
	    	case "CD":window.location.href = "elementos/cadmio.html";break;
	    	case "HF":window.location.href = "elementos/hafnio.html";break;
	    	case "TA":window.location.href = "elementos/tantalo.html";break;
	    	case "W":window.location.href = "elementos/wolframio.html";break;
	    	case "RE":window.location.href = "elementos/renio.html";break;
	    	case "OS":window.location.href = "elementos/osmio.html";break;
	    	case "IR":window.location.href = "elementos/iridio.html";break;
	    	case "PT":window.location.href = "elementos/platino.html";break;
	    	case "AU":window.location.href = "elementos/oro.html";break;
	    	case "HG":window.location.href = "elementos/mercurio.html";break;
	    	case "RF":window.location.href = "elementos/rutherfordio.html";break;
	    	case "DB":window.location.href = "elementos/dubnio.html";break;
	    	case "SG":window.location.href = "elementos/seaborgio.html";break;
	    	case "BH":window.location.href = "elementos/bohrio.html";break;
	    	case "HS":window.location.href = "elementos/hasio.html";break;
	    }
	});
}