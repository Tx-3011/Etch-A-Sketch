const boxGrid = document.querySelector("#boxes")
const body = document.querySelector("body")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const red = document.querySelector("#red")
const blue = document.querySelector("#blue")
const black = document.querySelector("#black")

let initialBoxSize = '3.125rem'
let initialBoxes=256

let hoverColor = "#2D2A32"

red.addEventListener('click',()=>{
    hoverColor = "red"
})

blue.addEventListener('click',()=>{
    hoverColor = "skyblue"
})

black.addEventListener('click',()=>{
    hoverColor = "#2D2A32"
})




function createDiv(boxSize){
    let div = document.createElement("div")
    div.className = "box"
    
    div.style.height = boxSize
    div.style.width = boxSize
    div.style.backgroundColor = 'whitesmoke'
    // div.style.border= '1px solid black'

    return div

}



function createGrid(totalBoxes,boxSize){
    let boxArray = []
    for(let i = 0;i<totalBoxes;i++){

        boxArray.push(createDiv(boxSize))
        boxGrid.appendChild(boxArray[i])

    }

}

createGrid(initialBoxes,initialBoxSize)


function hoverEffect(){
    const allBox = document.querySelectorAll(".box")
    allBox.forEach((box)=>{
    box.addEventListener('mouseover',function(){
        this.style.backgroundColor = hoverColor
    })
})
}


function DeleteAllBoxes(){
    const allBox = document.querySelectorAll(".box");
    allBox.forEach((box)=>{
        boxGrid.removeChild(box)
    })
    
}

submit.addEventListener('click',()=>{

    if(input.value>100 || input.value<0){
        alert("Please enter a positive value below 100")
        return
    }

    DeleteAllBoxes()

    noOfBoxes = Math.pow(input.value,2) 
    let size = `${50/Math.sqrt(noOfBoxes)}rem`
    
    createGrid(noOfBoxes,size)
    hoverEffect()


})

hoverEffect()




