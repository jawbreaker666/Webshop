//Add Item
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product,
        
    }
}

//Delete Item
export const deleteCart = (product) => {
    return{
        type: "DELETEITEM",
        payload: product,
        
    }
}