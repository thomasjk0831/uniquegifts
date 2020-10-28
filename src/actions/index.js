export const getItems = (item) => {
    return {
        type: "GET_ITEMS",
        payload: item
    }
}

export const addCart = (item) => {
    return {
        type: "ADD_CART",
        payload : item
    }
}

export const removeCart = (item) => {
    return {
        type: "REMOVE_CART",
        payload: item
    }
}