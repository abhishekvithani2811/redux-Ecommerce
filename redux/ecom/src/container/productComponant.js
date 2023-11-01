import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProducts } from '../redux/actions/produtsAction'
import axios from 'axios'
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ProductComponant = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  console.log(useSelector((state) => state))
  const FetchProducts = async () => {
    const response = await axios
      .get("http://192.168.1.143:3002/user/product")
      .catch((error) => {
        console.log(error);
      })
    dispatch(setProducts(response.data))
    console.log("response", response.data)
    // console.log(products.allProducts.products)
  }
  useEffect(() => {
    FetchProducts();
  }, []);
  const navigate = useNavigate()  

  return (
    <div>
      <h2 className=' text-5xl   font-medium flex justify-center font-serif  underline decoration-double decoration-green-400	'>Products</h2>
      <div>
        <section class="text-gray-600 body-font flex justify-center pl-24">
          <div class="container">
            <div class="flex flex-wrap ">
              {products?.length && products.map((product) => {
                // console.log(product)
                return (
                  <div class="relative lg:w-1/5  border-2	border-black	 py-5 px-2 mt-5 ml-10 mx-3  md:w-1/2">
                    <a class="  rounded overflow-hidden flex justify-center">
                      <img alt="ecommerce" class="transition-opacity  object-cover block h-40" src={product.productimage} />
                    </a>

                    <div class="mt-4 flex flex-col items-center">
                      <h2 class="text-gray-900 title-font text-lg font-medium  mb-0 pb-0" >{
                        product.name}</h2>
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 ">${product.price}</h3>
                      <div className='flex flex-row'><h2 class="text-gray-500 text-xl tracking-widest title-font mb-1 ">{product.rating}</h2><StarHalfIcon /></div>
                      {/* <p class="mt-1 ">$16.00</p> */}
                      <div className='flex'>
                        <button onClick={() => navigate(`/product/${product.id}`)} class="bg-transparent hover:bg-green-200  		 font-semibold hover:text-gray-700	mt-2		 py-2 px-4 border border-green-400 	shadow-md hover:border-transparent rounded">
                          View</button>

                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductComponant
