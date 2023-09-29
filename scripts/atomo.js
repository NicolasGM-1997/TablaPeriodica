// Limites Orbitales
let confAtom = "";
// llamamos el json
function procesarDatos(datos){
	// Obtener el elemento HTML donde deseas mostrar los datos
	var titulo = document.title;
	var pageTitle = "";
	// Iterar sobre los objetos en el JSON y crear elementos HTML para cada uno
	datos.forEach(obj => {
		const configuracionAtomica = document.getElementById("configuracion-atomica");
		if(titulo.charAt(titulo.length-3)=='('){
			pageTitle = titulo.slice(0,-6);
		} else {
			pageTitle = titulo.slice(0,-7);
		}
		if(obj.nombre==pageTitle){
			confAtom = obj.configuracion_atomica;
		}
	});
}

// solicitud tipo fetch para conectar el json
document.addEventListener("DOMContentLoaded", function () {
    fetch("elementos.json").then(response => response.json()).then(procesarDatos).then(()=>{
    	// Configura la escena y la cámara
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(250, 1, 1, 1000);

		// Crea un renderizador
		var renderer = new THREE.WebGLRenderer();
		var divAtomo = document.getElementById("atomo");
		renderer.setSize(300, 300);
		divAtomo.appendChild(renderer.domElement);

		// obtenemos la configuracion con el json
		var niveles = confAtom.split(" ");
		var atomosXnivel = [0,0,0,0,0,0,0];
		var nivelMaximo = 0;
		var j = -1;

		for(var i=0;i<niveles.length;i++){
			if (niveles[i].charAt(1) === 's') {
		        j++;
		        nivelMaximo++;
		    }
			switch(niveles[i].charAt(0)){
				case '1': case '2': case '3': case '4': case '5': case '6': case '7':
		            atomosXnivel[j] += parseInt(niveles[i].substring(2));
		            break;				
			}
		}
		// Crea una esfera para representar el núcleo del átomo (protón)
		var nucleusGeometry = new THREE.SphereGeometry(1.5, 30, 30);
		var nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCC33 });
		var nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
		scene.add(nucleus);

		// Crea una esfera más pequeña para representar el electrón
		var electrones = [];

		for (var i = 0; i < nivelMaximo; i++) {
			electrones[i] = [];
			for (var j = 0; j < atomosXnivel[i]; j++) {
				var electronGeometry = new THREE.SphereGeometry(0.2, 30, 30);
				var electronMaterial;
				switch(i){
					case 0: case 3: case 6:
						electronMaterial = new THREE.MeshBasicMaterial({ color: 0x1133EE});
						break;
					case 1: case 4:
						electronMaterial = new THREE.MeshBasicMaterial({ color: 0xEE1133});
						break;
					case 2: case 5:
						electronMaterial = new THREE.MeshBasicMaterial({ color: 0x33EE11});
						break;
				}
				var electron = new THREE.Mesh(electronGeometry, electronMaterial);
				electrones[i][j] = electron;
				scene.add(electrones[i][j]);
			}
		}

		// Coloca el electrón en una órbita alrededor del núcleo
		var orbitRadius = 3;
		var electronSpeed = 0.01;
		// Configura la cámara
		camera.position.z = 15;

		// Variables para el control de la cámara
		let isDragging = false;
		let previousMousePosition = {
		    x: 0,
		    y: 0
		};

		// Registra eventos de mouse en el contenedor
		divAtomo.addEventListener('mousedown', (event) => {
		    isDragging = true;
		    previousMousePosition = {
		        x: event.clientX,
		        y: event.clientY
		    };
		});

		divAtomo.addEventListener('mousemove', (event) => {
		    if (!isDragging) return;
		    const deltaMove = {
		        x: event.clientX - previousMousePosition.x,
		        y: event.clientY - previousMousePosition.y
		    };

		    // Ajusta la posición de la cámara en función del movimiento del mouse
		    camera.rotation.x += deltaMove.y * 0.01;
		    camera.rotation.y += deltaMove.x * 0.01;
		    camera.position.z += deltaMove.y * 0.2;

		    previousMousePosition = {
		        x: event.clientX,
		        y: event.clientY
		    };
		});

		divAtomo.addEventListener('mouseup', () => {
		    isDragging = false;
		});

		// Función de renderizado
		function animate() {
		    requestAnimationFrame(animate);
		    renderer.render(scene, camera);
		}
		// Función de animación
		var animate = function () {
		    requestAnimationFrame(animate);
		    
		    for (var i = 0; i < nivelMaximo; i++) {
				for (var j = 0; j < atomosXnivel[i]; j++) {
					var angle = electronSpeed + (Math.PI*2*j/atomosXnivel[i]);   
		            if (i % 3 === 0) {
		                electrones[i][j].position.x = Math.sin(angle) * orbitRadius * (1 + (i / 2));
		                electrones[i][j].position.y = Math.cos(angle) * orbitRadius * (1 + (i / 2));
		                if(i>3){
		                	electrones[i][j].position.z = Math.cos(angle) * orbitRadius;
		                } else {
		                	electrones[i][j].position.z = Math.cos(angle) * -orbitRadius;
		                }
		            } else if (i % 3 === 1) {
		                electrones[i][j].position.x = Math.sin(angle) * orbitRadius * (1 + (i / 2));
		                electrones[i][j].position.z = Math.cos(angle) * orbitRadius * (1 + (i / 2));
		                if(i>3){
		                	electrones[i][j].position.y = Math.cos(angle) * orbitRadius;
		                } else {
		                	electrones[i][j].position.y = Math.cos(angle) * -orbitRadius;
		                }		                
		            } else {
		                electrones[i][j].position.y = Math.sin(angle) * orbitRadius * (1 + (i / 2));
		                electrones[i][j].position.z = Math.cos(angle) * orbitRadius * (1 + (i / 2));
		                if(i>3){
		                	electrones[i][j].position.x = Math.sin(angle) * orbitRadius;
		                } else {
		                	electrones[i][j].position.x = Math.sin(angle) * -orbitRadius;
		                }		                
		            }
				}
			}
		    renderer.render(scene, camera);
		    electronSpeed+=0.01;
		};

		animate();
    }).catch(error => {
        console.error("Error al obtener el JSON:", error);
    });
});