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

	obtenerBanda(banda){
		return this.canciones.filter((cancion)=>{
			return cancion.banda.nombre==banda;
		});
	}

	obtenerAlbum(banda,album){
		return banda.filter((cancion)=>{
			return cancion.banda==banda && cancion.album==album;
		});
	}

	obtenerGenero(nombre){
		return this.canciones.filter((cancion)=>{
			return cancion.banda.genero==nombre;
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