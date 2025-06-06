import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterNavbar from "./FilterNavbar";
import Sidebar from "./Sidebar";
import FooterPage from "./FooterPage";

const Filter_Home = () => {
    return (
        <div>

            <FilterNavbar />

            <div className='bg-gray-100 w-full p-3 px-5 sm:px-8'>
                <p className='text-purple-900 text-sm sm:text-base font-medium'>
                    Jewellery Designs – 8456 Designs
                </p>
                <p className='text-purple-800 text-xs sm:text-sm'>Home / Jewellery</p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 p-4 sm:p-10 overflow-x-auto">
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-2 whitespace-nowrap">All</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-2 whitespace-nowrap">New In</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-2 whitespace-nowrap">Designs In Store</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-2 whitespace-nowrap">Faster Delivery</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-2 whitespace-nowrap">Try At Home</button>
            </div>

            <div className="flex flex-col lg:flex-row">
                <Sidebar />
                <ProductCard />
            </div>
            <FooterPage />
        </div>

    )
}

export default Filter_Home








