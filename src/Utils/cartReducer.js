export const initialState = {
    cartCount: 0,
};

export function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state, cartCount: state.cartCount + 1};
        case 'REMOVE_FROM_CART':
            return {...state, cartCount: state.cartCount - 1};
        case 'RESET_CART':
            return {...state, cartCount: 0};
        default:
            return state;
    }
}

