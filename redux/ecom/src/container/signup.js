import axios from 'axios';
import React, { useState } from 'react';
import { signUpFailure, signUpSuccess } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { connect } from 'react-redux';
// import { Formik } from "formik";
// import * as Yup from "yup";
// const schema = Yup.object().shape({
//   username: Yup.string()
//     .required("username is a required field"),
//     // .min(, "Mininum 7 characters")
//     // .max(15, "Maximum 15 characters"),
//   password: Yup.string()  
//     .required("Password is a required field")
//     // .min(8, "Password must be at least 8 characters"),
// });

// export const loginUser = (credentials) => {
//   console.log(credentials)

//   return (credentials) => {
//       console.log(credentials)
//       // dispatch(loginRequest());


//   };
// };

const SignUp = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const navigate = useNavigate()
    const handleInputChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(credentials)
        try {
            const response = await axios.post('http://192.168.1.143:3002/register', credentials, {
                'Content-Type': 'application/json',
                Accept: "application/json"

            })
            console.log(response.data)
            if (response.password == response.confirm_password) {
                window.localStorage.setItem("token", response.data)
                dispatch(signUpSuccess(response.data));
                navigate('/')
            }
            
        }
        catch (error) {
            dispatch(signUpFailure(error.message));
            console.log(error)
            // alert("password do not match")
             if (error.response.data.msg == "password are not matched") {
                toast.error('password do not match', {
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
        };
    }
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto  items-center flex justify-center">
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col">
                        <form noValidate>
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5 text-center">SignUp....</h2>

                            <div class="relative mb-4">
                                <label for="username" class="leading-7 text-sm text-gray-600">User Name</label>
                                <input type="text" id="username"
                                    name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
                                <p className="error">
                                </p>
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
                                <p className="error">
                                </p>
                            </div>
                            <div class="relative mb-4">
                                <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
                                <p className="error">
                                </p>
                            </div>
                            <div class="relative mb-4">
                                <label for="confirm_password" class="leading-7 text-sm text-gray-600">conform Password</label>
                                <input type="password" id="confirm_password" name="confirm_password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleInputChange} />
                                <p className="error">
                                </p>
                            </div>
                            <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleFormSubmit} >SignUp</button>
                            {/* {err && <p>{err}</p>} */}
                            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default SignUp
