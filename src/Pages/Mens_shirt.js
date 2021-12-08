import React, {Fragment, useEffect, useState} from 'react'

import Product_list from "../Component/Product_list";

const Mens_shirt =(props) => {

    const products = [
        {
            id: 1,
            name: 'Navy Blue Casual Shirt',
            href: '#',
            price: 'LKR950',
            imageSrc: 'https://img3.junaroad.com/uiproducts/14554704/pri_175_p-1517495991.jpg',
            imageAlt: 'Men wearing casual  navy blue shirt.',
        },
        {
            id: 2,
            name: 'Solid Mens Casual Trouser',
            href: '#',
            price: 'LKR2000',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=MTHLTR004157OLIVE_default_super_zoom_image_d61a023b83a345369f945a8e367f9858.jpg',
            imageAlt: 'Solid Mens Casual Trousers.',
        },
        {
            id: 3,
            name: 'Wrinkle Free Slim Fit Checks Shirt',
            href: '#',
            price: 'LKR2490',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=50013954283NAVY_default_super_zoom_image_a9c6c85c0140428fad72a24641fe8af6.jpg',
            imageAlt: 'Wrinkle Free Slim Fit Checks Shirt.',
        },
        {
            id: 4,
            name: 'Checkered Slim Fit Shirt',
            href: '#',
            price: 'LKR2100',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=MT644RED_default_super_zoom_image_15376409dcf3460a8c51cfed01070b47.jpg',
            imageAlt: 'Checkered Slim Fit Shirt.',
        },
        {
            id: 5,
            name: 'Santa Barbara Polo & Racquet Club Cotton Shorts',
            href: '#',
            price: 'LKR1650',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=1001696478CORAL_default_super_zoom_image_0f272bc1b555485e8c9d8e1cb0d3749e.jpg',
            imageAlt: 'Santa Barbara Polo & Racquet Club Cotton Shorts.',
        },
        {
            id: 6,
            name: 'Santa Barbara Polo & Racquet Club Linen Chinos',
            href: '#',
            price: 'LKR4010',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=1001696675OATMEAL_default_super_zoom_image_4445724ca4094522a9c4b3c832fc6689.jpg',
            imageAlt: 'Santa Barbara Polo & Racquet Club Linen Chinos.',
        },
        // More products...
    ]


    return (
        <>
            <Product_list
                name="Mens Casual"
                products ={products}
            />
            </>
    )
}

export default Mens_shirt