import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CiCoinInsert } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";

const ViewFull_Collection = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row p-4">
                <div className="w-full md:w-[800px] max-w-full">
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg" alt="Main Banner"
                        className="w-full h-auto shadow-md"
                    />
                </div>

                <div className="bg-gradient-to-b from-gray-400 to-gray-100 p-4 rounded-xl shadow-md mt-6 md:mt-0 md:ml-6 flex-1">
                    <div className="flex flex-wrap md:flex-nowrap gap-4 mt-12 justify-center">

                        <div className="flex flex-col items-center">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11128-1YS300_12_listhover.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 1"
                            />
                            <div className="flex ml-2">
                                <p>₹57,163 </p>
                                <p className="text-sm m-1 line-through">₹ 65,024</p>
                            </div>
                            <p className="text-xs text-center max-w-[170px]">Twilled 22kt Gold Unise...</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05356-RGS3SS_11_listfront.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 2"
                            />
                            <div className="flex ml-2">
                                <p>₹57,163 </p>
                            </div>
                            <p className="text-xs text-center max-w-[170px]">Adoring Twist 22kt Unise...</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11128-1YS300_12_listhover.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 3"
                            />
                            <div className="flex ml-2">
                                <p>₹70,512 </p>
                            </div>
                            <p className="text-xs text-center max-w-[170px]">Twilled 22kt Gold Unise...</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11128-1YS300_12_listhover.jpg" width={170} className="rounded-lg border shadow"
                                alt="Product 4"
                            />
                            <div className="flex ml-2">
                                <p>₹34,411 </p>
                            </div>
                            <p className="text-xs text-center max-w-[170px]">Knot 22kt Gold Bracelete...</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center space-x-4">
                            <ArrowLeft className="rounded-full bg-violet-900 p-2 text-white cursor-pointer" size={24} />
                            <ArrowRight className="rounded-full bg-violet-900 p-2 text-white cursor-pointer" size={24} />
                        </div>

                        <button className="bg-fuchsia-800 text-white px-4 text-sm py-2 rounded">
                            View Full Collection
                        </button>
                    </div>
                </div>
            </div>

            {/* Next section... */}
            <div className="flex flex-col md:flex-row p-4 gap-5">
                <div className="w-full md:w-1/2">
                    <img className="rounded-2xl w-full h-auto" src="https://cdn.caratlane.com/media/static/images/V4/2025/Shaya/05-May/30/Travel%20Campaign/Responsive_2.jpg"
                        alt=""
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <img className="rounded-2xl w-full h-auto" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/Oceanic/02/Desktop_1740x850_1.jpg"
                        alt=""
                    />
                    <img className="rounded-2xl w-full h-auto" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/harvest/02/Userbased_desktop.jpg"
                        alt=""
                    />
                </div>
            </div>


            {/*  */}
            <div className="p-4 rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between bg-gray-100 w-full p-5 rounded-2xl">
                    <div className="mb-6 md:mb-0">
                        <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://assets.cltstatic.com/images/responsive/hp/hp-asset1.png"
                            width={150}
                            alt=""
                        />
                        <p className="text-xl font-semibold text-purple-950 text-center md:text-left mt-2">
                            Wrapped with Love
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5">
                        <div>
                            <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/6-tile/01/01_d.jpg" width={160}
                                alt=""
                            />
                            <p className="text-sm text-center md:text-left p-2 text-purple-950 font-bold">
                                LATEST RINGS
                            </p>
                        </div>

                        <div>
                            <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/6-tile/01/02_d.jpg"
                                width={160}
                                alt=""
                            />
                            <p className="text-sm text-center md:text-left p-2 text-purple-950 font-bold">
                                TRENDY BRACELETE
                            </p>
                        </div>

                        <div>
                            <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/6-tile/01/03_d.jpg"
                                width={160}
                                alt=""
                            />
                            <p className="text-sm text-center md:text-left p-2 font-bold text-purple-950">
                                MUST HAVE
                            </p>
                            <p className="text-sm text-center md:text-left font-bold text-purple-950">
                                EARINGS
                            </p>
                        </div>

                        <div>
                            <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/6-tile/01/04_d.jpg"
                                width={160}
                                alt=""
                            />
                            <p className="text-sm text-center md:text-left p-2 text-purple-950 font-bold">
                                All DAY CHAINS
                            </p>
                        </div>

                        <div>
                            <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/6-tile/01/05_d.jpg"
                                width={160}
                                alt=""
                            />
                            <p className="text-sm text-center md:text-left p-2 text-purple-950 font-bold">
                                ONE TRENDS
                            </p>
                            <p className="text-sm text-center md:text-left text-purple-950 font-bold">
                                CHAINS
                            </p>
                        </div>

                        <div>
                            <img className="mx-auto md:ml-5 mt-4 rounded-2xl" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/6-tile/01/06_d.jpg" width={160}
                                alt=""
                            />
                            <p className="text-sm text-center md:text-left p-2 text-purple-950 font-bold">
                                UNDER 30K STYLES
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="pt-8">
                <div className="flex flex-col md:flex-row flex-wrap h-auto w-full bg-gray-100 text-center p-8 md:p-14 gap-6 md:gap-15 justify-center">
                    <div className="flex items-center space-x-2 justify-center md:justify-start w-full md:w-auto">
                        <div className="bg-blue-200 p-2 rounded-full">
                            <CiCoinInsert size={40} className="text-white" />
                        </div>
                        <p className="font-bold text-purple-900 mt-1">15 Day Exchange</p>
                    </div>

                    <div className="flex items-center space-x-2 justify-center md:justify-start w-full md:w-auto">
                        <div className="bg-pink-200 p-2 rounded-full">
                            <TfiBag size={25} />
                        </div>
                        <p className="font-bold text-purple-900 mt-1">1 Year Warranty</p>
                    </div>

                    <div className="flex items-center space-x-2 justify-center md:justify-start w-full md:w-auto">
                        <div className="bg-gray-100 p-2 rounded-full">
                            <IoCheckmarkDoneCircleOutline size={25} />
                        </div>
                        <p className="font-bold text-purple-900 mt-1">100% Certified</p>
                    </div>

                    <div className="flex items-center space-x-2 justify-center md:justify-start w-full md:w-auto">
                        <div className="bg-yellow-200 p-2 rounded-full">
                            <FaArrowsRotate size={25} />
                        </div>
                        <p className="font-bold text-purple-900 mt-1">Lifetime Exchange</p>
                    </div>
                </div>
            </div>


            {/*  */}
            <div className="flex flex-col md:flex-row p-4 pt-10 gap-5">
                <div className="w-full md:w-1/2">
                    <img className="rounded-2xl w-full h-auto" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/Engagement_2/03/Square_Desktop.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <img className="rounded-2xl w-full h-auto" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/LatestDesign/03/Desktop_1740x850.jpg" alt="" />
                    <img className="rounded-2xl w-full h-auto" src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/AppBanner/xclusive/Desktop_1740x850.jpg" alt=""
                    />
                </div>
            </div>



        </div>
    )
}

export default ViewFull_Collection
