import { actionTypes } from "../actions/actionTypes"

const initialState = {
    products: [],
    categories: [],
    isLoading: true, 
}
export const productReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        // statement product
        case actionTypes.FETCH_PRDOUCTS: 
        return{ ...state, products: payload, isLoading: false}
        case actionTypes.FETCH_CATEGOIES:
        return{...state, categories: payload}
        default:
            return state
    }
}