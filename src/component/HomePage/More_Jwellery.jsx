import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const More_Jwellery = () => {
    return (
        <div>
            {/* Rings.. */}
            <div>
                <div className="flex flex-wrap justify-between mt-2 bg-white text-black p-6 rounded shadow relative gap-6">

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">Shop For Women</p>
                        <p>Nose Rings</p>
                        <p>Nose Pins</p>
                        <p>Watch Charms</p>
                        <p>Charms</p>
                        <p>22kt Jewellery</p>
                        <p>Silver Jwellery</p>
                        <p>Platinum Jewellery</p>
                        <p>Gold Chains</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">Shop For Men</p>
                        <p>Rings</p>
                        <p>Studs</p>
                        <p>Chain</p>
                        <p>Pendants</p>
                        <p>Bracelets</p>
                        <p>Kadas</p>
                        <p>Under ₹ 10k</p>
                        <p>₹ 10 to ₹ 20k</p>
                        <p>₹ 20 to ₹ 30k</p>
                        <p>₹ 30 to ₹ 50k</p>
                        <p>₹ 50 to ₹ 70k</p>
                        <p>₹ 75 & Above</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">Shop For Kids</p>
                        <p>Earrings</p>
                        <p>Rings</p>
                        <p>Bracelets</p>
                        <p>Necklaces</p>
                        <p>Pendants</p>
                        <p>Baby Bangles</p>
                        <p>Under ₹ 10k</p>
                        <p>₹ 10 to ₹ 20k</p>
                        <p>₹ 20 to ₹ 30k</p>
                        <p>₹ 30 to ₹ 50k</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Metal & Stone</p>

                        <div className="flex gap-1 mt-2 items-center">
                            <IoDiamond className="mt-1" />
                            <p>Diamond</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <BsSuitDiamond className="mt-1" />
                            <p>GameStone</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <GiFlatPlatform className="mt-1" />
                            <p>Platinum</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <GiGoldBar className="mt-1" />
                            <p>Gold</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <AiTwotoneGold className="mt-1" />
                            <p>Rose Gold</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <AiFillGolden className="mt-1" />
                            <p>Yellow Gold</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <AiFillGolden className="mt-1" />
                            <p>22KT Gold</p>
                        </div>
                    </div>

                    <div className="relative flex flex-wrap gap-4 w-full sm:w-auto mr-0 sm:mr-10 justify-center sm:justify-start">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_Iconics.jpg"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">CaratLane Iconics</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_CF.jpg"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Customer Favourites</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default More_Jwellery

