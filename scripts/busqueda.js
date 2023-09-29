var search = document.getElementById("buscar");

const urls = [
	// no-metales
	"hidrogeno.html","carbono.html","nitrogeno.html","oxigeno.html","fosforo.html","asufre.html","selenio.html",
	// gases-nobles
	"helio.html","neon.html","argon.html","kripton.html","xenon.html","argon.html",
	// alcalinos
	"litio.html","sodio.html","potasio.html","rubidio.html","cesio.html","francio.html",
	//alcalinoterreos
	"berilio.html","magnesio.html","calcio.html","estroncio.html","bario.html","radio.html",
	//metaolides
	"boro.html","silicio.html","germanio.html","arsenico.html","antimonio.html","telurio.html","polonio.html",
	//halogenos
	"fluor.html","cloro.html","bromo.html","yodo.html","astato.html",
	//otros metales
	"aluminio.html","galio.html","indio.html","estaño.html","talio.html","plomo.html","bismuto.html",
	//neutros
	"meitnerio.html","darmstatio.html","roentgenio.html","copernicio.html","nihonio.html","flerovio.html","moscovio.html",
	"livermorio.html","teneso.html","oganeson.html",
	//lantanidos
	"lantanido.html","cerio.html","praseodimio.html","neodimio.html","prometio.html","samario.html","europio.html",
	"gadolinio.html","terbio.html","disprosio.html","holmio.html","erbio.html","tulio.html","yterbio.html","lutecio.html",
	//actinidos
	"actinido.html","torio.html","protactino.html","uranio.html","neptunio.html","plutonio.html","americio.html","curio.html",
	"berkelio.html","californio.html","einstenio.html","fermio.html","mendelevio.html","nobelio.html","laurencio.html",
	//metales de trancision
	"escandio.html","titanio.html","vanadio.html","cromo.html","manganeso.html","hierro.html","cobalto.html","niquel.html",
	"cobre.html","zinc.html","itrio.html","zirconio.html","niobio.html","molibdeno.html","tecnesio.html","rutenio.html",
	"rodio.html","paladio.html","plata.html","cadmio.html","hafnio.html","tantalo.html","wolframio.html","renio.html",
	"osmio.html","iridio.html","platino.html","oro.html","mercurio.html","rutherfordio.html","dubnio.html",
	"seaborgio.html","bohrio.html","hasio.html"
];

function buscar(){
	var titulo = document.title;
	const busqueda = (search.value+".html").toLowerCase();
	if(urlvalidas(busqueda)){
		if(titulo==="Elementos"){
			window.location.href = "elementos/"+busqueda;
		} else {
			window.location.href = busqueda;
		}
	} else {
		alert("La pagina a la que desea entrar no existe");
	}
}

search.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    	buscar();
    }
});

function urlvalidas(busqueda){
	for (var i = 0; i < urls.length; i++) {
		if(busqueda===urls[i]){
			return true;
			break;
		}
	}
}



