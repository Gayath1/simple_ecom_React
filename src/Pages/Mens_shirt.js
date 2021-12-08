import React, {Fragment, useEffect, useState} from 'react'
import {db} from '../firebase';
import Product_list from "../Component/Product_list";

const Mens_shirt =(props) => {

    const products = [
        {
            id: 1,
            name: 'Navy Blue Casual Shirt',
            href: '/Item/1',
            price: 'LKR950',
            imageSrc: 'https://img3.junaroad.com/uiproducts/14554704/pri_175_p-1517495991.jpg',
            imageAlt: 'Men wearing casual  navy blue shirt.',
        },
        {
            id: 2,
            name: 'Solid Mens Casual Trouser',
            href: '/Item/2',
            price: 'LKR2000',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=MTHLTR004157OLIVE_default_super_zoom_image_d61a023b83a345369f945a8e367f9858.jpg',
            imageAlt: 'Solid Mens Casual Trousers.',
        },
        {
            id: 3,
            name: 'Wrinkle Free Slim Fit Checks Shirt',
            href: '/Item/3',
            price: 'LKR2490',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=50013954283NAVY_default_super_zoom_image_a9c6c85c0140428fad72a24641fe8af6.jpg',
            imageAlt: 'Wrinkle Free Slim Fit Checks Shirt.',
        },
        {
            id: 4,
            name: 'Checkered Slim Fit Shirt',
            href: '/Item/4',
            price: 'LKR2100',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=MT644RED_default_super_zoom_image_15376409dcf3460a8c51cfed01070b47.jpg',
            imageAlt: 'Checkered Slim Fit Shirt.',
        },
        {
            id: 5,
            name: 'Santa Barbara Polo & Racquet Club Cotton Shorts',
            href: '/Item/5',
            price: 'LKR1650',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=1001696478CORAL_default_super_zoom_image_0f272bc1b555485e8c9d8e1cb0d3749e.jpg',
            imageAlt: 'Santa Barbara Polo & Racquet Club Cotton Shorts.',
        },
        {
            id: 6,
            name: 'Santa Barbara Polo & Racquet Club Linen Chinos',
            href: '/Item/6',
            price: 'LKR4010',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=1001696675OATMEAL_default_super_zoom_image_4445724ca4094522a9c4b3c832fc6689.jpg',
            imageAlt: 'Santa Barbara Polo & Racquet Club Linen Chinos.',
        },
        // More products...
    ]
    const [blogs,setBlogs]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(() => {
        const fetchBlogs=async()=> {
            const ref = db
                .collection("Products")
                .get().then((snapshot) =>{
                snapshot.forEach(doc => {
                    blogs.push(doc.data());
                    setBlogs((doc.data()))
                })
            })
            setLoading(false)
        }
        fetchBlogs();
    }, [])


    if(loading){
        return (

            <div  className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div
                    className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
            </div>
        )
    }

    return (

        <>

            <Product_list
                name="Mens Casual"
                products ={blogs}
            />
            </>
    )
}

export default Mens_shirt