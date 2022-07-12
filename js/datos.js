class Datos{

	constructor(){
		let ruta="file:///E:/Música/";
		this.bandas={
			metallica:new Banda("Metallica",[
				"Lars Ulrich",
				"James Hetfield",
				"Kirk Hammett",
				"Robert Trujillo"
			],"Metal",1980,"assets/metallica/banda.jpg"),
			eisbrecher:new Banda("Eisbrecher",[
				"Alexander Wesselsky",
				"Jochen Seibert",
				"Jürgen Plangger",
				"Achim Färber",
				"Rupert Keplinger"
			],"Metal Insdustrial",2003,"assets/eisbrecher/banda.jpg"),
			epica:new Banda("Epica",[
				"Simone Simonz",
				"Mark Janse",
				"Coen Janssen",
				"Issac Delahaye",
				"Ariën van Veesenbeek",
				"Rob van der Loop"
			],"Metal Sinfónico",2022,"assets/epica/banda.jpg"),
			linderman:new Banda("Linderman",[
				"Til Linderman",
				"Peter Tägtgren"
			],"Metal Insdustrial",2015,"assets/linderman/banda.jpg")
		};
		this.album={
			metallica:[
				new Album("Death Magnetic","assets/metallica/death_magnetic.jpg"),
				new Album("Metallica","assets/metallica/metallica.jpg"),
				new Album("St. Anger","assets/metallica/st_anger.jpg")
			],
			eisbrecher:[
				new Album("Sturmfahrt","assets/eisbrecher/sturmfahrt.jpg")
			],
			epica:[
				new Album("Epica VS Attack on Titan Songs","assets/epica/epica_vs_attack_on_titan_songs.webp")
			],
			linderman:[
				new Album("Skills in Pills","assets/linderman/skills_in_pills.png")
			]
		}
		this.canciones=[
			new Cancion(null,ruta+"Metallica/All Nightmare Long.m4a","All Nightmare Long",this.bandas.metallica,this.album.metallica[0]),
			new Cancion(null,ruta+"Metallica/Enter sandman.mp3","Enter sandman",this.bandas.metallica,this.album.metallica[1]),
			new Cancion(null,ruta+"Metallica/Frantic.mp3","Frantic",this.bandas.metallica,this.album.metallica[2]),
			new Cancion(null,ruta+"Eisbrecher/Das Gesetz.m4a","Das Gesetz",this.bandas.eisbrecher,this.album.eisbrecher[0]),
			new Cancion(null,ruta+"Epica/Crimson Bow and Arrow.mp3","Crimson Bow and Arrow",this.bandas.epica,this.album.epica[0]),
			new Cancion(null,ruta+"Lindemann/Fish On.m4a","Fish On",this.bandas.linderman,this.album.linderman[0])
		];
	}

	obtener(){
		return {
			canciones: this.canciones,
			bandas: this.bandas
		};
	}

}