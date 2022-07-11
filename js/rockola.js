class Rockola{

	constructor(){
		this.creditos=0;
		this.canciones=new Datos().obtener();
		// Almaneca la cacion seleccionada (hace referencia al objeto de la lista de canciones)
		this.cancion=this.canciones[0];
	}

	agregar(cancion){
		this.canciones.push(cancion);
	}

	obtener(){
		function banda(nombre){
			return this.canciones.filter((cancion)=>{
				return cancion.banda.nombre==nombre;
			});
		}
		function album(nombre){
			return this.canciones.filter((cancion)=>{
				return cancion.album.nombre==nombre;
			});
		}
		function cancion(){
			return this.cancion;
		}
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