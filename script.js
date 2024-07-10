const boxGrid = document.querySelector("#boxes")
const body = document.querySelector("body")
const allBox = document.querySelectorAll(".box")

function createDiv(){
    let div = document.createElement("div")
    div.className = "box"
    
    div.style.height = '0'
    div.style.width = '5.7%'
    div.style.paddingBottom = '5.7%'
    div.style.backgroundColor = '#84c7e3'
    div.style.border = '1px solid black'

    return div

}

function createGrid(){
    let boxArray = []
    for(let i = 0;i<256;i++){

        boxArray.push(createDiv())
        boxGrid.appendChild(boxArray[i])

    }

}


createGrid()





