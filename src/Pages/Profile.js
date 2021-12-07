import React, {useEffect, useState} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import '../App.css';
import {useNavigate} from "react-router-dom";


const Profile = () => {


    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate  = useNavigate();

    // const fetchUserName = async () => {
    //     try {
    //         const query = await db
    //             .collection("users")
    //             .where("uid", "==", user?.uid)
    //             .get();
    //         const data = await query.docs[0].data();
    //         setName(data.name);
    //     } catch (err) {
    //         console.error(err);
    //         alert("An error occured while fetching user data");
    //     }
    // };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/Login");
        // fetchUserName();
    }, [user, loading]);
    return (

        <div className="home">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
                <div
                    className="relative z-10 col-start-1 row-start-1 pl-40  pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
                    <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Profile</p>
                    <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Bella singh</h2>
                </div>
                <div className="col-start-1 row-start-2 pl-40 sm:pb-16">
                    <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                        <svg width="20" height="20" fill="currentColor" className="text-violet-600">
                            <path
                                d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z"/>
                        </svg>
                        <div className="ml-1">
                            <span className="text-black">4.94</span>
                            <span className="sm:hidden md:inline">(128)</span>
                        </div>
                        <div className="text-base font-normal mx-2">·</div>
                        <div>Reviews</div>
                    </div>
                    <hr className="w-16 border-gray-300 hidden sm:block"/>
                </div>
                <div className="col-start-1 row-start-3 space-y-3 pl-40">
                    <p className="flex items-center text-black text-sm font-medium">
                        <img src="http://source.unsplash.com/100x100/?girl" alt="" className="w-6 h-6 rounded-full mr-2 bg-gray-100"/>
                            own by {user?.email}
                    </p>
                    <button type="button" className="bg-red-700 text-white text-base font-semibold px-6 py-2 rounded-lg" onClick={logout}>Sign out
                    </button>
                </div>
                <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                    <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                        <div className="relative col-span-3 row-span-2 md:col-span-2">
                            <img src="https://cdn.thewirecutter.com/wp-content/uploads/2020/03/wfhclothes-lowres-8.jpg" alt=""
                                 className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"/>
                        </div>
                        <div className="relative hidden md:block">
                            <img src="https://www.usmagazine.com/wp-content/uploads/2019/08/amazon-sweats.png?w=575&quality=86&strip=all" alt=""
                                 className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"/>
                        </div>
                        <div className="relative hidden md:block">
                            <img src="https://i.guim.co.uk/img/media/2679dd9d612ec17feb4f726ed91c162630fff22a/0_0_3107_1865/master/3107.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=027aa257e8370ae71828ce74fa1a9b56" alt=""
                                 className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;