const getStoredData =()=>{
    const storedData = localStorage.getItem('readlist')
    if (storedData) {
        const dataParsed = JSON.parse(storedData)
        return dataParsed
    }
    return []
}

const addToStore = (id)=>{
    const storeBookData = getStoredData()
    if (storeBookData.includes(id)) {
        alert('This Book Is Already Exist')
    }else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData)
        localStorage.setItem('readlist',data)
    }
}

export {addToStore,getStoredData}