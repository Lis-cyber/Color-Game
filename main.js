const $h1 = document.querySelector("h1")
const $mode = document.querySelectorAll(".mode")
const $easy = document.querySelector("#easy")
const $medium = document.querySelector("#medium")
const $hard = document.querySelector("#hard")
const $cuadros = document.querySelectorAll(".square")
const $mensaje = document.getElementById("message")
const $botonReset = document.querySelector("#reset")
const $colorDisplay = document.getElementById("colorDisplay")

let numCuadros = 9
let colors = generateRandomColors(numCuadros)
let pickedColor 

init();
function init(){
	setupCuadros();
	reset();
}
// ----------------------------------------------------------------

function setupCuadros(){
    for (let i = 0; i < $cuadros.length; i++) {
        $cuadros[i].style.backgroundColor = colors[i]
        $cuadros[i].addEventListener("click", function(){ 
            const clickedColor = this.style.backgroundColor
            if (clickedColor===pickedColor){
                $mensaje.textContent = "Congrats!"
                $botonReset.textContent = "Play Again?"
                $h1.style.backgroundColor = pickedColor

                changeColors(pickedColor)
            } else {
                this.style.backgroundColor = "#d4fff1"
                $mensaje.textContent = "Try Again"
            }
        })  
    }

    for(let i = 0; i < $mode.length; i++){
        $mode[i].addEventListener("click", function(){
            $mode[0].classList.remove("selected")
            $mode[1].classList.remove("selected")
            $mode[2].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "EASY" ? numCuadros = 3 :
            this.textContent === "MEDIUM" ? numCuadros = 6 : numCuadros = 9;
            reset();
        })
    }
}
// ----------------------------------------------------------------

// Parte 10, 11
function randomColor(){
    let max = 256 //(+ 1 porque va desde 0)
    let r = Math.floor((Math.random() * max))
    let g = Math.floor((Math.random() * max))
    let b = Math.floor((Math.random() * max))
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
function generateRandomColors(num){
    let arr = []
    for (let i = 0; i < num; i++) {
    arr[i] = randomColor()
    }
    return arr
}
// ----------------------------------------------------------------
//PARTE 12
function reset() {
    colors = generateRandomColors(numCuadros);
    pickedColor = pickColor();
    $colorDisplay.textContent = pickedColor;
    $botonReset.textContent = "New Colors"  
    $mensaje.textContent = "" 
    $h1.style.backgroundColor = "";
    for (let i = 0; i < $cuadros.length; i++) {
        if (colors[i]){
            $cuadros[i].style.backgroundColor = colors[i]
            $cuadros[i].style.display = "block" 
            } else {
            $cuadros[i].style.display = "none" 
            }
    }
}
$botonReset.addEventListener("click", function () {
    reset();
})
// ----------------------------------------------------------------
function changeColors(color){
    $cuadros.forEach(function(cuadro){
        cuadro.style.backgroundColor = color
    })
}
function pickColor(){
    const numRandom = Math.floor((Math.random() * colors.length))
    return colors[numRandom]
}