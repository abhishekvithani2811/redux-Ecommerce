import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderDetailAction } from '../redux/actions/productsAction2'
import { axiosInstance } from '../utils/ApiInstance';
import { toast } from 'react-toastify';
const CheckOut = () => {
    const [credentials, setCredentials] = useState({
        phonenum: "",
        city: "",
        address: "",
        country: "",
        zipCode: "",
    });
    console.log(credentials)
    const navigate = useNavigate()
    const handleInputChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
        // console.log(credentials)
    };
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // fetch products
    // const product = useSelector((state) => state.cartReducer.cartData)
    // console.log(product)
    const OrderDetail = async () => {
        console.log(credentials)
        await axiosInstance
            .patch(`/details`, credentials)
            .then(response => dispatch(orderDetailAction(credentials)))
            // .then(response=>console.log((credentials)))
            .catch((error) => {
                console.log("err", error);
            })
        if (credentials) {
            toast.success('DATA SUBMIT !', {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        // console.log(response.data);
        // dispatch(orderDetailAction(response.data))
    }
    // useEffect(() => {
    //     OrderDetail()
    // }, [])

    return (
        <div className=' flex flex-col justify-center items-center mt-10'>
            <form class="w-full max-w-lg ">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Address
                        </label>
                        <input id='address' name='address' type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Address" onChange={handleInputChange} />
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            city
                        </label>
                        <input name='city' id='city' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="city" onChange={handleInputChange} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            country
                        </label>
                        <input name='country' id='country' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="country" onChange={handleInputChange} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            zipCode
                        </label>
                        <input id="zipCode" name='zipCode' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="zipCode" onChange={handleInputChange} />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            phone number
                        </label>
                        <input id='phonenum' name='phonenum' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="phone number" onChange={handleInputChange} />
                    </div>
                </div>
                <div className='mt-7'>
                    <button type='button' class="text-white mr-4 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg" onClick={() => navigate(`/orderDetail`)}  >CheckOut</button>
                    <button type='button' class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg" onClick={OrderDetail}  >submit</button>
                </div>
            </form>
        </div>

    )
}

export default CheckOut
