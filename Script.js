const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}

function saida(){
  form.style.left = "-300%"
  form.style.transform = "translateX(0%)"
  mascara.style.visibility = "hidden"
}
