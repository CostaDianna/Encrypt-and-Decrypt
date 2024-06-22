
    var textoInput = document.querySelector("#textoInput");
    var texto2 = document.querySelector("#texto2");

function encriptar() {
     var texto = document.getElementById("textoInput").value.toLowerCase();
   
    var textoEncriptado = texto.replace(/a/g, "ai")
                               .replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

document.getElementById("texto2").value = textoEncriptado;                            
document.getElementById("texto").innerHTML = textoEncriptado +'<button  id="copiar" onclick="copiar()">Copiar</button>';
      
}

function descriptar() {
    var texto = document.getElementById("textoInput").value.toLowerCase();
    
    var textoDescriptado = texto.replace(/ai/g, "a")
                                  .replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

   

                                  
    document.getElementById("texto2").value = textoDescriptado;
    document.getElementById("texto2").innerHTML =  textoDescriptado +'<button  id="copiar" onclick="copiar()">Copiar</button>';

}

function copiar() {
    var texto2 = document.getElementById("texto2");
    texto2.select();
    texto2.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
gsap.registerPlugin(MotionPathPlugin);
MorphSVGPlugin.convertToPath("circle, rect");
gsap.set("#paperPlaneRoute", { drawSVG: "0% 0%" });
gsap.set("#rectSentItems", { x: "-=240" });
const tl = gsap.timeline();

let ranOnce = false;

function onBtnUp() {
	if (ranOnce) {
		tl.restart();
		return;
	}
	ranOnce = true;
	tl.to("#base", { duration: 0.2, scale: 1, transformOrigin: "50% 50%" });
	tl.to(
		"#btnBase",
		{ duration: 0.77, morphSVG: "#cBottom", ease: "power1.inOut" },
		"start"
	);

	tl.to("#btnBase", { duration: 0.23, morphSVG: "#cTop", ease: "power1.inOut" });
	tl.to("#btnBase", {
		duration: 0.2,
		morphSVG: "#cCenter",
		ease: "power1.inOut"
	});
	tl.to(
		"#btnBase",
		{ duration: 0.5, morphSVG: "#cEnd", ease: "power1.inOut" },
		"revealStart"
	);
	tl.to("#rectSentItems", { x: "0", duration: 0.5 }, "revealStart");
	tl.to(
		"#mask1",
		{ x: "-=260", duration: 0.5, ease: "power1.inOut" },
		"revealStart"
	);
	tl.to(
		"#paperPlane",
		{ x: "-=205", duration: 0.5, ease: "power1.inOut" },
		"revealStart"
	);

}


