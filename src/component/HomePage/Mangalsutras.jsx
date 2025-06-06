import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Mangalsutras = () => {
    return (
        <div>
            {/* Rings */}
            <div>
                <div className="flex flex-wrap justify-between mt-2 bg-white text-black p-6 rounded shadow relative gap-6">
                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">Feactured</p>
                        <p>Latest Design</p>
                        <p>Bestsellers</p>
                        <p>Fast Delivery</p>
                        <p>Special Deals</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Style</p>
                        <p className="font-bold text-black">All Mangalsutras</p>
                        <p>Modern</p>
                        <p>Traditional</p>
                        <p>Solitaire</p>
                        <p>Infinity</p>
                        <p>Fancy</p>
                        <p>MangalSutra Rings</p>
                        <p>MangalSutra Bracelets</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Metal & Stone</p>
                        <div className="flex gap-1 mt-2 items-center">
                            <IoDiamond />
                            <p>Diamond</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <BsSuitDiamond />
                            <p>GameStone</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <GiFlatPlatform />
                            <p>Platinum</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <GiGoldBar />
                            <p>Gold</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <AiFillGolden />
                            <p>Yellow Gold</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <AiFillGolden />
                            <p>22KT Gold</p>
                        </div>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto text-center">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Price</p>
                        <p>₹ 20k to ₹ 30k</p>
                        <p>₹ 30k to ₹ 50k</p>
                        <p>₹ 50k to ₹ 57k</p>
                        <p>₹ 75 & Above</p>
                    </div>

                    <div className="relative flex flex-wrap gap-4 w-full sm:w-auto mr-0 sm:mr-10 justify-center sm:justify-start">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_ME.jpg"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Mangalsutras Earrings</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_TN.jpg"
                                    alt=""
                                    className="object-cover w-full h-full"
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

export default Mangalsutras

