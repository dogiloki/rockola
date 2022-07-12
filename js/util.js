class Util{

	static modal(content,visible=-1){
		content.style.display=(visible==-1)?
							((content.style.display=="none")?"":"none"):
							(visible)?"":"none";
	}

	static abecedario="012345679abcdefghijklmnñopqrstuvwxyz";

	static palabraMayor(palabra1="",palabra2=""){
		palabra1=palabra1??"".toLowerCase();
		palabra2=palabra2??"".toLowerCase();
		let abc=Util.abecedario;
		let mayor=true;
		let num1, num2, logitud=(palabra1.length>palabra2.length)?palabra1.length:palabra2.length;
		for(let a=0; a<logitud; a++){
			num1=(a<palabra1.length)?Util.letraNumero(palabra1[a]):-1;
			num2=(a<palabra2.length)?Util.letraNumero(palabra2[a]):-1;
			mayor=(num1>num2);
			if(num1!=num2){
				a=logitud;
			}
		}
		return mayor;
	}

	static letraNumero(letra){
		let abc=Util.abecedario;
		for(let a=0; a<abc.length; a++){
			if(abc[a]==letra){
				return a;
			}
		}
		return -1;
	}

	static converSegundo(total){
		total=Math.floor(total);
		let minutos=(Math.floor(total/60)).toString();
		minutos=(minutos.length<=1?"0":"")+minutos;
		let segundos=(total%60).toString();
		segundos=(segundos.length<=1?"0":"")+segundos;
		return minutos+":"+segundos;
	}

	static btn={
		play:"▶",
		pause:"⏸"
	};

	static creditos=3;
	
}