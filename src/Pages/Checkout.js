import React, {Fragment, useEffect, useState} from 'react'
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Checkout =() => {

    const [cart, setCart] = useState([])
    const [user, error] = useAuthState(auth);
    const [aleart, setAleart] = useState()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const currentUser = auth.currentUser
        if (currentUser) {
            const uid = currentUser.uid;
            db.collection("cart").where("userId", "==", uid)
                .onSnapshot((querySnapshot) => {
                    var p = [];
                    querySnapshot.forEach((doc) => {
                        p.push(doc.data());
                    });

                    setCart(p)
                });
        }
    }, [user]);

    const clearCart =() => {
        const currentUser = auth.currentUser
        if (currentUser) {
            const uid = currentUser.uid;

            const fetchBlogs1 = async () => {
                const ref =  await db
                    .collection("cart").where("userId", "==", uid)
                    .get();
                ref.forEach(element => {
                    element.ref.delete()
                });
            }
            fetchBlogs1();
        }

    }

    const order = (e) => {
        e.preventDefault()
        const ref =db.collection("orders").doc();
        ref.set({
            firstName:firstName,
            lastName:lastName,
            email:email,
            address:address,
            city:city,
            postCode:postCode,
            notes:notes,
            order:cart,
        }).then((res) => {
            clearCart()
            console.log('Order done!')
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("");
            setCity("");
            setPostCode("");
            setNotes("");
            setAleart(true)
        })
            .catch(error => console.log({ errorMessage: error.message }))
    }


    const disbleAleart = (e) =>{
        e.preventDefault()
        setAleart(false)
    }

    function total() {
        let x = 0
        cart.map((i) => {
            x += i.price * i.quantity

        })
        return x + 300
    }

    function subtotal() {
        let x = 0
        cart.map((i) => {
            x += i.price * i.quantity

        })
        return x
    }

    return(

    <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
            <div className="flex flex-col md:w-full">
                <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                </h2>
                <form className="justify-center w-full mx-auto">
                    <div className="">
                        <div className="space-x-0 lg:flex lg:space-x-4">
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                    Name</label>
                                <input name="firstName" type="text" placeholder="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)}
                                       className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                            </div>
                            <div className="w-full lg:w-1/2 ">
                                <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                    Name</label>
                                <input name="Last Name" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}
                                       className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-full">
                                <label htmlFor="Email"
                                       className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                <input name="Last Name" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                       className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-full">
                                <label htmlFor="Address"
                                       className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                <textarea value={address} onChange={(e) => setAddress(e.target.value)}
    className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
    name="Address" cols="20" rows="4" placeholder="Address" required/>
                            </div>
                        </div>
                        <div className="space-x-0 lg:flex lg:space-x-4">
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="city"
                                       className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                <input name="city" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}
                                       className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                            </div>
                            <div className="w-full lg:w-1/2 ">
                                <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                    Postcode</label>
                                <input name="postcode" type="number" min="0" placeholder="Post Code" value={postCode} onChange={(e) => setPostCode(e.target.value)}
                                       className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <label className="flex items-center text-sm group text-heading">
                                <input type="checkbox"
                                       className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span className="ml-2">Save this information for next time</span></label>
                        </div>
                        <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                                                      className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                            (Optional)</label><textarea name="note" value={notes} onChange={(e) => setNotes(e.target.value)}
    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
    rows="4" placeholder="Notes for delivery"/>
                        </div>
                        {cart.length ?(
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" onClick={(e)=>order(e)}>Process
                                </button>
                            </div>
                        ):(
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900 cursor-not-allowed">
                                    Process
                                </button>
                            </div>
                        )}
                        {aleart?(
                            <div id="alert-3" className="flex mt-8 bg-green-100 rounded-lg p-4 mb-4 dark:bg-green-200"
                                 role="alert">
                                <svg className="w-5 h-5 text-green-700 flex-shrink-0 dark:text-green-800"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                                    Done !<a href="#" className="font-semibold hover:text-green-800 underline dark:hover:text-green-900">Order
                                    Successful.</a>
                                </div>
                                <button type="button"
                                        className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
                                        data-collapse-toggle="alert-3" aria-label="Close"
                                        onClick={(e)=>disbleAleart(e)}>
                                    <span className="sr-only">Close</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        ):null}
                    </div>
                </form>
            </div>
            <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                <div className="pt-12 md:pt-0 2xl:ps-4">
                    <h2 className="text-xl font-bold">Order Summary
                    </h2>
                    <div className="mt-8">
                        <div className="flex flex-col space-y-4">
                            {cart.map((product) => (
                            <div key={product.id} className="flex space-x-4">
                                <div>
                                    <img src={product.imageSrc} alt="image"
                                         className="w-60"/>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">{product.name}</h2>
                                    <p className="text-sm">{product.quantity}</p>
                                    <span className="text-red-600">Price</span> LKR{product.price}
                                </div>

                            </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Subtotal<span className="ml-2">LKR {subtotal()}</span></div>
                    <div
                        className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Shipping Tax<span className="ml-2">LKR 300</span></div>
                    <div
                        className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Total<span className="ml-2">LKR {total()}</span></div>
                </div>
            </div>

        </div>
    </div>

    )
}

export default Checkout