const $cuadros = document.querySelectorAll(".square")
const $h1 = document.querySelector("h1")
const $mensaje = document.getElementById("message")
const $colorDisplay = document.getElementById("colorDisplay")
const $easy = document.querySelector("#easy")
const $hard = document.querySelector("#hard")
const $botonReset = document.querySelector("#reset")
const $mode = document.querySelectorAll(".mode")
let numCuadros = 6
let colors = generateRandomColors(numCuadros)
let pickedColor 

init();
function init(){
	setupCuadros();
	reset();
}
////////////////////////////////////////////////////////////
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
            this.classList.add("selected");
            this.textContent === "EASY" ? numCuadros = 3: numCuadros = 6;
            reset();
        })
    }
}
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
//////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////
function changeColors(color){
    $cuadros.forEach(function(cuadro){
        cuadro.style.backgroundColor = color
    })
}
function pickColor(){
    const numRandom = Math.floor((Math.random() * colors.length))
    return colors[numRandom]
}




//PARTE 13

// $easy.addEventListener("click", function(){
//     $easy.classList.add("selected")
//     $hard.classList.remove("selected")
//     numCuadros = 3
//     colors = generateRandomColors(numCuadros);
//     pickedColor = pickColor();
//     $colorDisplay.textContent = pickedColor
//     for(let i = 0; i < $cuadros.length; i++){
//         if (colors[i]){
//             $cuadros[i].style.backgroundColor = colors[i]
//         } else {
//             $cuadros[i].style.display = "none" 
//         }
//     }
//     $h1.style.backgroundColor = ""
// })

// $hard.addEventListener("click", function(){
//     $hard.classList.add("selected")
//     $easy.classList.remove("selected")
//     numCuadros = 6
//     colors = generateRandomColors(numCuadros);
//     pickedColor = pickColor();
//     $colorDisplay.textContent = pickedColor
//     for(let i = 0; i < $cuadros.length; i++){
//         $cuadros[i].style.backgroundColor = colors[i]
//         $cuadros[i].style.display = "block"  
//     }
//     $h1.style.backgroundColor = "rgb(70, 180, 134)"
// })

///////////////////////////////////////////////////////

// for (let i = 0; i < $cuadros.length; i++) {
//     $cuadros[i].style.backgroundColor = colors[i]
//     $cuadros[i].addEventListener("click", function(){ 
//         const clickedColor = this.style.backgroundColor
//         if (clickedColor===pickedColor){
//             $mensaje.textContent = "¡Congrats!"
//             $botonReset.textContent = "¿Play Again?"
//             changeColors(pickedColor)
//             $h1.style.backgroundColor = pickedColor
//         } else {
//             this.style.backgroundColor = "#d4fff1"
//             $mensaje.textContent = "Try Again"
//         }
//     })  
// }
/////////////////////////////////////////////////////
