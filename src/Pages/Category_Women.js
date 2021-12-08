import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const callouts = [
    {
        name: 'Home to Office',
        description: 'Blouses & Shirts',
        imageSrc: 'https://nilsonline.lk/image/cache/catalog/nils/product/025007512_1-612x875.jpg',
        imageAlt: 'Women wearing a Blouse.',
        href: '#',
    },
    {
        name: 'For Every Moment',
        description: 'Jeans',
        imageSrc: 'https://www.nolimit.lk/storage/womens-jeans/womens-denim-jeans-ladies-clothing-sri-lanka-540x600.jpg',
        imageAlt: 'Women wearing a Blue Jean.',
        href: '#',
    },
    {
        name: 'Your Choice',
        description: 'Skirts',
        imageSrc: 'https://m.media-amazon.com/images/I/71vxhfIeAuL._UL1500_.jpg',
        imageAlt: 'Women wearing a Skirt.',
        href: '#',
    },
    {
        name: 'Extra care',
        description: 'Accessories',
        imageSrc: 'https://img.joomcdn.net/8f3f0c280ce325d8756d88d2d5792e0a95dce3c7_original.jpeg',
        imageAlt: 'Women wearing a silver and golden watch.',
        href: '#',
    },
    {
        name: 'Comfort First' ,
        description: 'Lingerie & Nightwear',
        imageSrc: 'https://cdn.shopify.com/s/files/1/2030/2913/products/Axami-Lingerie-Bordo-Babydoll-Front_large.jpg?v=1629388785',
        imageAlt: 'Women wearing a Red Nightwear.',
        href: '#',
    },
    {
        name: 'For Special Days',
        description: 'Ethnic Wear',
        imageSrc: 'https://www.loomfolks.com/wp-content/uploads/2020/06/Formal-_-Charming-Blackish-Brown-Tussar-Staple-Saree-with-Giccha-Pallu1-570x760.jpg',
        imageAlt: 'Women wearing a black Saree.',
        href: '#',
    },
]

const Category_Women = () => {
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
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category_Women

