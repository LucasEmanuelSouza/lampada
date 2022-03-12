const turnOn = document.getElementById("turnOn")//constante sobre desligar a lâmpada
const turnOff = document.getElementById("turnOff")//constante sobre ligar a lâmpada
const lamp = document.getElementById("lamp")//constante sobre o estado da lâmpada

function lampOn(){
    lamp.src = 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/ligada.jpg?raw=true'
} //função que troca a imagem da lãmpada desligada pela ligada 

function lampOff(){
    lamp.src = 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/desligada.jpg?raw=true'
} //função que troca a imagem da lãmpada ligada pela desligada 


function lampBroken(){
    lamp.src = 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/quebrada.jpg?raw=true'
} //função que troca a imagem da lâmpada pela quebrada

turnOn.addEventListener("click",lampOn) //evento criado para ligar a lampada no botao ligar
turnOff.addEventListener("click",lampOff) //evento criado para desligar a lampada no botao desligar
lamp.addEventListener("mouseover",lampOn) //evento criado para ligar a lampada ao passar o mouse em cima
lamp.addEventListener("mouseleave",lampOff) //evento criado para desligar a lampada quando tirar o mouse de cima da imagem
lamp.addEventListener("dblclick",lampBroken) //evento criado para quando clicar duas vezes na imagem a lampada quebrar
