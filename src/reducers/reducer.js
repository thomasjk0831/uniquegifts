export const initialState = {
    items: [],
    cart: [],
    total: 0,
    isLoggedIn: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload
            }
        case "ADD_CART":
            //temp array to see if that item is already in the cart
            //if not, then create new key name quantity and set to 1
            //if yes, then just update quanitity of that item by 1.
            const temp = state.cart.filter(item => item.id == action.payload.id)
            if (temp.length === 0) {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    total: state.total + action.payload.price
                }
            }
            else {
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        if (item.id === action.payload.id)
                            return { ...item, quantity: ++item.quantity }
                        else
                            return item
                    }),
                    total: state.total + action.payload.price
                }
            }
        case "REMOVE_CART":
            //array to see how many of that particular item is in the cart

            return {
                ...state,
                cart: state.cart.filter(item => {
                    if (item.id === action.payload.id)
                        return
                    else
                        return item
                }),
                total: state.total - action.payload.price * action.payload.quantity
            }
        case "LOG_IN":
            return {
                ...state,
                isLoggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                isLoggedIn: false
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
                total: 0
            }
        default: return state;
    }
}