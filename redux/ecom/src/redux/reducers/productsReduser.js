import { ActionTypes } from "../constants/actionType";

const initialState = {
    products: [],
};
const produtsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, products:action.payload };
        default:
            return state;
    }
}
export default produtsReducer