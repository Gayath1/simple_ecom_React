import React from "react";
import {Link} from "react-router-dom";

export default function Home() {

    const callouts = [
        {
            name: "Men's casual",
            description: 'Navy Blue Casual Shirt',
            imageSrc: 'https://img3.junaroad.com/uiproducts/14554704/pri_175_p-1517495991.jpg',
            imageAlt: 'Men wearing a Blue Shirt.',
            href: '/Item/1',
        },
        {
            name: "Men's casual",
            description: 'Solid Mens Casual Trouser',
            imageSrc: 'https://cf.fgroup.workers.dev/bf/resize?key=MTHLTR004157OLIVE_default_super_zoom_image_d61a023b83a345369f945a8e367f9858.jpg',
            imageAlt: 'Solid Mens Casual Trousers.',
            href: '/Item/2',
        }
    ]

    return(
        <>
            <div >
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 ">
                                <div  className="group relative">
                                    <div className=" w-full h-80 flex items-center  justify-center bg-gray-100 lg:rounded-l-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">

                                        <h1 className="text-4xl font-extrabold  bg-clip-text text-gray-700 ">Best Quality</h1>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to="/Category/Men">
                                        <button className=" bg-indigo-600 text-white bottom-1 hover:bg-indigo-500 px-8  py-2.5 rounded font-bold text-lg text-center">Shop now</button>
                                        </Link>

                                    </div>
                                </div>
                            <div  className="group relative">
                                <div className="relative w-full h-80 bg-white lg:rounded-r-lg overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                                        alt="Image"
                                        className="w-full  h-full object-center object-cover "
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            <h2 className="text-2xl font-extrabold text-gray-900">Our Favourites</h2>

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
            </div>

        </>
    )
}