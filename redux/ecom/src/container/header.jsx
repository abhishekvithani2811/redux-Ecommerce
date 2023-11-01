import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Header = () => {
    const  navigate=useNavigate()
    return (
        <div>
            <div class="text-gray-600 body-font shadow ">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24"><AddShoppingCartIcon />
                        </div>


                        <span class="ml-3 text-xl">FASHION BOX
                        </span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer  ">
                        <Link to="/" class="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/" class="mr-5 hover:text-gray-900">Products</Link>
                        <a class="mr-5 hover:text-gray-900">Contact us</a>
                        <a class="mr-5 hover:text-gray-900">Aboout us</a>
                    </nav>
                    {/* cart */}
                    <Link to={'/cartItem'} className='hover:text-slate-800 hover:text-xl'>
                    <LocalMallIcon />
                    </Link>
                    <div className="bg-red-500 rounded-full px-2  text-white text-sm">
                    </div>
                    <button onClick={() => navigate(`/login`)} class="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 border-zinc-50 rounded" >Login</button>
                    <button class="flex ml-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded">Logout</button>
                </div>
            </div>
        </div >
    )
}

export default Header
