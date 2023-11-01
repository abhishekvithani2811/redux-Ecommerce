import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectedProducts } from '../redux/actions/produtsAction'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/ApiInstance'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCartData } from '../redux/actions/productsAction2'
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
const OrderDetail = () => {
    const Razorpay = useRazorpay();

    const handlePayment = async (value) => {
        console.log(value);
        const orderData = {
          amount: value * 100,
          currency: "INR",
          paymentMethod: "ONLINE",
        };
        try {
          const order = await axiosInstance.post("/order", orderData); //  Create order on your backend
          const options = {
            key: "rzp_test_Ls1Ugr8RHpdrw2", // Enter the Key ID generated from the Dashboard
            amount: value * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.data.paymentId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
            },
            prefill: {
              name: "abhishek",
              email: "abhishek@example.com",
              contact: "123445678",
            },
            notes: {
              address: "surat",
            },
            theme: {
              color: "#3399cc",
            },
          };
          
          const rzp1 = new Razorpay(options);
    
          rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          });
    
          rzp1.open();
        } catch (error) {
          console.error(error);
        }
      };
    // 
    const detail = useSelector((state) => state.cartReducer.order_detail_reducer)
    const product = useSelector((state) => state.cartReducer.cartData)
    console.log(detail)
    // console.log(useSelector((state) => state.cartReducer.order_detail_reducer))
    const Fetchdetail = async () => {
        await axiosInstance
            .get(`/myProfile`)
            .then(response => console.log(response))
            .catch((error) => {
                console.log("err", error);
            })
    }
    useEffect(() => {
        Fetchdetail();
    }, [])
    const calculateTotalCart = (items) => {
        if (!Array.isArray(items)) {
            return 0;
        }
        let total = 0;
        items.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total;
    };
    return (
        <div>
            <div className='flex flex-col justify-end items-center mt-10 my-10 bg-emerald-200  text-3xl'>ORDER DETAIL</div>
            
            <div class="max-w-sm p-6 font-serif text-2xl mt-2 ml-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700 ">
                <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                </svg>
                <div> Address:
                    <h3 class="inline-flex items-centertext-gray-900 dark:text-white">
                        {detail.address}
                    </h3>
                </div>
                <div> City:
                    <h3 class="inline-flex items-centertext-gray-900 dark:text-white">
                        {detail.city}
                    </h3>
                </div>
                <div> Country:
                    <h3 class="inline-flex items-centertext-gray-900 dark:text-white">
                        {detail.country}
                    </h3>
                </div>
                Zip Code:

                <h2 href="#" class="inline-flex items-centertext-gray-900 dark:text-white">
                    {detail.zipCode}
                </h2>

                <div> Phone Number:
                    <h3 class="inline-flex items-centertext-gray-900 dark:text-white">
                        {detail.phonenum}
                    </h3>
                </div>
            </div>
            {product && product?.length && product?.map(item => {
                return (
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                            <img class="w-full" src={item.productimage} alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{item.name} : ${item.price}</div>
                                <div class="font-bold text-xl mb-2"></div>
                                <div class="font-bold text-xl mb-2">Quantity:{item.quantity}</div>
                                <div class="font-bold text-xl mb-2">Total Price: ${item.quantity * item.price}</div>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='flex flex-col justify-center items-center mt-10 my-10 bg-emerald-300  text-3xl'>
                <button onClick={()=>{handlePayment()}}>TOTAL : ${calculateTotalCart(product)}</button></div>
        </div>

    )
}
export default OrderDetail