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
            <h1>Hello, <span></span>{name}</h1>
            <h1>Hello, <span></span>{user?.email}</h1>
            <button className="button signout" onClick={logout}>Sign out</button>
        </div>
    )
}

export default Profile;