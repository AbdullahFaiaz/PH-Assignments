
const getSaved = () =>{
    let seeSaved = localStorage.getItem("saved")
    if(seeSaved){
        return JSON.parse(seeSaved)
    }
    else{
        return []
    }
}

const saveId = id =>{
    let alreadySaved = getSaved()
    const exists = alreadySaved.find(itemId => itemId===id)
    if(!exists){
        alreadySaved.push(id)
        localStorage.setItem("saved",JSON.stringify(alreadySaved))
    }
}

const deleteId = id =>{
    let alreadySaved = getSaved()
    const afterDelete = alreadySaved.filter(itemId=> itemId !== id)
    localStorage.setItem("saved", JSON.stringify(afterDelete)
)
}

export {getSaved,saveId,deleteId}