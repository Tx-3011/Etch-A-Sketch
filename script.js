const boxGrid = document.querySelector("#boxes")
const body = document.querySelector("body")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")

let initialBoxSize = '3.125rem'
let initialBoxes=256


function createDiv(boxSize){
    let div = document.createElement("div")
    div.className = "box"
    
    div.style.height = boxSize
    div.style.width = boxSize
    div.style.backgroundColor = '#84c7e3'
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

const allBox = document.querySelectorAll(".box")


function hoverEffect(){
allBox.forEach((box)=>{
    box.addEventListener('mouseover',function(){
        this.style.backgroundColor = "red"
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




