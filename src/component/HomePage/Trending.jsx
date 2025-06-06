import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Trending = () => {
    return (
        <div>
            {/* Rings... */}
            <div>
                <div className="flex flex-col md:flex-row mt-2 mx-4 md:mx-15 bg-white text-black p-6 rounded shadow relative">
                    <div className="mb-6 md:mb-0 md:w-1/4">
                        <p className="font-bold text-blue-400 text-xl mb-2">Feactured</p>
                        <p className="p-1.5">1gm Gold Designs</p>
                        <p className="p-1.5">Chain Earrings</p>
                        <p className="p-1.5">Diamond Bangles</p>
                        <p className="p-1.5">Vanki Rings</p>
                        <p className="p-1.5">Evil Eye Bracelets</p>
                        <p className="p-1.5">Gold Pendants</p>
                        <p className="p-1.5">Rose Gold Design</p>
                        <p className="p-1.5">Platinum Chains</p>
                    </div>

                    <div className="relative flex flex-wrap gap-6 md:ml-10 md:w-3/4 justify-center md:justify-start">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-72 md:w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/hamburger/01/goldcoin_d.png"
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Mangalsutras Earrings</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-72 md:w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/hamburger/01/MSD_d.png"
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Mangalsutras Earrings</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-72 md:w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/03/eternity_d.png"
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Trendy Mangalsutras</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-72 md:w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/others/Hamburger/02/summer_d.jpg"
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Trendy Mangalsutras</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Trending

