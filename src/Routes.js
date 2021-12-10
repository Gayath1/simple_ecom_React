import React, {useContext, useEffect, useState} from 'react'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link, useNavigate  } from "react-router-dom";

import Login from '../src/Pages/login'
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Category_Women from "./Pages/Category_Women";
import Category_Men from "./Pages/Category_Men";
import Mens_shirt from "./Pages/Mens_shirt";

import Product_overview from "./Component/Product_overview";
import Cart from "./Component/Cart";

import Header from './Component/Header'
import Footer from "./Component/Footer";


import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";



const Path = () => {

    const [user, loading, error] = useAuthState(auth);

    // const history = useNavigate();
    // useEffect(() => {
    //     if (loading) {
    //         // maybe trigger a loading screen
    //         return;
    //     }
    //     if (user) history.push("/Profile");
    // }, [user, loading, history]);
    //
    // console.log(user);
    return (
        <>
            <Header/>
            <Router>

                <Routes>
                    <Route path="/Login" exact element={<Login />} />
                    <Route path="/Register" exact element={<Register />} />
                    <Route path="/Profile" exact element={<Profile />} />
                    <Route path="/Category/Women" exact element={<Category_Women />} />
                    <Route path="/Category/Men" exact element={<Category_Men />} />
                    <Route path="/Items/Mens_shirt" exact element={<Mens_shirt />} />
                    <Route path="/Item/:id" exact element={<Product_overview />} />
                    <Route path="/Cart" exact element={<Cart />} />
                </Routes>

            </Router>
            <Footer/>
        </>

    )
}

export default Path