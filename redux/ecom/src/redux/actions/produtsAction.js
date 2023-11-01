import { ActionTypes } from "../constants/actionType";

export const setProducts = (produts) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload:produts,
    };
    // console.log("produts",produts)
}   

export const selectedProducts = (produts) => {
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload:produts
    };
}