import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Rings = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Rings..... */}
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
                        <p>All Rings</p>
                        <p>Engagement</p>
                        <p>Dailywear</p>
                        <p>Infinity</p>
                        <p>Cocktail</p>
                        <p>Solitaire</p>
                        <p>Couple Rings</p>
                        <p>Bands</p>
                        <p>Pormise Rings</p>
                        <p>Silver By Shaya</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Metal & Stone</p>
                        <div className="flex gap-1 mt-2 items-center">
                            <IoDiamond className="mt-1" />
                            <p>Diamond</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <GiKaleidoscopePearls className="mt-1" />
                            <p>Pearl</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <GiOysterPearl className="mt-1" />
                            <p>Navratan</p>
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
                            <p>White Gold</p>
                        </div>
                        <div className="flex gap-1 mt-2 items-center">
                            <AiFillGolden className="mt-1" />
                            <p>22KT Gold</p>
                        </div>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto text-center">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Price</p>
                        <p>Under ₹ 10k</p>
                        <p>₹ 10 -₹ 20k</p>
                        <p>₹ 20 -₹ 30k</p>
                        <p>₹ 30 -₹ 50k</p>
                        <p>₹ 40 -₹ 50k</p>
                        <p>₹ 50 -₹ 75k</p>
                        <p>₹ 75 & Above</p>
                    </div>

                    <div className="relative flex flex-wrap gap-4 w-full sm:w-auto mr-0 sm:mr-10 justify-center sm:justify-start">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_MB.jpg"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-lg font-medium">Message Bands</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_PC.jpg"
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-lg font-medium">Message Bands</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Paraph..... */}
                <div className="mt-7 px-6">
                    <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
                        <p className="text-gray-700 font-medium">For Women</p>
                        <div className="h-6 border-l border-gray-400"></div>
                        <p className="text-gray-700 font-medium">For Men</p>
                        <div className="h-6 border-l border-gray-400"></div>
                        <p className="text-gray-700 font-medium">For Kids</p>
                        <div className="h-6 border-l border-gray-400"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Rings

