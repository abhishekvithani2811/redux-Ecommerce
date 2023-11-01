import { ActionTypes } from "../constants/actionType";
const initialState = {
  cartData: [],
  productData: null,
  error: null,
  cartItems: [],
  getdata: [],
  order_detail_reducer: [],
};

// Reducer function to handle state updates
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CART_DATA:
      return {
        ...state,
        cartData: action.payload,
      };

    case ActionTypes.GET_CART_DATA:
      return {
        ...state,
        cartData: action.payload,
      };
    // increment
    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.productId === action.payload.productId) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        }),
      };
    // decrement
    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.productId === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    // case ActionTypes.:
    //   return {
    //     ...state,
    //     carts: state.carts.map((item) =>
    //       item.productId === action.payload && item.quantity > 1
    //         ? { ...item, quantity: item.quantity - 1 }
    //         : item
    //     ),
    //   };
    // 
    case ActionTypes.SET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };

    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    // order detail
    case ActionTypes.ORDER_DETAIL:
      return {
        ...state,
        order_detail_reducer: action.payload,
      }

    default:
      return state;
  }
};

export default reducer
// Create the Redux store
  // const store = createStore(reducer);
