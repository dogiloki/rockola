class Datos{

	constructor(){
		let ruta="E:/Música/";
		let assets="assets/";
		this.bandas={
			metallica:new Banda("Metallica",[
				"Lars Ulrich",
				"James Hetfield",
				"Kirk Hammett",
				"Robert Trujillo"
			],"Metal",1980),
			eisbrecher:new Banda("Eisbrecher",[
				"Alexander Wesselsky",
				"Jochen Seibert",
				"Jürgen Plangger",
				"Achim Färber",
				"Rupert Keplinger"
			],"Metal Insdustrial",2003),
			epica:new Banda("Epica",[
				"Simone Simonz",
				"Mark Janse",
				"Coen Janssen",
				"Issac Delahaye",
				"Ariën van Veesenbeek",
				"Rob van der Loop"
			],"Metal Sinfónico",2022),
			linderman:new Banda("Linderman",[
				"Til Linderman",
				"Peter Tägtgren"
			],"Metal Insdustrial",2015)
		};
		this.album={
			metallica:[
				new Album("Death Magnetic","assets/metallica/"),
				new Album("Metallica","assets/metallica/"),
				new Album("St. Anger","assets/metallica/")
			],
			eisbrecher:[
				new Album("Sturmfahrt","assets/eisbrecher/")
			],
			epica:[
				new Album("Epica VS Attack on Titan Songs","assets/epica/")
			],
			linderman:[
				new Album("Skills in Pills","assets/linderman/")
			]
		}
		this.canciones=[
			new Cancion(null,ruta+"All Nightmare Long.m4a","All Nightmare Long",this.bandas.metallica,this.album.metallica[0]),
			new Cancion(null,ruta+"Enter sandman.mp3","Enter sandman",this.bandas.metallica,this.album.metallica[1]),
			new Cancion(null,ruta+"Frantic.mp3","Frantic",this.bandas.metallica,this.album.metallica[2]),
			new Cancion(null,ruta+"Das Gesetz.m4a","Das Gesetz",this.bandas.eisbrecher,this.album.eisbrecher[0]),
			new Cancion(null,ruta+"Crimson Bow and Arrow.mp3","Crimson Bow and Arrow",this.bandas.epica,this.album.epica[0]),
			new Cancion(null,ruta+"Fish On.m4a","Fish On",this.bandas.linderman,this.album.linderman[0])
		];
	}

	obtener(){
		return this.canciones;
	}

}