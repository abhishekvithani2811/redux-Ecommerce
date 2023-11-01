import logo from './logo.svg';
import './App.css';
import Header from './container/header';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Product from './container/productdetail';
import ProductComponant from './container/productComponant';
import addToCart from './container/addToCart';
import Login from './container/login';
import SignUp from './container/signup';
import CheckOut from './container/checkOut';
import OrderDetail from './container/orderDetail';
function App() {

  // const prodData = useSelector(state => state)
  // const [prodData1, setprodData] = useState(prodData);

  // const dispatch = useDispatch()
  // dispatch(setProducts({ title: "Hello World" }))
  // console.log("prodData=========", prodData);

  // useEffect(() => {
  //   setprodData(prodData);
  // }, [prodData])
  
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" exact Component={ProductComponant} />
        <Route path="/product/:id" exact Component={Product} />
        <Route path="/addcart/:id" exact Component={addToCart} />
        <Route path="/cartItem" exact Component={addToCart} />
        <Route path="/login" exact Component={Login} />
        <Route path="/signup" exact Component={SignUp} />
        <Route path="/checkOut" exact Component={CheckOut} />
        <Route path="/orderDetail" exact Component={OrderDetail} />
        <Route>404 page not found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
