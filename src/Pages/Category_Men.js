import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const callouts = [
    {
        name: 'Home to Office',
        description: 'Formal Shirt & Trousers',
        imageSrc: 'https://cdn.vmartretail.com/images1/thumbnails/97138/640/1/143737274-97138180-1637910812.jpg',
        imageAlt: 'Men wearing a Blue Shirt.',
        href: '#',
    },
    {
        name: 'For Every Moment',
        description: 'Jeans',
        imageSrc: 'https://n.nordstrommedia.com/id/sr3/4e182618-a6f8-4855-b3cd-2c12ac4698f6.jpeg?h=365&w=240&dpr=2',
        imageAlt: 'Men wearing a Blue Jean.',
        href: '#',
    },
    {
        name: 'Your Choice',
        description: 'Casual Shirts & Pants',
        imageSrc: 'https://www.nolimit.lk/storage/toys-and-books2-0013-imgl2039-540x600.jpg',
        imageAlt: 'Men wearing a Casual Shirt.',
        href: '#',
    },
    {
        name: 'Extra care',
        description: 'Accessories',
        imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2020/10/AH/VU/KG/48866434/10-500x500.jpg',
        imageAlt: 'Men wearing a Black watch.',
        href: '#',
    },
    {
        name: 'Comfort First' ,
        description: 'Inner wear',
        imageSrc: 'https://5.imimg.com/data5/DP/LJ/MY-5343253/mens-cotton-inner-wear-500x500.jpg',
        imageAlt: 'Men wearing a White Top.',
        href: '#',
    },
    {
        name: 'For Special Days',
        description: 'Ethnic Wear',
        imageSrc: 'https://www.nolimit.lk/storage/online-shoot-0123-w0a2946.jpg',
        imageAlt: 'Men wearing a Sarong.',
        href: '#',
    },
]

const Category_Men = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900 mb-8 ">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category_Men
