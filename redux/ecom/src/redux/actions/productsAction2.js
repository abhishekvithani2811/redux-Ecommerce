import { ActionTypes } from "../constants/actionType";
  
  export const setCartData = (cartData) => {
    return {
      type: ActionTypes.SET_CART_DATA,
      payload: cartData,
    };
  };
  export const getCartData = (getdata)=>{
    return{
      type:ActionTypes.GET_CART_DATA,
      payload:getdata,
    }
  }
  export function IncreaseQuantity(product) {
    return {
      type: ActionTypes.INCREASE_QUANTITY,
      payload:product,
    };
  }
  export function DecreaseQuantity(product) {
    return {
      type: ActionTypes.INCREASE_QUANTITY,
      payload:product,
    };
  }
  export const setProductData = (productData) => {
    return {
      type: ActionTypes.SET_PRODUCT_DATA,
      payload: productData,
    };
  };
  
  export const setError = (error) => {
    return {
      type: ActionTypes.SET_ERROR,
      payload: error,
    };
  };

  // ORDER DETAIL
  
  export const orderDetailAction = (order) => {
    console.log(order)
    return {
      type: ActionTypes.ORDER_DETAIL,
      payload: order,
    };

  };
// const dispatch=useDispatch()
// export const fetchCartData = () => {
//     const {id} =useParams();
//     return async () => {
//       try {
//         const response = await axios.get(`https://fakestoreapi.com/carts/${id}`);
//         dispatch(setCartData(response.data));
  
//         const productIds = response.data.products.map((product) => product.productId);
//         const productsResponse = await axios.get('https://fakestoreapi.com/products');
//         const filteredProducts = productsResponse.data.filter((product) =>
//           productIds.includes(product.id)
//         );
//         dispatch(setProductData(filteredProducts));
//       } catch (error) {
//         console.log('Error fetching data:', error);
//         dispatch(setError(error.message));
//       }
//     };
//   };
  
// export default fetchCartData