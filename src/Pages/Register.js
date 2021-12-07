import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'
import { auth } from "../firebase";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const navigate  = useNavigate();

    const signUpWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword( email, password).then((user) =>{
            navigate('/Login')
        })
            .catch(error => {
                setError("Error signing in with password and email!");
                console.error("Error signing in with password and email", error);
            });
    };



    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
            setPassword(value);
        }
        else if(name === 'userName'){
            setName(value)
        }
    };





    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-20 w-auto"
                        src="https://www.pngall.com/wp-content/uploads/2016/06/Ecommerce-Download-PNG.png"
                        alt="Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Login using credentials
                        </a>
                    </p>
                </div>
                {error !== null && <p className = "py-4 bg-red-600 w-full text-red-600 text-center mb-3">{error}</p>}
                <form className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="text" className="sr-only">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange = {(event) => onChangeHandler(event)}
                                id="name"
                                name="userName"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                value={email}
                                onChange = {(event) => onChangeHandler(event)}
                                id="email-address"
                                name="userEmail"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                value={password}
                                onChange = {(event) => onChangeHandler(event)}
                                id="password"
                                name="userPassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick = {(event) => {signUpWithEmailAndPasswordHandler(event, email, password)}}
                        >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register