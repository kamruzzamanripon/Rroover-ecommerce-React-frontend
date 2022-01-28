export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ALL_CART":
            return {...state, cart: [...action.payload], loading:false};

        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, {...action.payload}], loading:false};

        case "REMOVE_FROM_CART":
            // const matchingProductIndex = this.cart.findIndex((item) => {
            //     return item.id === action.payload.id;
            // });
            // this.cart.splice(matchingProductIndex,1);
            // return  {
            //     ...state, cart:[...state.cart]
            // }
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
                loading:false
            };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.quantity = action.payload.quantity) : c.quantity
                ),
                loading:false
            };
        default:
            return state;
    }

};
