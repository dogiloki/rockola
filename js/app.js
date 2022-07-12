var template_banda=document.getElementById("template-banda").content;
var template_cancion=document.getElementById("template-cancion").content;
var content_bandas=document.getElementById("content-bandas");
var content_canciones=document.getElementById('content-canciones');
var btn_sig=document.getElementById('btn-siguiente');
var btn_ante=document.getElementById('btn-anterior');
var btn_reproducir=document.getElementById('btn-reproducir');
var audio=document.getElementById('audio');
var progreso=document.getElementById('progreso');
var duracion_actual=document.getElementById('duracion-actual');
var duracion_total=document.getElementById('duracion-total');
var volumen=document.getElementById('volumen');
var intervalo_audio;
var rockola=new Rockola();

btn_ante.addEventListener("click",()=>{
	let cantidad=Object.keys(this.rockola.bandas).length;
	let aumento_deg=360/cantidad;
	let deg;
	document.getElementsByName("banda").forEach((banda)=>{
		deg=Number(banda.style.transform.replaceAll("rotateY(","").replaceAll("deg) translateZ("+250+"px)",""));
		if(deg<=360-aumento_deg){
			deg+=aumento_deg;
		}else{
			deg=aumento_deg;
		}
		banda.setAttribute("style","transform: rotateY("+(deg)+"deg) translateZ("+250+"px);");
	});
});
btn_sig.addEventListener("click",()=>{
	let cantidad=Object.keys(this.rockola.bandas).length;
	let aumento_deg=360/cantidad;
	let deg;
	document.getElementsByName("banda").forEach((banda)=>{
		deg=Number(banda.style.transform.replaceAll("rotateY(","").replaceAll("deg) translateZ("+250+"px)",""));
		if(deg>aumento_deg){
			deg-=aumento_deg;
		}else{
			deg=360;
		}
		banda.setAttribute("style","transform: rotateY("+(deg)+"deg) translateZ("+250+"px);");
	});
});
btn_reproducir.addEventListener("click",()=>{
	reproducir();
});
volumen.addEventListener("change",()=>{
	this.audio.volume=volumen.value/100;
	volumen.setAttribute("title",volumen.value+"%");
});

cargarBandas();
function cargarBandas(){
	let conta=0;
	let cantidad=Object.keys(this.rockola.bandas).length;
	let aumento_deg=360/cantidad;
	let deg=aumento_deg;
	for(let banda of this.rockola.bandas){
		this.template_banda.getElementById("portada").src=banda.portada;
		this.template_banda.getElementById("nombre").innerHTML=banda.nombre;
		this.template_banda.getElementById("genero").innerHTML=banda.genero;
		let figure=this.template_banda.getElementById("content-img");
		figure.setAttribute("name","banda");
		figure.setAttribute("style","transform: rotateY("+(deg)+"deg) translateZ("+250+"px);");
		figure.setAttribute("onclick","cargarCanciones('"+banda.nombre+"')");
		this.content_bandas.appendChild(this.template_banda.cloneNode(true));
		conta++;
		deg+=aumento_deg;
	}
}

function cargarCanciones(nombre){
	let canciones=this.rockola.obtenerBanda(nombre).sort((a,b)=>{
		return Util.palabraMayor(a.album.nombre>b.album.nombre)?-1:!Util.palabraMayor(a.album.nombre,b.album.nombre)?1:0;
	});
	this.content_canciones.innerHTML="";
	canciones.forEach((cancion)=>{
		let content_cancion=this.template_cancion.cloneNode(true);
		let btn_add_list=content_cancion.getElementById('btn-add-list');
		let btn_reproducir=content_cancion.getElementById('btn-reproducir');
		let titulo=content_cancion.getElementById('titulo');
		titulo.innerHTML=cancion.titulo;
		btn_reproducir.addEventListener("click",()=>{
			this.audio.src=cancion.audio;
			this.audio.currentTime=0;
			this.reproducir(true);
		});
		this.rockola.cancion=cancion;
		this.content_canciones.appendChild(content_cancion);
	});
}

function reproducir(play=null){
	if(this.audio.src==""){
		return;
	}
	if(play==null){
		if(this.audio.paused){
			this.btn_reproducir.innerHTML=Util.btn.pause;
			this.btn_reproducir.setAttribute("title","Pausar");
			this.reproductor();
			this.audio.play();
		}else{
			this.btn_reproducir.innerHTML=Util.btn.play;
			this.btn_reproducir.setAttribute("title","Reproducir");
			this.audio.pause();
			clearTimeout(this.intervalo_audio);
		}
	}else{
		if(play){
			this.btn_reproducir.innerHTML=Util.btn.pause;
			this.btn_reproducir.setAttribute("title","Pausar");
			this.reproductor();
			this.audio.play();
		}else{
			this.btn_reproducir.innerHTML=Util.btn.play;
			this.btn_reproducir.setAttribute("title","Reproducir");
			this.audio.pause();
			clearTimeout(this.intervalo_audio);
		}
	}
}

function reproductor(){
	this.intervalo_audio=setInterval(()=>{
		//console.log(this.audio.currentTime);
		this.duracion_total.innerHTML=Util.converSegundo(this.audio.duration);
		this.duracion_actual.innerHTML=Util.converSegundo(this.audio.currentTime);
		this.progreso.value=(this.audio.currentTime*100)/this.audio.duration;
		if(this.audio.currentTime>=this.audio.duration){
			clearTimeout(this.intervalo_audio);
			reproducir(false);
		}
	},1000);
}