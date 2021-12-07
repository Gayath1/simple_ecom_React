import React, {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link, useNavigate  } from "react-router-dom";

import Login from '../src/Pages/login'
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Header from './Component/Header'

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
                </Routes>
            </Router>
        </>

    )
}

export default Path