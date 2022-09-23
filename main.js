

// todays Project is a basic calculator.
//We need buttons with numbers from 0 to 1, 4 operator buttons, an equals button
//functions that write the button values in a variable
// figure out a way to convert a string to a number
// calculate it on click
// // // //  const quantity="12"
// // // //  console.log(quantity)
// // // //  Number(quantity)
// // // //  console.log(Number(quantity))



// let result= document.getElementById("Ergebnis")
// result="0"
// console.log(result)
let gatheringResult=""
let gathering = ""

function one(){

    gathering = gathering + "1"
    console.log(gathering)
    Ergebnis.textContent=gathering 
        
}
function two(){

    gathering = gathering + "2"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function three(){

    gathering = gathering + "3"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function four(){

    gathering = gathering + "4"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function five(){

    gathering = gathering + "5"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function six(){

    gathering = gathering + "6"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function seven(){

    gathering = gathering + "7"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function eight(){

    gathering = gathering + "8"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function nine(){

    gathering = gathering + "9"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function zero(){

    gathering = gathering + "0"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function add(){

    gathering = gathering + "+"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function sub(){

    gathering = gathering + "-"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function mult(){

    gathering = gathering + "*"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function divide(){

    gathering = gathering + "/"
    console.log(gathering)
    Ergebnis.textContent=gathering 
}
function is(){
    gatheringResult=eval(gathering)
    gathering = gathering + "=" + gatheringResult
    console.log(gatheringResult)
    Ergebnis.textContent=gathering
    gatheringResult=0
    gathering=""
    
}
function clean(){
    gathering=""
    gatheringResult=0
    Ergebnis.textContent=0
     
}