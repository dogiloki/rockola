class Rockola{

	constructor(){
		this.creditos=0;
		let datos=new Datos().obtener();
		this.canciones=datos.canciones;
		this.bandas=datos.bandas;
		// Convertir JSON en iterable
		this.bandas[Symbol.iterator]=function(){
			let indice=0;
			let valores=Object.values(this); // Convertir en un array los valores de un objeto
			return {
				next(){ // Cada iteración llamara al método next()
					if(indice>=valores.length){
						return{ 
							done: true,
							value: undefined
						};
					}
					return {
						done: false,
						value: valores[indice++]
					};
				}
			}
		};
		// Almaneca la cación seleccionada (hace referencia al objeto de la lista de canciones)
		this.cancion=this.canciones[0];
	}

	agregar(cancion){
		this.canciones.push(cancion);
	}

	obtenerBanda(banda){
		return this.canciones.filter((cancion)=>{
			return cancion.banda.nombre==banda;
		});
	}

	obtenerCancion(){
		return this.cancion;
	}

	ponerMoneda(){
		this.creditos=5;
	}

	reproducir(){
		this.cancion.obj.currentTime=0;
		this.cancion.obj.play();
	}

	pausar(){
		this.cancion.obj.pause();
	}

}