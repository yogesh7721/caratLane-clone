import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Collections = () => {
    return (
        <div>
            {/* Rings */}
            <div>
                <p className="font-bold text-blue-400 ml-5 sm:ml-10 mt-5 text-xl">
                    CaratLane Collections
                </p>
                <div className="flex flex-wrap justify-between mt-2 bg-white text-black p-4 sm:p-6 rounded shadow relative gap-6">
                    <div className="flex flex-col space-y-4 pl-4 sm:pl-12 w-full sm:w-auto min-w-[150px]">
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/utsav.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Utsav</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src=" https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Butterfly.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Butterfly</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Lotus.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Lotus</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Disney.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Disney</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/harmony.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Harmony</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/ballet.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Ballet</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 w-full sm:w-auto min-w-[150px] items-center sm:items-start">
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Alpona.png" width={50} alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Alpona</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Ombre.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Ombre</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Sholapith.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Sholapith</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/mogra.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Mogra</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/kanak.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Kanak</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/mandala.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Mandala</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 w-full sm:w-auto min-w-[150px] items-center">
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Adaa.png" width={50} alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Adaa</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Aaranya.png" width={50} alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Aaranya</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/HarryPotter.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Harry Potter</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/blaze.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Blaze</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/dunes.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Tango</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/dunes.png" width={50}
                                alt=""
                            />
                            <p className="p-2 whitespace-nowrap">Dunes</p>
                        </div>
                    </div>

                    <div className="relative flex flex-wrap gap-4 justify-center sm:justify-end w-full sm:w-auto mr-4 sm:mr-10 mt-4 sm:mt-0">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/hamburger/01/Sol_d.png" alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Sol</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/hamburger/01/Luna_d.png" alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Luna</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Collections

