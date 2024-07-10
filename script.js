const boxGrid = document.querySelector("#boxes")
const body = document.querySelector("body")


function createDiv(){
    let div = document.createElement("div")
    div.className = "box"
    
    div.style.height = '3.125rem'
    div.style.width = '3.125rem'
    // div.style.backgroundColor = '#84c7e3'
    // div.style.border= '1px solid black'

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

const allBox = document.querySelectorAll(".box")

allBox.forEach((box)=>{
    box.addEventListener('mouseover',function(){
        this.style.backgroundColor = "red"
    })
})





