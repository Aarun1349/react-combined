const increment =(type,payload)=>{
    return{type:"INCREMENT",payload:1}
}

const decrement =(type,payload)=>{
    return{type:"DECREMENT",payload:1}
}

export {decrement,increment}