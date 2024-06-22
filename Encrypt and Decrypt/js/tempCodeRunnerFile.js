
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