import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Gifting = () => {
    return (
        <div>
            {/* Rings */}
            <div>
                <div className="flex flex-wrap justify-between mt-2 bg-white text-black p-6 rounded shadow relative gap-6">
                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Occasions</p>
                        <p>Anniversary Gift</p>
                        <p>Personalised</p>
                        <p>Bracelet & Bangles</p>
                        <p>Charms</p>
                        <p>Earrings</p>
                        <p>Necklaces & Pendants</p>
                        <p>Rings</p>
                        <p>Solitaires</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">By Price</p>
                        <p>Under ₹ 10k</p>
                        <p>₹ 10k 20k</p>
                        <p>₹ 20k 30k</p>
                        <p>₹ 30k 50k</p>
                        <p>₹ 50k 70k</p>
                        <p>₹ 75k & Above</p>
                    </div>

                    <div className="min-w-[140px] w-full sm:w-auto">
                        <p className="font-bold text-blue-400 text-xl mb-2">Gifting</p>
                        <p>Wife</p>
                        <p>Daughter</p>
                        <p>Kids</p>
                        <p>Men</p>
                        <p>Mother</p>
                        <p>Self</p>
                    </div>

                    <div className="relative flex flex-wrap gap-4 w-full sm:w-auto mr-0 sm:mr-10 justify-center sm:justify-start">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/03/egold_d.png" alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Gift Card</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_Ww.jpg" alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium"># WearYourWins</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Gifting

